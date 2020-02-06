import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png';

const clearLocalStorage = () => {
    localStorage.clear();
};

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="logo-container">
                <img className="logo" src={logo} alt="KidsFly logo" />
            </div>
            <nav>
                <NavLink to={`/my-trips/${localStorage.getItem("id")}`} activeClassName="active-nav">My Trips</NavLink>
                {/* <NavLink to={`/all-trips/${localStorage.getItem("id")}`} activeClassName="active-nav">All Trips</NavLink> */}
                {localStorage.getItem('id') ? (<NavLink onClick={()=>{clearLocalStorage()}} to="/login" activeClassName="active-nav">Logout</NavLink>) : null}
                {!localStorage.getItem('id') ? (<NavLink to="/login" activeClassName="active-nav">Login</NavLink>) : null}
                {!localStorage.getItem('id') ? (<NavLink to="/register" activeClassName="active-nav">Register</NavLink>) : null}
            </nav>
        </header>
    );
};

export default Navbar;