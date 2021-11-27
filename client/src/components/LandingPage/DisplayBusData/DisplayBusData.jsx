import React from 'react';
import axios from 'axios';

import { useLocation, useHistory, Link } from "react-router-dom";
import { NavBar2 } from '../NavBar2';

import "../../css/DisplayBusData.css"

const DisplayBusDetails = () => {
    const location = useLocation();
    const history = useHistory();

    const [busData, setBusData] = React.useState([]);

    React.useEffect(() => {
        getData(location.state.leaving, location.state.going)

    }, []);
    const payment = (busname, price, start, end) => {
        history.push({
            pathname: "/pay-bus",
            state: {
                name: busname,
                price: price,
                departure: start,
                arrival: end
            }
        })
    }
    const getData = async (from, to) => {
        let query = {};
        query["from"] = from;
        query["to"] = to
        const { data } = await axios.get(`https://abhibus-clone.herokuapp.com/bus?from=${from}&to=${to}`)
        setBusData(data)
        console.log('data:', data)

    }
    const sorted_data = async (from, to, sorting) => {
        const { data } = await axios.get(` https://abhibus-clone.herokuapp.com/bus/sort?from=${from}&to=${to}&sorting=${sorting}`);
        setBusData(data);

    }

    return (
        <>
            <div>
                <NavBar2 />
                <div className="margin_display_d">
                    <div className="flex_display_d grey_display_d">
                        <p>Sort by</p>

                        <button className="btn_display_d" onClick={() => {
                            sorted_data(location.state.leaving, location.state.going, "price")
                        }}>Price</button>
                        <button onClick={() => {
                            sorted_data(location.state.leaving, location.state.going, "seatsAvailable")
                        }} className="btn_display_d">Seats</button>
                        <button onClick={() => {
                            sorted_data(location.state.leaving, location.state.going, "startTime")
                        }} className="btn_display_d">Departure Time</button>
                        <button onClick={() => {
                            sorted_data(location.state.leaving, location.state.going, "endTime")
                        }} className="btn_display_d">Arrival Time</button>




                    </div>

                </div>
                <div className="margin_display_d">
                    {busData.map((e) => (
                        <div key={e._id} className="flex_display_d border_display_d">
                            <div className="flex_display_d text_display_d">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfDABbCFE6_rt4cA-b1Ojb4Gf78t3hpNhvxrxX16moSWyd8Fh78Dwr1ZAQ9xhxea9bMYA&usqp=CAU" className="location_png_d text_display_d" alt="location.png" />
                                <div className="text_display_d">
                                    <div className="dot-icon-top">
                                        <span>•</span>
                                    </div>
                                    <div className="arrow-icon-center">
                                        <span>↓</span>
                                    </div>
                                    <div className="dot-icon-bottom">
                                        <span>•</span>
                                    </div>
                                </div>

                            </div>
                            <div className="text_display_d">
                                <div ><h3> {e.startTime}</h3></div>
                                <div >  {e.travelingHours} hours</div>
                                <div ><h3> {e.endTime}</h3></div>
                            </div>
                            <div className="text_display_d">
                                <div className="text_display_d"><h3> {e.busName}</h3></div>
                                <div className="text_display_d">{e.busType}</div>
                            </div>
                            <div className="text_display_d">{e.seatsAvailable} {" "}seats Available</div>
                            <div className="text_display_d"><h2>₹{e.price}</h2></div>


                            <Link to="/pay-bus"> <button className="button_display_d" onClick={() => {
                                payment(e.busname, e.price, e.startTime, e.endTime)
                            }}>Book Bus</button></Link>

                        </div>
                    ))}

                </div>
            </div>
        </>
    );
}


export { DisplayBusDetails }