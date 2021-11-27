import "../css/Rental.css";
import * as React from 'react';
import {Footers} from "./Footers.jsx"
import { Navbar } from "./Navbar.jsx"
import {Carousel} from './Sliderbar.jsx'
// import {NavBar2} from './NavBar2.jsx'


function Train() {
  
  return (
    
    <div className="searchBox" style={{ backgroundColor: "rgb(249, 249, 249" }}>
      <Navbar></Navbar>
      {/* <NavBar2></NavBar2> */}
      <div className="inputDiv">
        <input
          className="t-input_1"
          type="text"
          name="f"
          placeholder="Enter Source City..."
        />
        <input
          className="t-input_2"
          type="text"
          name="f"
          placeholder="Enter Source City..."
        />
        {/* <TextField style={styles} className="t-input_1" id="filled-basic" label="Filled" variant="filled" /> */}
    
        <input
          className="t-input_3"
          placeholder="Type Date" 
          type="date"
          name="f"
          
        />
        <input
          className="t-input_3"
          type="date"
          name="f"
          placeholder="Enter Destination City..."
        />
        <button className="t-input_4">Search </button>
      </div>

      <div
        style={{
          backgroundImage: `url("https://static.abhibus.com/assets/img/rental-seach-bg.png")`,
          width: "100%",
          height: "500px",
          marginTop: "-230px",
          backgroundColor: "gray",
          backgroundPositionX: "50%",
        }}
      >
      </div>
      <div
        style={{
          paddingTop: "16px",
          paddingBottom: "15px",
          width: "97%",
          backgroundColor: "white",
          margin: "auto",
          marginTop: "-60px",
        //   boxShadow:
        //     "0 1px 17px 0 rgba(0, 0, 0, 0.1), 0 1px 4px 0 rgba(0, 0, 0, 0.6)",
        border: "0.09px solid rgb(214, 214, 214)"
        }}
      >
        <div className="headings">
          <h6
            style={{
              fontWeight: "bold",
              fontSize: "25px",
              textAlign: "left",
             
              marginLeft:"10px"
            }}
          >
            AbhiBus Offers
          </h6>
          <div className="carousel">
          <Carousel></Carousel>
            </div>
           
        
          
        </div>
       
      </div>
  
      <div className="hotal_mid_box">
          <div className="hotal_mid_box_1">
              <img className="hotal_mid_box_1_1" src="https://www.abhibus.com/rentals/images/rentals-1.gif" alt="" />
              
          </div>
          <div className="hotal_mid_box_1">
          <img className="hotal_mid_box_1_1" src="https://www.abhibus.com/rentals/images/rentals-2.gif" alt="" />
         
          </div>
          <div className="hotal_mid_box_1">
          <img className="hotal_mid_box_1_1" src="https://www.abhibus.com/rentals/images/rentals-2.gif" alt="" />
          
          </div>

      </div>
     
      <div className="mid_3_box">
        <h3>AbhiBus Rentals</h3>
        <div>
          
            <p>Currently booking or renting the entire bus in India is a cumbersome process, as the market is highly dis-organised and works in offline mode that lacks speed, convenience & transparency.

          </p>
          
          <p>AbhiBus’s Rental services, offers their customers, a transparent platform to check and compare prices and complete the booking with a touch or click. AbhiBus Rentals allows users to filter and sort the buses as per their choice from AC, Non-AC, Seater or Sleeper options. As the user is renting a complete bus, he or she can opt for multiple pickup and drop points right from their homes or offices. This allows accurate price quotes to be arrived at as the trip is calculated on the number of actual kilometres that is going to be consumed by the user.</p>
          
          <p>No more calls to operators & bargaining for prices. A user just needs to compare bus types and prices to select the service of his choice and pay online to book the entire bus.

            <br />
            <br />
            Rent- A- Bus made easy with Abhi Rentals!</p>
        </div>
      </div>
      
      {/* <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box> */}
      <div>
      <Footers></Footers>
    </div>
    </div>
    
    
  );
}
export default Train;
