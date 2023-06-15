import { Component } from 'react'
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'

import Home from './pages/Home'

import GameDeveloper from './pages/GameDeveloper';
import FrontendDeveloper from './pages/FrontendDeveloper';
import BackendDeveloper from './pages/BackendDeveloper';
import MobileDeveloper from './pages/MobileDeveloper';
import SoftwareDeveloper from './pages/SoftwareDeveloper';

// Kecamatan
import BandarKedungmulyo from './pages/kecamatan/BandarKedungmulyo'
import Bareng from './pages/kecamatan/Bareng'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game-developer" element={<GameDeveloper />} />
          <Route path="/frontend-developer" element={<FrontendDeveloper />} />
          <Route path="/backend-developer" element={<BackendDeveloper />} />
          <Route path="/mobile-developer" element={<MobileDeveloper />} />
          <Route path="/software-developer" element={<SoftwareDeveloper />} />

          {/* Kecamatan */}
          <Route path="/bandar-kedungmulyo" element={<BandarKedungmulyo />} />
          <Route path="/bareng" element={<Bareng />} />
        </Routes>
      </div>
    );
  }
}

export default App;