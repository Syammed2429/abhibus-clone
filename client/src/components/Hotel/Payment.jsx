import { useState, useEffect } from "react"
import { useLocation, useHistory } from "react-router-dom";
import "./Css/Payment.css"
import axios from "axios";
import Footer from "./Footers";
import { NavBar2 } from "../LandingPage/NavBar2";

function Pay({ type, checkin, checkout, guest, id }) {
    const location = useLocation();
    const [price, setPrice] = useState(0);
    const [data, setData] = useState([]);
    const [discountedPrice, setDiscountedPrice] = useState(0);
    const [stop, setStop] = useState(false);
    checkin = location.state.checkin;
    checkout = location.state.checkout;
    useEffect(() => {
        try {

            getData()
        } catch (e) {
            console.log(e)
        }
        finally {
            console.log("finally", data)
            setStop(true)
        }

    }, [stop]);
    const history = useHistory();
    const redirect = () => {
        alert(` Your Booking is confirm .
                Thank You for using ABHIBUS 
                Happy and safe Journey `);


        history.push("/hotels")
    }
    async function getData() {
        console.log(location.state)
        await axios.get(`https://abhibus-clone.herokuapp.com/hotels/${location.state.checkout}`)
            .then((res) => {
                setData(res.data);
                if (location.state.id === "oak") {
                    setPrice(res.data.oak_price);
                    setDiscountedPrice(res.data.oak_price)

                } else {
                    setPrice(res.data.maple_price);
                    setDiscountedPrice(res.data.oak_price)

                }


            }).catch((e) => {
                console.log("e", e)
            })
    }

    const [guestName, setGuestName] = useState("Priya");
    const [email, setEmail] = useState("priyakumarigupta@gmail.com");
    const [mobile, setMobile] = useState(9102330360);
    const [applyCoupon, setApplyCoupon] = useState(false);
    const [couponCode, setCoupoCode] = useState("");
    const [invalid, setInvalid] = useState(false);

    const [name, setName] = useState("");
    const [cvv, setcvv] = useState("");
    const [month, setMonth] = useState("");
    const [Year, setYear] = useState("");
    const [number, setNumber] = useState("");

    const handlecoupon = () => {
        if (couponCode === "SIMPLNOV" && applyCoupon == true) {
            let total = price - 150;
            setDiscountedPrice(total);


        } else if (couponCode === "ABHI500" && applyCoupon == true) {
            let total = price - 500;
            setDiscountedPrice(total);
        }
        else if (applyCoupon === false) {

            setDiscountedPrice(price)
        } else {
            setInvalid(true);
            setCoupoCode(" ")
        }
        setTimeout(() => {
            invalid_set();

        }, 1000);
    }
    const invalid_set = () => {
        setInvalid(false)
    }

    return (
        <div>
            <NavBar2 />
            <h2 className="margin_Payment_p">
                Booking Confirmation Details & Payment
            </h2>
            <div className="flex_p margin_Payment_p">
                <div className="WID_P" >
                    <div className="border_div_p ">
                        <h4>Confirm your primary Guest information</h4>
                        <p>(Booking details will be sent to your email address and contact no. )</p>
                        <div className="flex_p">
                            <div className="inp_p">
                                <lable>Name:</lable>
                                <br />
                                <input
                                    className="inp_p inp_mob_p input_p"
                                    type="text"
                                    value={guestName}
                                    onChange={(e) => {
                                        setGuestName(e.target.value)
                                    }} />
                            </div>
                            <div className="inp_p">
                                <lable>Email:</lable>
                                <br />
                                <input
                                    className="inp_p inp_mob_p input_p"
                                    type="email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }} />
                            </div>
                            <div className="inp_p ">
                                <lable>Mobile No.:</lable>
                                <br />
                                <input
                                    className="inp_p inp_mob_p input_p"
                                    type="number"
                                    value={mobile}
                                    onChange={(e) => {
                                        setMobile(e.target.value)
                                    }} />
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className="btn-back_p flex_p coupon_p ">
                            <input className="input_p payment_justify_undset_p" type="checkbox" onChange={(e) => {
                                setApplyCoupon(e.target.checked);
                                console.log(applyCoupon)
                            }} />
                            <lable>I have a coupon code (optional but useful)</lable>

                            {applyCoupon && <div className="flex_p">
                                <input className="input_p border_div_p" type="text" onChange={(e) => {
                                    setCoupoCode(e.target.value);
                                }} />
                                <button className="coupon-button_p" onClick={handlecoupon}>Apply</button>
                                <br />

                            </div>
                            }


                        </div>
                        {invalid && <p className="red">Invalid Promo code</p>}
                        <div className="card_p">
                            <h2 className="cen_p">Make Payment</h2>
                            <div className="margin_Payment_p">
                                <h3>Enter your Credit card details</h3>
                                <div>
                                    <lable>Credit Card No. :</lable>
                                    <input className="input_p border_div_p card_input_width_payment_p" type="number" placeholder="Credit card Number" onChange={(e) => {
                                        setNumber(e.target.value);
                                    }} />
                                </div>

                                <br />
                                <br />

                                <lable>Expiry Date :</lable>
                                <select className="input_p" onChange={(e) => {
                                    setMonth(e.target.value);
                                }}>
                                    <option>Month</option>
                                    <option>01</option>
                                    <option>02</option>
                                    <option>03</option>
                                    <option>04</option>
                                    <option>05</option>
                                    <option>06</option>
                                    <option>07</option>
                                    <option>08</option>
                                    <option>09</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                </select>
                                <select className="input_p" onChange={(e) => {
                                    setYear(e.target.value);
                                }}>
                                    <option>Year</option>
                                    <option>2021</option>
                                    <option>2022</option>
                                    <option>2023</option>
                                    <option>2024</option>
                                    <option>2025</option>
                                    <option>2026</option>
                                    <option>2027</option>
                                    <option>2028</option>
                                    <option>2029</option>
                                    <option>2030</option>
                                    <option>2031</option>
                                    <option>2032</option>
                                    <option>2033</option>
                                    <option>2034</option>
                                    <option>2035</option>
                                    <option>2036</option>
                                    <option>2037</option>
                                    <option>2038</option>
                                    <option>2039</option>
                                    <option>2040</option>
                                    <option>2041</option>
                                    <option>2042</option>
                                    <option>2043</option>
                                    <option>2044</option>
                                    <option>2045</option>
                                    <option>2046</option>
                                    <option>2047</option>
                                    <option>2048</option>
                                    <option>2049</option>
                                    <option>2050</option>
                                </select>
                                <br />
                                <br />

                                <lable>CVV :</lable>
                                <input className="input_p border_div_p card_input_width_payment_p" type="password" onChange={(e) => {
                                    setcvv(e.target.value);
                                }} />
                                <br />
                                <br />

                                <lable>Name on the Card :</lable>
                                <input className="input_p border_div_p card_input_width_payment_p" type="text" onChange={(e) => {
                                    setName(e.target.value);
                                }} />
                                <br />
                                <br />


                            </div>
                            <div className="btn-back_p">
                                <button className="border_none_payment_p" onClick={redirect}>Make Payment</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border_div_p WID_P">

                    <div>
                        <img className="pay_thumb_p" src={data.thumbnail} alt="payment thumbnail" />
                        <p>{data.address}</p>
                    </div>
                    <hr />
                    <div>Room Type : {type}</div>
                    <hr />
                    <div>
                        <div >Check-In : {location.state.checkin.getDate()}-{location.state.checkin.getMonth()}-{location.state.checkin.getYear()}</div>
                        <div >Check-out : {location.state.guest.getDate()}-{location.state.guest.getMonth()}-{location.state.guest.getYear()}</div>
                    </div>
                    <hr />
                    <div >Guest : {location.state.type}</div>
                    <hr />
                    <div>
                        Amount :₹{price}
                        <br />
                        Total cost  : ₹{price}
                    </div>
                    <hr />
                    <div className=" text_p">
                        Total Payable : <p className="red ">₹{discountedPrice}</p>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <Footer />
        </div>
    )
}

export default Pay