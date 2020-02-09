import React, {FunctionComponent} from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import MapBackground from '../components/background';
import Header from '../components/header';




const LoginPage: FunctionComponent = () => {

    const styles = {
        fontSize: "2vw"        
    }
    const input_styles = {
        width: "50vw"
    }

    return (
        <div>
            <Header />
            <MapBackground />            
            <div className="container">
                <Typography color="primary" style={styles}>
                    Please enter your passphrase to access the site.
                </Typography> 
                <TextField  style={input_styles}/>            
            </div>
        </div>
    )
}

export default LoginPage


