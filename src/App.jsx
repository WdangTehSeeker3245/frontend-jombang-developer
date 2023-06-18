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
import Diwek from './pages/kecamatan/Diwek'
import Gudo from './pages/kecamatan/Gudo';
import Jogoroto from './pages/kecamatan/Jogoroto';
import Jombang from './pages/kecamatan/Jombang';
import Kabuh from './pages/kecamatan/Kabuh';
import Kesamben from './pages/kecamatan/Kesamben';
import Kudu from './pages/kecamatan/Kudu';
import Megaluh from './pages/kecamatan/Megaluh';
import Mojoagung from './pages/kecamatan/Mojoagung';
import Mojowarno from './pages/kecamatan/Mojowarno';
import Ngoro from './pages/kecamatan/Ngoro';
import Ngusikan from './pages/kecamatan/Ngusikan';
import Perak from './pages/kecamatan/Perak';
import Peterongan from './pages/kecamatan/Peterongan';
import Plandaan from './pages/kecamatan/Plandaan';
import Ploso from './pages/kecamatan/Ploso';
import Sumobito from './pages/kecamatan/Sumobito';
import Tembelang from './pages/kecamatan/Tembelang';
import Wonosalam from './pages/kecamatan/Wonosalam';
import Profile from './pages/Profile';

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
          <Route path="/diwek" element={<Diwek />} />
          <Route path="/gudo" element={<Gudo />} />
          <Route path="/jogoroto" element={<Jogoroto />} />
          <Route path="/jombang" element={<Jombang />} />
          <Route path="/kabuh" element={<Kabuh />} />
          <Route path="/kesamben" element={<Kesamben />} />
          <Route path="/kudu" element={<Kudu />} />
          <Route path="/megaluh" element={<Megaluh />} />
          <Route path="/mojoagung" element={<Mojoagung />} />
          <Route path="/mojowarno" element={<Mojowarno/>} />
          <Route path="/ngoro" element={<Ngoro/>} />
          <Route path="/ngusikan" element={<Ngusikan/>} />
          <Route path="/perak" element={<Perak/>} />
          <Route path="/peterongan" element={<Peterongan/>} />
          <Route path="/plandaan" element={<Plandaan/>} />
          <Route path="/ploso" element={<Ploso/>} />
          <Route path="/sumobito" element={<Sumobito/>} />
          <Route path="/tembelang" element={<Tembelang/>} />
          <Route path="/wonosalam" element={<Wonosalam/>} />

          {/* Profile */}
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </div>
    );
  }
}

export default App;