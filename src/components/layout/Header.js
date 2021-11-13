import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import NavLink from '../common/NavLink';

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/"><img alt="" id="fifthWallLogo" className="img-fluid pic-1" src={'/fifth_wall_logo.png'}></img><span className= 'm-4'>Fifth Wall Media</span></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <NavLink link='/' label='Home' />
                        <NavLink link='/code' label='Code' />
                        <NavLink link='/chart' label='Chart' />
                        <NavLink link='/animation' label='Animation' />
                        <NavLink link='/upload' label='Upload' />
                        <NavLink link='/projects' label='Projects' />
                    </ul>
                    <ul id="right-links" className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <NavLink link='/login' label='Login' />
                        <NavLink link='/register' label='Register' />
                    </ul>
                </div>
            </nav>
        )
    }
}