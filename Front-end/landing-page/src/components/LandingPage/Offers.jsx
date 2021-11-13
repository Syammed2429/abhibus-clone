import React from 'react';
import { Test2 } from './Test2';
import './css/offers.css'

const Offers = () => {


    return (
        <>
            <div className="card rounded-0 shadow mt-4 p-4 w-55  col-8 container offers-box">
                <div>
                    <h3>AbhiBus Offers</h3>
                    <div>
                        <ul className="d-flex justify-content-end">
                            <li>All Offers</li>
                            <li>Bus Offers</li>
                            <li>View All </li>

                        </ul>
                    </div>

                    <div style={{ width: "95%", margin: "auto", backgroundColor: "white", marginTop: "50px" }}> <Test2 /></div>

                </div>
            </div>
        </>
    );
}

export { Offers }