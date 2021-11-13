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
                        <li><a href={<BookBusTickets />}>Offers</a></li>
                        <Link to="/book-bus-tickets"><li>Bus</li></Link>
                        <Link to="book-train-tickets"><li>Trains</li></Link>
                        <li>Get Free Rides</li>
                        <Link to="/hotels"><li>Hotels</li></Link>

                        <li>My Bookings</li>
                        <li>Login / Register</li>
                    </ul>
                </header>

            </div>

        </>
    );
}

export { NavBar2 }