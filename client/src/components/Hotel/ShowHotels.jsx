import { useEffect, useState } from "react"
import axios from "axios";
import { useLocation, useHistory } from "react-router-dom";
import "./Css/ShowHotels.css";
import { NavBar2 } from "../LandingPage/NavBar2";




function ShowHotel({ city, checkin, checkout, guest }) {
    const location = useLocation();
    const history = useHistory();
    console.log(location.state.city, location.state.checkout, location.state.checkin, location.state.guest)
    const [details, setDetails] = useState(null);
    const [isError, SetError] = useState(false);
    const [loading, setLoading] = useState(false)
    const [Show, SetShow] = useState(false);
    const [price, setPrice] = useState(999);
    const [ac, setAC] = useState(false)
    const [Wifi, setWifi] = useState(false)
    const [Breakfast, setBreakfast] = useState(false)
    const [Laundry, setLaundry] = useState(false)

    const [Restaurent, setRestaurent] = useState(false)
    const [Front_Desk, setFront_Desk] = useState(false)

    checkin = location.state.checkin;
    checkout = location.state.checkout;
    guest = location.state.guest
    const move = (id, checkout, checkin, guest) => {
        //console.log(id,checkout,checkin,guest)
        history.push({
            pathname: "/showRooms",
            state: {
                id: id,
                checkin: checkin,
                checkout: checkout,
                guest: guest
            }
        });
    }
    useEffect(async () => {
        await axios.get(`${process.env.REACT_APP_API}/hotels/sort_asc`)

            .then((res) => {

                setDetails(res.data);
                console.log("res", details)
                SetShow(true)
            })
            .catch((e) => { SetError(true); console.log(e, "e") })

    }, [loading])

    const filteredData = async () => {
        let query = {}
        if (Wifi) {
            query["wifi"] = Wifi
        }
        if (ac) {
            query["ac"] = ac
        }
        if (Laundry) {
            query["Laundry"] = Laundry
        }
        if (Breakfast) {
            query["breakfast"] = Breakfast
        }
        if (Restaurent) {
            query["restaurent"] = Restaurent
        }
        if (Front_Desk) {
            query["front_Desk"] = Front_Desk
        }
        console.log(query);
        axios.get(`${process.env.REACT_APP_API}/hotels/filter_query`,
            {
                params: query
            })
            .then((res) => {
                console.log(res.data, "res_filtered", query, "query");
                setDetails(res.data)
            }).finally(
                setAC(false),
                setBreakfast(false),
                setFront_Desk(false),
                setLaundry(false),
                setRestaurent(false),
                setWifi(false)
            )
    }

    const getDetails = async (order) => {
        // console.log(order)
        axios.get(`${process.env.REACT_APP_API}/hotels/sort_${order}`)

            .then((res) => {

                setDetails(res.data);
                console.log("res", details)
            })
            .catch((e) => { SetError(true); console.log(e, "e") })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <div>
            <NavBar2 />
            {loading && <p>Loading</p>}
            {isError && <div>"SomeThing went wrong"</div>}


            {Show && <><div>
                <div className="flex_p showhotel_header_p">
                    <h3 className="showHotels_h3-p">{location.state.city} </h3>
                    <p className="p_p">-{details.length}Hotels Found</p>
                </div>
                <div className="flex_p showhotel_header_p">
                    <p className="teal_p">Check-in - {checkin.getDate()}/{checkin.getMonth()}/{checkin.getYear()},</p>
                    <p className="teal_p">{"           "}Check-out- {checkout.getDate()}/{checkout.getMonth()}/{checkout.getYear()},</p>
                    <p>{"  "}Guest - {location.state.guest} </p>
                </div>
            </div>
                <div className="teal_p">
                    <div className="right_p">
                        Sort By
                        <select onChange={(e) => { getDetails(e.target.value); }}>
                            <option value="desc">Price: High To Low</option>
                            <option value="asc"> Price: Low To High</option>
                        </select>
                    </div>
                </div>
                <div className="flex_p">

                    <div className="filter_p">

                        <div>
                            <h3 className="filter_p_h3">Filter</h3>

                            <br />
                            <input name="ac"
                                type="checkbox"
                                value="ac"
                                onChange={(e) => { setAC(e.target.checked) }} /> A.C
                            <br />
                            <input
                                type="checkbox"
                                value="wifi"
                                onChange={(e) => { setWifi(e.target.checked) }} /> WI-FI  <br />
                            <input
                                type="checkbox"
                                value="front_desk"
                                onChange={(e) => { setFront_Desk(e.target.checked) }} />Front-Desk  <br />
                            <input
                                type="checkbox"
                                value="breakfast"
                                onChange={(e) => { setBreakfast(e.target.checked) }} /> BreakFast  <br />
                            <input
                                type="checkbox"
                                value="restaurent"
                                onChange={(e) => { setRestaurent(e.target.checked) }} /> Restaurent  <br />

                            <input
                                type="checkbox"
                                value="Laundry"
                                onChange={(e) => { setLaundry(e.target.checked) }} /> Laundry  <br />
                            <button className="filter_p_button" onClick={filteredData}>Apply</button>
                        </div>
                    </div>


                    <div className="margin_showHotel_p">
                        {details.map((e) => {
                            return <div key={e._id} className="flex_p suggestion-width_p margin_suggestion_p">
                                <div className="thumbnail-div-p">
                                    <img className="thumbnail_img_p" src={e.thumbnail} alt="thumbnail" />
                                </div>

                                <div>
                                    <p>{e.hotel_name}</p>
                                    <p className="flex_p">{e.location}<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyE2qOPNnzhBGz5_V9q3YifcnOj615VOM-7m0eN7O4oWz1BAhZyaisPVIe7MUlOMh-NNk&usqp=CAU" className="location_showHotel_p" alt="location.png" /></p>
                                </div>
                                <div className="btn-margin_p">
                                    <div className="red"> ₹{e.price}</div>
                                    <button className="reserve_shoeHotels_p" onClick={() => {
                                        console.log(e._id, "id");
                                        move(e._id, checkout, checkin, guest)
                                    }}>Reserve</button>
                                </div>

                            </div>;
                        })}
                    </div>
                </div></>}
        </div>


    )

}

export default ShowHotel