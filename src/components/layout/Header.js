import React from 'react'
import { Link } from 'react-router-dom';
import NavLink from '../common/NavLink';

const Header = ({ user }) => {
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
                    <NavLink link='/chartDeck' label='Chart Deck' />
                    <NavLink link='/animation' label='Animation' />
                    <NavLink link='/projects' label='Projects' />
                    {user && <NavLink link='/upload' label='Upload' />}
                </ul>
                    {!user ? <ul id="right-links" className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <NavLink link='/login' label='Login' />
                        <NavLink link='/register' label='Register' /> 
                        </ul> :
                        <ul id="right-links" className="navbar-nav ml-auto mt-2 mt-lg-0">
                            <NavLink link='/' label={<b>{user.name}</b>} />
                            <NavLink link='/logout' label='Logout' />
                        </ul>}
            </div>
        </nav>
    )
}
export default Header