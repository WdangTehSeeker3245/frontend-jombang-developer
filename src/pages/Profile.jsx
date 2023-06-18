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

import Facebook from '../assets/contact/facebook.svg'
import Linkedin from '../assets/contact/linkedin.png'

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
              color: 'red',
            },
            {
              name: 'Python',
              level: 70,
              color: 'green',
            },
            {
              name: 'Golang',
              level: 40,
              color: 'red',
            },
            {
              name: 'Java',
              level: 30,
              color: 'green',
            },
            {
              name: 'Kotlin',
              level: 20,
              color: 'red',
            },
            {
              name: 'Dart',
              level: 10,
              color: 'green',
            },
            {
              name: 'Lua',
              level: 10,
              color: 'red',
            },
            {
              name: 'C#',
              level: 30,
              color: 'green',
            },
            {
              name: 'C++',
              level: 20,
              color: 'red',
            },
        ]
        const colors = {
            bar: 'red', // Change the level color here
            title: {
                text: 'white', // Change the title color here
                background: 'green', // Change the background color of the title here
            },
        };
        const labels = {
            percentage: {
                fontSize: '12px',
                fontWeight: 'bold',
                color: '#FF0000', // Change the percentage text color here
            },
        };
        const data = {
            labels: ['Laravel', 'Codeigniter', 'Flask', 'Django', 'Express', 'Golang', 'Rails', 'Spring'],
            datasets: [{
                label: "Mastery",
                data: [80, 60, 100, 40, 50, 50, 40, 20],
                backgroundColor: 'aqua',
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
                <div className="card mx-2 p-4 shadow-lg border border-gray-200 mb-5">
                    <div className="card-body">
                        <img src={FaizalNF} className='img-card' />
                        <h3 className="text-lg font-bold text-center">Faizal Nurul Firdaus</h3>
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
                            <p className='font-bold'>Skill As Backend Developer</p>
                            <hr className='hrline2' />
                            <div className='px-4 py-4 rounded' style={{width:"80%",height:"500px",marginBottom:"80px"}}>
                                <Radar data={data} options={options}></Radar>
                            </div>
                            <p className='font-bold'>All Skill</p>
                            <hr className='hrline2' />
                            <div className='bg-gray-600 px-4 py-4 rounded' style={{marginBottom:"80px"}}>
                                <SkillBars skills={skillsData} />
                            </div>
                            <p className='font-bold'>Contact</p>
                            <hr className='hrline2' />
                            <div className="bg-cyan-600 px-4 py-4 rounded text-white">
                                <a href="#" className='mx-2'><img className='img-contact' src={Facebook} /></a>
                                <a href="#" className='mx-2'><img className='img-contact' src={Linkedin} /></a>
                            </div>
                        </center>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;