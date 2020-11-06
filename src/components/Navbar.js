import React from 'react';
import {Link} from "react-router-dom";
import {NavbarLi, NavbarUl} from '../styled'

const Navbar = (props) => {
    return (
        <nav>
            <NavbarUl>
                <NavbarLi>
                    <Link to="/">Home</Link>
                </NavbarLi>
                <NavbarLi>
                    <Link to="/tweet">Tweet</Link>
                </NavbarLi>
            </NavbarUl>
        </nav>
    );
};

export default Navbar;
