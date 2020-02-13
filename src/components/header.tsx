import React, {FunctionComponent} from 'react';
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Header: FunctionComponent = () => {

    const styles = {
        padding: "1vh"
    }
    return (
        <AppBar style={styles}>
          <Typography variant="h4">
            <Link href="/" color="inherit">DK hub</Link>
          </Typography>  
        </AppBar>
    )
}

export default Header