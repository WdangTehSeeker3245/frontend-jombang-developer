import { Component } from 'react'

import '../../styles/General.css'

import BarengImg from '../../assets/map/bareng.png'

import FaizalNF from '../../assets/developer/faizal-nurul-firdaus.jpg'

// Universitas
import Unhasy from '../../assets/sekolah/universitas/unhasy.png'
// import Um from '../assets/sekolah/universitas/um.png'

// Sekolah Menengah
// import Smansa from '../assets/sekolah/sekolahmenengah/smansa.ico'
import Smaga from '../../assets/sekolah/sekolahmenengah/smaga.png'
// import Smkn3 from '../assets/sekolah/sekolahmenengah/smkn3.png'


// Rating
import FullStar from '../../assets/star_full.svg'
import EmptyStar from '../../assets/empty_star.svg'

class Bareng extends Component {
    render() {
        return (
            <div>
                <br />
                <br />
                <center>
                    <div style={{ width: "280px" }}>
                        <div className='bg-green-600 px-2 py-2'>
                            <img style={{ width: "100px", height: "100px" }} src={BarengImg} />
                        </div>
                        <div className='bg-red-600 text-white px-2 py-2 font-bold'>
                            Bareng Developer Page
                        </div>
                    </div>
                </center>
                <br />
                <div className="card mx-2 p-4 shadow-lg border border-gray-200 mb-5">
                    <div className="card-body">
                        <div className="flex flex-wrap grid grid-cols-1 md:grid-cols-4 gap-2">
                            <div className='univ-list'>
                                <a href="#"><img className='img-sekolah-list' src={Unhasy} /></a>
                            </div>
                            <div className='smenengah-list'>
                                <a href="#"><img className='img-sekolah-list' src={Smaga} /></a>
                            </div>
                            <div className='mt-2'>
                                <img className='img-list' src={FaizalNF} />
                            </div>
                            <div className='col-span-3 list-content-box mt-2'>
                                <h1 className='font-bold text-lg'>Faizal Nurul Firdaus</h1>
                                <hr className='hrline3' />
                                <p>Okupasi<span className='ms-2'>:</span><span className='bg-cyan-600 ms-4 text-white rounded px-2 py-2'>Backend Developer</span></p>
                                <div className='rating-container-list flex'>
                                    Rating <span className='ms-5 me-5'>:</span>
                                    <img className='rating-star-list' src={FullStar} />
                                    <img className='rating-star-list' src={FullStar} />
                                    <img className='rating-star-list' src={EmptyStar} />
                                    <img className='rating-star-list' src={EmptyStar} />
                                    <img className='rating-star-list' src={EmptyStar} />
                                </div>
                                <button className='btn btn-info btn-sm btn-list text-center'>Show Detail</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bareng;