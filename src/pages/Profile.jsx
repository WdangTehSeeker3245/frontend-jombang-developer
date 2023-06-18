import { Component } from 'react';
import { SkillBars } from 'react-skills';
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    Tooltip,
    Legend,
    RadialLinearScale,
    Filler,
} from 'chart.js';

import { Radar } from 'react-chartjs-2';

ChartJS.register(
    LineElement,
    PointElement,
    Tooltip,
    Legend,
    RadialLinearScale,
    Filler,
)

import '../styles/General.css'
import '../styles/Profile.css'

import FaizalNF from '../assets/developer/faizal-nurul-firdaus.jpg'

// Contact
import Github from '../assets/contact/github.png'
import Facebook from '../assets/contact/facebook.svg'
import Linkedin from '../assets/contact/linkedin.png'
import Instagram from '../assets/contact/instagram.png'
import Twitter from '../assets/contact/twitter.svg'

// Rating
import FullStar from '../assets/star_full.svg'
import EmptyStar from '../assets/empty_star.svg'

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
        };
    }
    componentDidMount() {
        const queryString = window.location.search;
        const queryParams = new URLSearchParams(queryString);
        const id = queryParams.get('id');

        this.setState({
            id: id,
        });
    }
    render() {
        const width = {
            width: '100px',
        };
        const width2 = {
            width: '20px',
        };
        const skillsData= [
            {
              name: 'PHP',
              level: 50,
              color: 'green',
            },
            {
              name: 'Javascript',
              level: 40,
              color: 'green',
            },
            {
              name: 'Python',
              level: 70,
              color: 'green',
            },
            {
              name: 'Golang',
              level: 40,
              color: 'green',
            },
            {
              name: 'Java',
              level: 30,
              color: 'green',
            },
            {
              name: 'Kotlin',
              level: 20,
              color: 'green',
            },
            {
              name: 'Dart',
              level: 10,
              color: 'red',
            },
            {
              name: 'Lua',
              level: 10,
              color: 'red',
            },
            {
              name: 'C#',
              level: 30,
              color: 'red',
            },
            {
              name: 'C++',
              level: 20,
              color: 'red',
            },
        ];
        const dataGame = {
            labels: ['Unity', 'Godot', 'Phaser', 'Unreal', 'Defold', 'Flame','Libgdx/libktx', 'Construct'],
            datasets: [{
                label: "Mastery",
                data: [10,20,20,0,10,0,0,20],
                backgroundColor: 'red',
                borderColor: 'white'
            }]
        };
        const dataFrontend = {
            labels: ['Html,CSS,JS', 'Bootstrap', 'Tailwind' , 'Jquery', 'Vue', 'React', 'Angular', 'UI/UX'],
            datasets: [{
                label: "Mastery",
                data: [50,100,70,70,70,60,10,10],
                backgroundColor: 'red',
                borderColor: 'white'
            }]
        };
        const dataBackend = {
            labels: ['Laravel', 'Codeigniter', 'Flask', 'Django', 'Express', 'Golang', 'Rails', 'Spring','Wordpress Api','Headless CMS'],
            datasets: [{
                label: "Mastery",
                data: [80, 60, 100, 40, 50, 50, 40, 20, 10, 10],
                backgroundColor: 'green',
                borderColor: 'white'
            }]
        };
        const dataMobile = {
            labels: ['Flutter', 'Android Studio', 'React Native', 'Cordova', 'Ionic', 'Quasar'],
            datasets: [{
                label: "Mastery",
                data: [10, 50, 10, 40, 0, 10],
                backgroundColor: 'red',
                borderColor: 'white'
            }]
        };
        const dataSoftware = {
            labels: ['Netbeans', 'Visual Studio', 'QT Creator', 'Electron', 'Tauri', 'GTK'],
            datasets: [{
                label: "Mastery",
                data: [50, 70, 20, 0, 0, 10],
                backgroundColor: 'red',
                borderColor: 'white'
            }]
        };
        const options = {
        }
        return (
            <div>
                <br />
                <center>
                    <div className='inline-block text-white bg-green-600 px-5'>
                        Profile Page ID :
                    </div>
                    <div className='inline-block text-white bg-red-600 px-5'>
                        {this.state.id}
                    </div>
                </center>
                <br />
                <div className="card card-index mx-2 p-4 shadow-lg border border-gray-200 mb-5">
                    <div className="card-body">
                        <img src={FaizalNF} className='img-card' />
                        <h3 className="text-lg font-bold text-center">Faizal Nurul Firdaus</h3>
                        <div className='rating-container flex justify-center items-center'>
                            <img className='rating-star' src={FullStar} />
                            <img className='rating-star' src={FullStar} />
                            <img className='rating-star' src={EmptyStar} />
                            <img className='rating-star' src={EmptyStar} />
                            <img className='rating-star' src={EmptyStar} />
                        </div>
                        <button style={{width:"150px"}}className='btn btn-sm btn-info mx-auto' href="#">Rate Developer</button>
                        <hr className='hrline2 mx-auto' />
                        <table>
                            <tr>
                                <td style={width}>Usia</td>
                                <td style={width2}>:</td>
                                <td>24 Tahun</td>
                            </tr>
                            <tr>
                                <td style={width}>Sekolah</td>
                                <td style={width2}>:</td>
                                <td>Universitas Hasyim Asy'ari</td>
                            </tr>
                            <tr>
                                <td style={width}>Okupasi</td>
                                <td style={width2}>:</td>
                                <td>Backend Developer</td>
                            </tr>
                            <tr>
                                <td style={width}>Alamat</td>
                                <td style={width2}>:</td>
                                <td>Kec.Bareng,Kab.Jombang</td>
                            </tr>
                            <tr>
                                <td style={width}>Deskripsi</td>
                                <td style={width2}>:</td>
                                <td></td>
                            </tr>
                        </table>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut sodales orci, sed tempor dolor. Aliquam erat volutpat. Nam semper quam id leo lobortis sagittis in eget arcu. Proin condimentum tempus fringilla. In eu maximus eros, sit amet placerat diam. Curabitur a volutpat quam. Nam maximus leo ipsum, eget faucibus turpis blandit sed. Integer vulputate porttitor augue at facilisis. Nulla eget posuere nulla, vitae condimentum tellus. Praesent egestas metus vel risus luctus, ut malesuada erat commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <br />
                        <center>
                            {/* Game Developer */}
                            <p className='font-bold'>Skill As Game Developer</p>
                            <hr className='hrline2' />
                            <div className='px-4 py-4 rounded radar-con'>
                                <Radar data={dataGame} options={options}></Radar>
                            </div>

                            {/* Frontend Developer */}
                            <p className='font-bold'>Skill As Frontend Developer</p>
                            <hr className='hrline2' />
                            <div className='px-4 py-4 rounded radar-con'>
                                <Radar data={dataFrontend} options={options}></Radar>
                            </div>

                            {/* Backend Developer */}
                            <p className='font-bold'>Skill As Backend Developer</p>
                            <hr className='hrline2' />
                            <div className='px-4 py-4 rounded radar-con'>
                                <Radar data={dataBackend} options={options}></Radar>
                            </div>

                            {/* Mobile Developer */}
                            <p className='font-bold'>Skill As Mobile Developer</p>
                            <hr className='hrline2' />
                            <div className='px-4 py-4 rounded radar-con'>
                                <Radar data={dataMobile} options={options}></Radar>
                            </div>

                            {/* Software Developer */}
                            <p className='font-bold'>Skill As Sotware Developer</p>
                            <hr className='hrline2' />
                            <div className='px-4 py-4 rounded radar-con'>
                                <Radar data={dataSoftware} options={options}></Radar>
                            </div>

                            <p className='font-bold'>All Skill</p>
                            <hr className='hrline2' />
                            <div className='bg-gray-600 px-4 py-4 rounded' style={{marginBottom:"80px"}}>
                                <SkillBars skills={skillsData} />
                            </div>
                            <p className='font-bold'>Contact</p>
                            <hr className='hrline2' />
                            <div className="bg-slate-600 px-4 py-4 rounded text-white">
                                <a href="#" className='mx-2'><img className='img-contact' src={Github} /></a>
                                <a href="#" className='mx-2'><img className='img-contact' src={Facebook} /></a>
                                <a href="#" className='mx-2'><img className='img-contact' src={Linkedin} /></a>
                                <a href="#" className='mx-2'><img className='img-contact' src={Instagram} /></a>
                                <a href="#" className='mx-2'><img className='img-contact' src={Twitter} /></a>
                            </div>
                        </center>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;