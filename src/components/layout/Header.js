import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link className="navbar-brand" to="/"><img alt="" className="img-fluid pic-1" style={{ height: '40px' }} src={'/fifth_wall_logo.png'}></img><span className= 'm-4'>Fifth Wall Media</span></Link>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/code">Code </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/chart">Chart </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/animation">Animation </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/upload">Upload</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/projects">Projects</Link>
                        </li>
                    </ul>
                </div>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </ul>
            </nav>
        )
    }
}