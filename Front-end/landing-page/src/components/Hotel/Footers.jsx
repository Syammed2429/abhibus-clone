import "./Css/Footers.css"
const mystyle = {
    display: "flex",
    justifyContent: "space-evenly",
    fontSize: "14px",
    backgroundColor: "#e5e5e5",
    width: "100%",
    height: "400px",
    wordWrap: "wrap",
    margin: "0%",
    marginTop: "0%",
    padding: "0%"
}
function Footer() {

    return (
        <>
            <div className="social_div">
                <p className="social">We're Social! Connect with us on</p>
                <img className="social" src="https://image.similarpng.com/thumbnail/2020/05/Facebook-logo-gray-color-PNG.png" alt="facebook" />
                <img className="social" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsIEK-QwsgpvQy2wCTKBh64sX6mY24pZKO5qhXUShXYfyaQ3R83UTUAWkWMWDAyLiKcck&usqp=CAU" alt="instagram" />
                <img className="social" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMAdmTmJCHxqALrFeAe3hjYa6K4rPw2hWxO0qzRZMZHH_IL0b0zEhKTDaDCxU1iQE_Lms&usqp=CAU" alt="twitter" />
                <img className="social" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnXsZjKNOIVc58Rw3NEJDSf6GikmHVVxsi7Avb28AWJnGsAJ2CY-HxRBLpiDUTcD0FwlM&usqp=CAU" alt="youtube" />

            </div>
            <div style={mystyle}>

                <div className="Footers_p block_p">
                    <p className="black_p">Popular Bus Routes</p>
                    <ul className="Footers_p_ul">
                        <li className="Footers_p_li"> Hyderabad to Bangalore </li>
                        <li className="Footers_p_li">Pune to Shirdi </li>
                        <li className="Footers_p_li">Chennai to Coimbatore </li>
                        <li className="Footers_p_li"> Hyderabad to Visakhapatnam </li>
                        <li className="Footers_p_li"> Bangalore to Hyderabad </li>
                        <li className="Footers_p_li">Bangalore to Vijayawada </li>
                        <li className="Footers_p_li">Hyderabad to Chennai </li>
                        <li className="Footers_p_li"> Chennai to Bangalore </li>
                        <li className="Footers_p_li">Bangalore to Chennai </li>
                        <li className="Footers_p_li">Hyderabad to Vijayawada </li>
                    </ul>
                </div>
                <div className="Footers_p block_p">
                    <p className="black_p">Popular Train Routes</p>
                    <ul className="Footers_p_ul">
                        <li className="Footers_p_li"> Hyderabad - Tirupati</li>
                        <li className="Footers_p_li"> Bangalore - Hyderabad
                        </li>
                        <li className="Footers_p_li"> Chennai - Hyderabad</li>
                        <li className="Footers_p_li">  Bangalore - Mysore</li>
                        <li className="Footers_p_li">  Delhi - Coimbatore</li>
                        <li className="Footers_p_li">Guntur to Hyderabad
                        </li>
                        <li className="Footers_p_li"> Bangalore to Bhubaneswar</li>
                        <li className="Footers_p_li"> Bangalore to Channarayapatna</li>
                        <li className="Footers_p_li"> Coimbatore to Ernakulam</li>
                        <li className="Footers_p_li"> Pune to Hyderabad</li>
                    </ul>
                </div>
                <div className="Footers_p block_p">
                    <p className="black_p">Popular Hotel Cities</p>
                    <ul className="Footers_p_ul">
                        <li className="Footers_p_li"> Hotels in Hyderabad</li>
                        <li className="Footers_p_li"> Hotels in Jaipur</li>
                        <li className="Footers_p_li"> Hotels in Mangalore</li>
                        <li className="Footers_p_li"> Hotels in Bengaluru</li>
                        <li className="Footers_p_li"> Hotels in Visakhapatnam</li>
                        <li className="Footers_p_li"> Hotels in Goa</li>
                        <li className="Footers_p_li"> Hotels in Mysore</li>
                        <li className="Footers_p_li"> Hotels in Shirdi</li>
                        <li className="Footers_p_li"> Hotels in Coimbatore</li>
                        <li className="Footers_p_li"> Hotels in Coorg</li>
                    </ul>
                </div>
                <div className="Footers_p block_p">
                    <p className="black_p">Popular Bus Operators</p>
                    <ul className="Footers_p_ul">

                        <li className="Footers_p_li"> APSRTC</li>
                        <li className="Footers_p_li"> TSRTC</li>
                        <li className="Footers_p_li"> BSRTC</li>
                        <li className="Footers_p_li"> Kerala RTC</li>
                        <li className="Footers_p_li"> Orange Travels</li>
                        <li className="Footers_p_li"> SRS Travels</li>
                        <li className="Footers_p_li"> Morning Star Travels</li>
                        <li className="Footers_p_li"> Kaveri Travels</li>
                        <li className="Footers_p_li"> Diwakar Travels</li>
                    </ul>
                </div>
                <div className="Footers_p block_p">
                    <p className="black_p">More Useful Links</p>
                    <ul className="Footers_p_ul">
                        <li  className="Footers_p_li">  Check PNR Status</li>
                        <li  className="Footers_p_li"> Train Running Status</li>
                        <li className="Footers_p_li">  Bus Rentals</li>
                        <li className="Footers_p_li">  APSRTC Bus Booking</li>
                        <li className="Footers_p_li">  TSRTC Bus Booking</li>
                        <li className="Footers_p_li">Kerala RTC Bus Booking</li>
                        <li className="Footers_p_li">MSRTC Bus Booking</li>
                        <li className="Footers_p_li"> Hotel Bookings</li>
                        <li className="Footers_p_li"> Bus Booking Offers</li>

                    </ul>
                </div>
            </div>
        </>
    )

}

export default Footer