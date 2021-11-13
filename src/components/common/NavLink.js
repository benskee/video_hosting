import React from 'react'
import { Link } from 'react-router-dom';

const NavLink = ({link, label}) => {
    return (
        <li className="nav-item active">
            <Link className="nav-link" data-toggle="collapse" data-target="#collapsibleNavId" to={ link }>{ label } </Link>
        </li>
    )
};

export default NavLink;