import React from 'react';
import axios from 'axios';

// import { useLocation } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { NavBar2 } from '../NavBar2';
// import { Footer } from '../Footer'

const DisplayBusDetails = () => {
    const location = useLocation();
    // const { search } = useLocation();
    // const params = React.useMemo(() => new URLSearchParams(search), [search]);

    const [busData, setBusData] = React.useState([]);

    React.useEffect(() => {
        getData(location.state.leaving, location.state.going)

    }, []);

    const getData = async (from, to) => {
        const { data } = await axios.get("http://localhost:2924/bus", {
            params: {
                from: from,
                to: to
            }
        })
        setBusData(data)
        console.log('data:', data)
        // return data;

    }


    return (
        <>
            <div>
                <NavBar2 />
                <div>
                    {busData.map((e) => (
                        <div key={e._id}>
                            <div>Bus Name : {e.busName}</div>
                            <div>Bus Type : {e.busType}</div>
                            <div>Bus Price: {e.price}</div>
                            <div>Seats Available : {e.seatsAvailable}</div>
                            <div>Travelling Hours : {e.travelingHours}</div>
                            <div>Start Time : {e.startTime}</div>
                            <div>End Time : {e.endTime}</div>
                            <button>Book Now</button>

                        </div>
                    ))}

                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
}


export { DisplayBusDetails }