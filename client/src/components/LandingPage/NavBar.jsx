import React from 'react';
import { AdditionalInfo } from './AdditionalInfo';
import { BookBusTickets } from './BookBusTickets';
import { BookSRTC } from './BookSRTC';
import { Covid19 } from './Covid19';
import { FAQ } from './FAQ';
import Footer from '../Hotel/Footers';
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
                        <Link to="/"><li>Offers</li></Link>
                        <Link to="/"><li>Get Free Rides</li></Link>
                        <Link to="/"><li>My Bookings</li></Link>
                        <Link to="/"><li>Login / Register</li></Link>
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