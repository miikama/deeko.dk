import React, { Component } from 'react';
import { Typography } from '@material-ui/core'
import './EntryText.css';
import MapBackground from '../components/background'
import { RouteComponentProps } from 'react-router-dom'
import Header from '../components/header'
import Authentication from '../Authentication'

interface LetterModel {
    letter: string,
    active: boolean
}
interface EntryState {
    letters: LetterModel[]
}

class EntryText extends Component<RouteComponentProps> {

    initialState ="DEEKOO".split('').map( (letter) => {
        return {letter: letter, active: false };
    }) 

    state: EntryState = {            
        letters : this.initialState
    }    
   
    letterComponent = (letterObj: LetterModel, id: number) => {
        
        const color =  letterObj.active ? "secondary" : "primary";            

        const text_style = {
            fontSize: letterObj.active ? "24vw" : "20vw",
            letterSpacing: "1vw",
            textShadow: "2px 1px " + (letterObj.active ? "#aa9999" : "#9999aa"),
        }        

        return (
            <div className="entry-text-container" key={id}>
                <Typography 
                    color={color}
                    style={text_style}                    
                    onMouseEnter={() => {this.onLetterEnter(letterObj.letter, id)}}
                    onMouseLeave={() => {this.onLetterExit(letterObj.letter, id)}}
                    onClick={() => {this.onLetterClick(letterObj.letter, id)}}
                    classes={{root:"entry-text-component"}}
                    >
                    {letterObj.letter}                    
                </Typography>
            </div>
        )
    }
    
    // also disables all other letters
    activateLetter(index: number){
        let new_letters: LetterModel[] = this.state.letters.map( (letter, state_index) => {        
            return {
                letter: letter.letter,
                active: index === state_index,
            };
        })
        // console.log("Updated letters are: ", new_letters);
        this.setState({
            letters: new_letters
        })
    }
    
    disableLetters(index: number) {        
        let new_letters = this.state.letters 
        
        if(new_letters.length > index)        
            new_letters[index].active = false
        
        this.setState({
            letters: new_letters
        })
    }

    onLetterEnter = (letter: string, id: number) => {
        console.log("entering, state: ", this.state);
        this.activateLetter(id);        
        //console.log('entering ', letter, ' with id: ', id, ' which is active: ', this.state.letters[id].active);
    }

    onLetterExit = (letter: string, id: number) => {
        this.disableLetters(id);
        //console.log('exiting ', letter, ' with id: ', id, ' which is active: ', this.state.letters[id].active);
    }

    onLetterClick = (letter: string, id: number) => {                        
        this.props.history.push("/login")
    }

    letterComponents = () => this.state.letters.map( (letter, index) => {
            return this.letterComponent(letter, index);            
        });    

    render() {        
        
        return (
            <div>
                <Header />                
                <div className="container">
                    <div className="entry-text-main-container">
                        <MapBackground />
                        {this.letterComponents()}
                    </div>
                </div>
            </div>
        );
    }

}

export default EntryText