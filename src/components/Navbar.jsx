import { Component } from 'react'
import { Link } from "react-router-dom"

class Navbar extends Component {
    render() {
        return (
            <div className="navbar bg-base-100">
                <a className="btn btn-ghost normal-case text-xl">Jombang Developer</a>
                <div className="navbar-end absolute right-0">
                    <div className="dropdown dropdown-bottom dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/game-developer">Game Developer</Link></li>
                            <li>
                                <a>Website Developer</a>
                                <ul className="p-2">
                                    <li><Link to="/frontend-developer">Frontend Developer</Link></li>
                                    <li><Link to="/backend-developer">Backend Developer</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/mobile-developer">Mobile Developer</Link></li>
                            <li><Link to="/software-developer">Software Developer</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="absolute right-0 hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/game-developer">Game Developer</Link></li>
                        <li>
                            <details>
                                <summary>
                                    Website Developer
                                </summary>
                                <ul className="p-2 bg-base-100">
                                    <li><Link to="/frontend-developer">Frontend Developer</Link></li>
                                    <li><Link to="/backend-developer">Backend Developer</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li><Link to="/mobile-developer">Mobile Developer</Link></li>
                        <li><Link to="/software-developer">Software Developer</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}


export default Navbar;