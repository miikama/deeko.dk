import React from 'react'
import indigo from '@material-ui/core/colors/indigo'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import background_wide from '../media/map_template.png';
import background_tall from '../media/map_template_tall.png';
import './background.css'

const MapBackground = () => {    
    const color = indigo[100] + "33"    
    const matches = useMediaQuery('(max-width:600px)');
    const background = matches ? background_tall : background_wide
    
    return (
        <div >
            <img src={background} alt="background" className="background-map"/> 
            <div className="background-overlay" style={{backgroundColor: color}}/>
        </div>
        
    )
}

export default MapBackground