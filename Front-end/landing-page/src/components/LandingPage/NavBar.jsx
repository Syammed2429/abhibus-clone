import React from 'react';
import { AdditionalInfo } from './AdditionalInfo';
import { BookBusTickets } from './BookBusTickets';
import { BookSRTC } from './BookSRTC';
import { Covid19 } from './Covid19';
import { FAQ } from './FAQ';
import { Footer } from './Footer';
import logo from './images/logo.png'
import { Info } from './Info';
import './LandingPage.css'
import { Offers } from './Offers';
import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
        <>
            <div className="main">
                <header>
                    <Link to="/">
                        <img className="logo" src={logo} alt="logo" /></Link>
                    <ul>

                        <Link to=""><li>Bus</li></Link>
                        <Link to="/book-train-tickets"><li>Trains</li></Link>
                        <Link to="/hotels"><li>Hotels</li></Link>
                        <li>Offers</li>
                        <li>Get Free Rides</li>
                        <li>My Bookings</li>
                        <li>Login / Register</li>
                    </ul>
                </header>

            </div>
            <BookBusTickets />
            <Offers />
            <BookSRTC />
            <Info />
            <Covid19 />
            <AdditionalInfo />
            <FAQ />
            <Footer />
        </>
    );
}

export { NavBar }