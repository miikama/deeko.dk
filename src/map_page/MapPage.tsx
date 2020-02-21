import React, { Component, useEffect, useState } from 'react';
import Header from '../components/header';
import MapBackground from '../components/background';
import Typography from '@material-ui/core/Typography';


interface MapEntry {
    latitude: number,
    longitude: number,
    user: string,
}

class MapPage extends Component {

    const [entries, setEntries] = useState<MapEntry[]>([]);

    useEffect(() => {

    });

    getMapEntries: () => void = () => {
        console.log("Gettin map data from api ", process.env.REACT_APP_API_URL);
    }

    render() {
        return (
            <div>
                <Header />
                <MapBackground />
                <div style={{display:'flex', flexDirection: 'column', justifyContent: 'center', height: "100vh"}}>
                    <Typography>This is the map</Typography>                    
                </div>
            </div>
        )
    }

}

export default MapPage