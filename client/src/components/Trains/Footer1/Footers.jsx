import "./Footers.css"
const mystyle={
    fontSize:"14px",
    backgroundColor:"#e5e5e5",
    width:"100%",
    height:"100%",
    wordWrap: "wrap",
    margin:"0%",
    marginTop:"0%",
    padding:"2% 4% 2% 8%",
    justifyContent:"space-between",
}
const Footers=()=>{

    return (
        <div className="footers-grid-s" style={mystyle}>
            <div className="Footers">
                <p className="black">Popular Bus Routes</p>
                <ul>
                    <li>Hyderabad to Bangalore Buses</li>
                    <li>Pune to Shirdi Buses</li>
                    <li>Chennai to Coimbatore Buses</li>
                    <li>Hyderabad to Visakhapatnam Buses</li>
                    <li>Bangalore to Hyderabad Buses</li>
                    <li>Bangalore to Vijayawada Buses</li>
                    <li>Hyderabad to Chennai Buses</li>
                    <li>Chennai to Bangalore Buses</li>
                    <li>Bangalore to Chennai Buses</li>
                    <li>Hyderabad to Vijayawada Buses</li>
                </ul>
            </div>
            <div className="Footers">
            <p className="black">Popular Train Routes</p>
                <ul>
                    <li>Hyderabad - Tirupati Trains</li>
                    <li>Bangalore - Hyderabad Trains
                    </li>
                    <li>Chennai - Hyderabad Trains</li>
                    <li>Bangalore - Mysore Trains</li>
                    <li>Delhi - Coimbatore Trains</li>
                    <li>Guntur to Hyderabad Trains
                    </li>
                    <li>Bangalore to Bhubaneswar Trains</li>
                    <li>Bangalore to Channarayapatna Trains</li>
                    <li>Coimbatore to Ernakulam Trains</li>
                    <li>Pune to Hyderabad Trains</li>
                </ul>
            </div>
            <div className="Footers">
            <p className="black">Popular Hotel Cities</p>
                <ul>
                    <li>Hotels in Hyderabad</li>
                    <li>Hotels in Jaipur</li>
                    <li>Hotels in Mangalore</li>
                    <li>Hotels in Bengaluru</li>
                    <li>Hotels in Visakhapatnam</li>
                    <li>Hotels in Goa</li>
                    <li>Hotels in Mysore</li>
                    <li>Hotels in Shirdi</li>
                    <li>Hotels in Coimbatore</li>
                    <li>Hotels in Coorg</li>
                </ul>
            </div>
            <div className="Footers">
            <p className="black">Popular Bus Operators</p>
                <ul>
                   
                    <li>APSRTC</li>
                    <li>TSRTC</li>
                    <li>BSRTC</li>
                    <li>Kerala RTC</li>
                    <li>Orange Travels</li>
                    <li>SRS Travels</li>
                    <li>Morning Star Travels</li>
                    <li>Kaveri Travels</li>
                    <li>Diwakar Travels</li>
                </ul>
            </div>
            <div className="Footers">
            <p className="black">More Useful Links</p>
                <ul>
                    <li>Check PNR Status</li>
                    <li>Train Running Status</li>
                    <li>Bus Rentals</li>
                    <li>APSRTC Bus Booking</li>
                    <li>TSRTC Bus Booking</li>
                    <li>Kerala RTC Bus Booking</li>
                    <li>MSRTC Bus Booking</li>
                    <li>Hotel Bookings</li>
                    <li>Bus Booking Offers</li>
                   
                </ul>
            </div>
        </div>
    )

}

export {Footers}