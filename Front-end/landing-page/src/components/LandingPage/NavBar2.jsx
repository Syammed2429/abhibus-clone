import React from 'react';
import { BookBusTickets } from './BookBusTickets';
import { Link } from 'react-router-dom'

import logo from './images/logo.png'
import './LandingPage.css'

const NavBar2 = () => {

    return (
        <>
            <div className="main">
                <header>
                    <Link to='/'>
                        <img className="logo" src={logo} alt="logo" /></Link>
                    <ul>

                        <Link to=""><li>Bus</li></Link>
                        <Link to="/book-train-tickets"><li>Trains</li></Link>
                        <Link to="/hotels"><li>Hotels</li></Link>
                        <Link to="/"><li>Offers</li></Link>
                        <Link to="/"><li>Get Free Rides</li></Link>
                        <Link to="/"><li>My Bookings</li></Link>
                        <Link to="/"><li>Login / Register</li></Link>
                    </ul>
                </header>

            </div>

        </>
    );
}

export { NavBar2 }