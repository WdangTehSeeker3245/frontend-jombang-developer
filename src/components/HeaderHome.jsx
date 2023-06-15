import { Component } from 'react'

import '../styles/HeaderHome.css'

class HeaderHome extends Component {
    render() {
        return (
            <div>
                <center>
                    <h1 className="text-2xl font-bold headertext">Selamat Datang Di Website List Developer<br />Domisili Di Jombang</h1>
                    <br />
                    <div className="flex items-center justify-center">
                        <input
                            type="text"
                            placeholder="Cari Developer"
                            className="w-64 px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-r">Search</button>
                    </div>
                </center>
            </div>
        );
    }
}

export default HeaderHome;