import React from 'react';
import logo from './images/logo.png'
import './LandingPage.css'

const NavBar2 = () => {

    return (
        <>
            <div className="main">
                <header>
                    <img className="logo" src={logo} alt="logo" />
                    <ul>
                        <li>Offers</li>
                        <li>Get Free Rides</li>
                        <li>My Bookings</li>
                        <li>Login / Register</li>
                    </ul>
                </header>

            </div>

        </>
    );
}

export { NavBar2 }