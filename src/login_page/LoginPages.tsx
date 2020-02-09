import React, {FunctionComponent} from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import MapBackground from '../components/background';
import Header from '../components/header';


const LoginPage: FunctionComponent<RouteComponentProps> = (props) => {

    const styles = {
        fontSize: "2vw"        
    }
    const input_styles = {
        width: "50vw"
    }

    const onSubmit = () => {        
        props.history.push("/map")
    }

    return (
        <div>
            <Header />
            <MapBackground />            
            <div className="container">
                <Typography color="primary" style={styles}>
                    Please enter your passphrase to access the site.
                </Typography> 
                <TextField 
                    style={input_styles}
                />         
                <Button onClick={onSubmit}>Go</Button>   
            </div>
        </div>
    )
}

export default LoginPage


