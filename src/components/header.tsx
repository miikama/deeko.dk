import React, {FunctionComponent} from 'react';
import AppBar from '@material-ui/core/AppBar'


const Header: FunctionComponent = () => {

    const styles = {
        padding: "1vh"
    }
    return (
        <AppBar style={styles}>DK hub</AppBar>
    )
}

export default Header