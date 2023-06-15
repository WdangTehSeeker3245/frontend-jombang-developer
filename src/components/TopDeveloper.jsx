import { Component } from 'react'

import '../styles/General.css'
import '../styles/TopDeveloper.css'

import Rhamsol from '../assets/developer/rhamsol.jpeg'
import Rhavi from '../assets/developer/rhavi-hakiki-r.jpg'
import NurulHuda from '../assets/developer/nurul-huda.png'
import RizkyRamdani from '../assets/developer/rizky-ramdani.jpg'
import FaizalNF from '../assets/developer/faizal-nurul-firdaus.jpg'

class TopDeveloper extends Component {
    render() {
        return (
            <div className="topdeveloper-con">
                <center>
                    <h4 className="text-2xl font-bold headertext">Top Developer</h4>
                    <hr className="hrline" />
                </center>
                <div className="flex flex-wrap grid grid-cols-1 md:grid-cols-4 gap-4 margin-topdeveloper-card">
                    <div className="w-64 p-4 border border-gray-300 rounded shadow-md m-4">
                        <img src={Rhamsol} className="img-card"/>
                        <h3 className="text-lg font-bold text-center">Rahmat Soleh</h3>
                        <p className='text-center'>Website Developer <br/> Kecamatan Peterongan</p>
                    </div>

                    <div className="w-64 p-4 border border-gray-300 rounded shadow-md m-4">
                        <img src={Rhavi} className="img-card"/>
                        <h3 className="text-lg font-bold text-center">Rhavi Hakiki R</h3>
                        <p className='text-center'>Game Developer <br/> Kecamatan Peterongan</p>
                    </div>

                    <div className="w-64 p-4 border border-gray-300 rounded shadow-md m-4">
                        <img src={NurulHuda} className="img-card"/>
                        <h3 className="text-lg font-bold text-center">Nurul Huda</h3>
                        <p className='text-center'>Website Developer <br/> Kecamatan Sumobito</p>
                    </div>

                    <div className="w-64 p-4 border border-gray-300 rounded shadow-md m-4">
                        <img src={RizkyRamdani} className="img-card"/>
                        <h3 className="text-lg font-bold text-center">Rizky Ramadhani</h3>
                        <p className='text-center'>Frontend Developer <br/> Kabupaten Jombang</p>
                    </div>

                    <div className="w-64 p-4 border border-gray-300 rounded shadow-md m-4">
                        <img src={FaizalNF} className="img-card"/>
                        <h3 className="text-lg font-bold text-center">Faizal Nurul Firdaus</h3>
                        <p className="text-center">Backend Developer <br/> Kecamatan Bareng</p>
                    </div>

                    {/* Add more cards as needed */}
                </div>
            </div>
        );
    }
}

export default TopDeveloper;