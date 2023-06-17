import { Component } from 'react'

import '../styles/General.css'
import '../styles/TopDeveloper.css'

// Universitas
import Unhasy from '../assets/sekolah/universitas/unhasy.png'
import Um from '../assets/sekolah/universitas/um.png'

// Sekolah Menengah
import Smansa from '../assets/sekolah/sekolahmenengah/smansa.ico'
import Smaga from '../assets/sekolah/sekolahmenengah/smaga.png'
import Smkn3 from '../assets/sekolah/sekolahmenengah/smkn3.png'

// Rating
import FullStar from '../assets/star_full.svg'
import EmptyStar from '../assets/empty_star.svg'

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
                    <div className="cardtopdev w-64 p-4 border border-gray-300 rounded shadow-md m-4">
                        <div className='univ'>
                            <a href="#"><img className='img-sekolah mb-3' src={Unhasy}/></a>
                        </div>
                        <div className='smenengah'>
                            <a href="#"><img className='img-sekolah mb-3' src={Smansa}/></a>
                        </div>
                        <br />
                        <br />
                        <br />
                        <img src={Rhamsol} className="img-card"/>
                        <div className='rating-container flex justify-center items-center'>
                            <img className='rating-star' src={FullStar} />
                            <img className='rating-star' src={FullStar} />
                            <img className='rating-star' src={FullStar} />
                            <img className='rating-star' src={FullStar} />
                            <img className='rating-star' src={EmptyStar} />
                        </div>
                        <h3 className="text-lg font-bold text-center">Rahmat Soleh</h3>
                        <p className='text-center'>Website Developer <br/> Kecamatan Peterongan</p>
                        <br />
                        <center>
                        <a className='btn btn-sm btn-info' href="#">Show Detail</a>
                        </center>
                        <br />
                    </div>

                    <div className="cardtopdev w-64 p-4 border border-gray-300 rounded shadow-md m-4">
                        <div className='univ'>
                            <a href="#"><img className='img-sekolah mb-3' src={Um}/></a>
                        </div>
                        <div className='smenengah'>
                            <a href="#"><img className='img-sekolah mb-3' src={Smaga}/></a>
                        </div>
                        <br />
                        <br />
                        <br />
                        <img src={Rhavi} className="img-card"/>
                        <div className='rating-container flex justify-center items-center'>
                            <img className='rating-star' src={FullStar} />
                            <img className='rating-star' src={FullStar} />
                            <img className='rating-star' src={FullStar} />
                            <img className='rating-star' src={FullStar} />
                            <img className='rating-star' src={EmptyStar} />
                        </div>
                        <h3 className="text-lg font-bold text-center">Rhavi Hakiki R</h3>
                        <p className='text-center'>Game Developer <br/> Kecamatan Peterongan</p>
                        <br />
                        <center>
                        <a className='btn btn-sm btn-info' href="#">Show Detail</a>
                        </center>
                        <br />
                    </div>

                    <div className="cardtopdev w-64 p-4 border border-gray-300 rounded shadow-md m-4">
                        <div className='univ'>
                            <a href="#"><img className='img-sekolah mb-3' src={Unhasy}/></a>
                        </div>
                        <br />
                        <br />
                        <br />
                        <img src={NurulHuda} className="img-card"/>
                        <div className='rating-container flex justify-center items-center'>
                            <img className='rating-star' src={FullStar} />
                            <img className='rating-star' src={FullStar} />
                            <img className='rating-star' src={FullStar} />
                            <img className='rating-star' src={EmptyStar} />
                            <img className='rating-star' src={EmptyStar} />
                        </div>
                        <h3 className="text-lg font-bold text-center">Nurul Huda</h3>
                        <p className='text-center'>Website Developer <br/> Kecamatan Sumobito</p>
                        <br />
                        <center>
                        <a className='btn btn-sm btn-info' href="#">Show Detail</a>
                        </center>
                        <br />
                    </div>

                    <div className="cardtopdev w-64 p-4 border border-gray-300 rounded shadow-md m-4">
                        <div className='univ'>
                            <a href="#"><img className='img-sekolah mb-3' src={Unhasy}/></a>
                        </div>
                        <div className='smenengah'>
                            <a href="#"><img className='img-sekolah mb-3' src={Smkn3}/></a>
                        </div>
                        <br />
                        <br />
                        <br />
                        <img src={RizkyRamdani} className="img-card"/>
                        <div className='rating-container flex justify-center items-center'>
                            <img className='rating-star' src={FullStar} />
                            <img className='rating-star' src={FullStar} />
                            <img className='rating-star' src={FullStar} />
                            <img className='rating-star' src={EmptyStar} />
                            <img className='rating-star' src={EmptyStar} />
                        </div>
                        <h3 className="text-lg font-bold text-center">Rizky Ramadhani</h3>
                        <p className='text-center'>Frontend Developer <br/> Kabupaten Jombang</p>
                        <br />
                        <center>
                        <a className='btn btn-sm btn-info' href="#">Show Detail</a>
                        </center>
                        <br />
                    </div>

                    <div className="cardtopdev w-64 p-4 border border-gray-300 rounded shadow-md m-4">
                        <div className='univ'>
                            <a href="#"><img className='img-sekolah mb-3' src={Unhasy}/></a>
                        </div>
                        <div className='smenengah'>
                            <a href="#"><img className='img-sekolah mb-3' src={Smaga}/></a>
                        </div>
                        <br />
                        <br />
                        <br />
                        <img src={FaizalNF} className="img-card"/>
                        <div className='rating-container flex justify-center items-center'>
                            <img className='rating-star' src={FullStar} />
                            <img className='rating-star' src={FullStar} />
                            <img className='rating-star' src={EmptyStar} />
                            <img className='rating-star' src={EmptyStar} />
                            <img className='rating-star' src={EmptyStar} />
                        </div>
                        <h3 className="text-lg font-bold text-center">Faizal Nurul Firdaus</h3>
                        <p className="text-center">Backend Developer <br/> Kecamatan Bareng</p>
                        <br />
                        <center>
                        <a className='btn btn-sm btn-info' href="#">Show Detail</a>
                        </center>
                        <br />
                    </div>

                    {/* Add more cards as needed */}
                </div>
            </div>
        );
    }
}

export default TopDeveloper;