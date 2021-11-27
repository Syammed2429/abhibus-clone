import { useEffect, useRef, useState } from "react"
import axios from "axios";
import TextTruncate from 'react-text-truncate';
import { useLocation, useHistory } from "react-router-dom";
import "./Css/ShowRoom.css"
import Footer from "./Footers";
import { NavBar2 } from "../LandingPage/NavBar2";


function ShowRoom() {
  const location = useLocation();
  const history = useHistory();
  const [data, setData] = useState([]);
  const [showImg, setShowImg] = useState("")
  const [sh, setsh] = useState(false);
  const checkin = location.state.checkin;
  const checkout = location.state.checkout;
  const pay = (id, checkout, checkin, guest, type) => {
    history.push({
      pathname: "/payments",
      state: {
        type: type,

        checkin: checkin,
        checkout: checkout,
        guest: guest,
        id: id
      }
    });
  }
  const getData = async () => {
    // console.log(location.state,"state")
    await axios.get(`${process.env.REACT_APP_API}/hotels/${location.state.id}`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
        setsh(true)
      }).finally(
        //console.log(data)

      )
  }

  const readmore = useRef(null);
  const selectDiv = useRef(null);
  const smoothScroll = () => {
    readmore.current.scrollIntoView({
      behavior: "smooth"
    })
  }
  const smoothScroll2 = () => {
    selectDiv.current.scrollIntoView({
      behavior: "smooth"
    })
  }
  useEffect(() => {
    getData();
    readmore.current.focus();
    if (sh) {
      setShowImg(data.gallery[0]);
      let i = 0;
      console.log(data.description, "description")
      setInterval(() => {
        setShowImg(data.gallery[i]);
        i++;
        if (i === (data.gallery.length - 1))
          i = 0;
      }, 4000);
    }
  }, [sh])

  return (
    <div  >
      <NavBar2 />
      <div className="flex_ShowRoom_p showRoom_border_p">
        <div className="description_p_h4 width_header_p">
          <h2 className="description_p_h4">{data.hotel_name}</h2>
          <p>{data.address}</p>
          <div className="flex_ShowRoom_p">
            <p className="teal_p">Check-in - {checkin.getDate()}/{checkin.getMonth()}/{checkin.getYear()},</p>
            <p className="teal_p">{"           "}Check-out- {checkout.getDate()}/{checkout.getMonth()}/{checkout.getYear()},</p>
            <p>{"  "}Guest - {location.state.guest} </p>
          </div>
        </div>

        <div className="btn-margin_p description_p_h4">

          <div >
            <p className="red">₹{data.maple_price}</p>
            <button className="button_ShowRoom_p" onClick={smoothScroll2}>Select Rooms</button>
          </div>
        </div>
        <div className="fl-ri_p description_p_h4">
          <div >
            <img className="width_header_p_img" src="https://static.abhibus.com/img/abhilogos/logo1.png" alt="logo" />
          </div>


        </div>
      </div>

      <div className="flex_ShowRoom_p" >

        <div className="show" >
          <img src={showImg} alt="img" />
          <div>
            <h2 className="text-decor_p">Room Type</h2>
            <hr />
            <div ref={selectDiv} className="flex_ShowRoom_p check">
              <img className="img" src={data.thumbnail} alt="oak" />
              <div>
                <h2 className="text-decor">Oak</h2>
                <div className="margin_room_type_p">
                  <p> Room Amenities:</p>
                  <p>{data.Laundry && " | Laundry "}{data.ac && " | AC "}{data.wifi && " | Wi-Fi "}{data.breakfast && " | Break-Fast "}{data.restaurent && " | Restaurent "}{data.Laundry && " | Laundry "}</p>
                </div>
                <div>
                  <p>Room Policies</p>
                  <p>2 Guests (Max 2 Adults)</p>
                </div>

              </div>
              <div className="btn-margin_p">
                <p className="red">₹{data.oak_price}</p>
                <button className="button_ShowRoom_p" onClick={
                  () => {
                    pay("oak", location.state.id, checkin, checkout, location.state.guest)
                  }
                }>Book Now</button>
              </div>
            </div>
          </div>

          <div className="flex_ShowRoom_p check">
            <img className="img" src={data.thumbnail} alt="oak" />
            <div>
              <h2 className="text-decor">Maple</h2>
              <div>
                <p> Room Amenities:</p>
                <p>{data.Laundry && " | Laundry "}{data.ac && " | AC "}{data.wifi && " | Wi-Fi "}{data.breakfast && " | Break-Fast "}{data.restaurent && " | Restaurent "}{data.Laundry && " | Laundry "}</p>
              </div>
              <div>
                <p>Room Policies</p>
                <p>3 Guests (Max 2 Adults)</p>
              </div>

            </div>
            <div className="btn-margin_p">
              <p className="red">₹{data.maple_price}</p>
              <button className="button_ShowRoom_p" onClick={
                () => {
                  pay("maple", location.state.id, checkin, checkout, location.state.guest)
                }
              }>Book Now</button>
            </div>
          </div>

        </div>


        <div className="short-box">
          <h3> About {data.hotel_name}</h3>
          <div >
            <TextTruncate
              line={4}
              element="span"
              truncateText="…"
              text={data.description}
              textTruncateChild={<a
                className="red"
                style={{ cursor: "pointer", textDecoration: "underline" }}
                onClick={smoothScroll}>Read More</a>}
            />
          </div>
        </div>

      </div>
      <div >
        <h2 className="text-decor_p">Cancelation Policy</h2>
        <hr />
        <div className="cancellation_div_p">
          <ul className="special-li_p">
            <li className="special-li_li_p">Standard Check-In Time 12:00 PM.</li>
            <li className="special-li_li_p">Standard Check-Out Time 11:00 AM.</li>
            <li className="special-li_li_p">Early Check-In Policy Early check-in between 10 am to 12 pm is possible (free of charge) but can be confirmed, subject to availability, only upon arrival at the hotel and not in advance. For check-in prior to 10 AM, an extra night's tariff shall be applicable.</li>
            <br />
            <li className="special-li_li_p">Late Check-Out Policy Late check-out between 12 pm and 1 pm is possible (free of charge) but can be confirmed, subject to availability, only at the time of check-out and not in advance. For check-out after 1 PM, an extra night's tariff shall be applicable.</li>
            <br />
            <li className="special-li_li_p">Child Reservation Policy A maximum of 1 child upto an age of 8 years and an extra infant upto an age of 2 years is allowed free of charge, subject to room occupancy capacity. Breakfast will be included in stay but no extra bed or mattress will be provided. Extra person charges are applicable for anyone above 8 years of age. Extra person charges are also applicable for extra kids during check-in.</li>
            <br />
            <li className="special-li_li_p">Identification Card All adults must carry one of these photo ID cards at the time of check-in: Driving License, Voters Card, Passport, Ration Card or Aadhar Card. PAN Cards are not accepted.</li>
            <br />
            <li className="special-li_li_p">Other Policies Our hotels reserve the right of admission to ensure safety and comfort of guests. This may include cases such as local residents, unmarried and unrelated couples among others.</li>
            <br />
            <li className="special-li_li_p">No cancellation fee is charged if the booking is cancelled 24 hours prior to the standard check-in time.</li>
            <br />

          </ul>
        </div>
      </div>
      <div className="description_p" ref={readmore}>
        <h4 className="red description_p_h4">About {data.hotel_name}</h4>
        <hr />
        {data.description}
      </div>
      <Footer />
    </div>
  )
}

export default ShowRoom