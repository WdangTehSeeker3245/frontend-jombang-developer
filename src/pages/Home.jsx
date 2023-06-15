import { Component } from 'react'

import HeaderHome from '../components/HeaderHome';
import Map from '../components/Map.jsx';
import TopDeveloper from '../components/TopDeveloper';

class Home extends Component {
    render() {
        return (
            <div>
               <HeaderHome/>
               <Map/>
               <TopDeveloper/>
            </div>
        );
    }
}

export default Home;