import React, { Component } from 'react';
import Header from '../components/header';
import MapBackground from '../components/background';


class MapPage extends Component {

    render() {
        return (
            <div>
                <Header />
                <MapBackground />
            </div>
        )
    }

}

export default MapPage