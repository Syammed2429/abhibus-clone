
import "../Components/Css/SearchArea.css"
import Footer from "./Footers";
import SearchBox from "./SearchBox";
function SearchArea(){


    return (
        <div>
            <h1 className="mb"> Book Hotels Online </h1>
            <ul className="nav-pills">
                <li>Bus</li>
                <li>Train</li>
                <li className="active">Hotels</li>
                <li>Rentals</li>

            </ul>
            <div>
                <SearchBox />
                <img src="https://static.abhibus.com/assets/img/hotel-seach-bg.png" alt="Hotel_Background" />
            </div>
              {/*Offer Section Start */}
           <div className="offer-cont">
               <div className="offer_block">
                   <ul className="flex">
                       <li className="offer"> AbhiBus Offers </li>
                       <li> All Offers </li>
                       <li> Bus Offers </li>
                       <li> View All </li>
                      
                   </ul>
                   <div className="flex">
                        <img className="offer_img" src="https://static.abhibus.com/busgallery/offerbanners/Oct2021/08/1633635886/476x220.png" alt="offer"/>
                        <img className="offer_img" src="https://static.abhibus.com/busgallery/offerbanners/Oct2021/01/1633076370/476x220.png" alt="offer"/>
                        <img className="offer_img" src="https://static.abhibus.com/busgallery/offerbanners/Oct2021/31/1635683049/476X220.png" alt="offer"/>
                   </div>
               </div>
               {/*Offer Section End */}
                 {/*Popular Cities To Book Start */}
               <div className="popularCities">
                   <div className="cities">
                     <img src="https://static.abhibus.com/busgallery/popularCities/1519842600_hyd.jpg" alt="offer"/>
                     <p className="bottom-left">Book Hotels in Hyderabad</p>
                     <div className="flex">
                         <div>
                         <p>Price Starts at</p>
                         <p className="red"> ₹2829</p>
                         </div>
                         <button className="button_p">Book Now</button>
                     </div>
                   </div>
                   <div className="cities">
                     <img src="https://static.abhibus.com/busgallery/popularCities/1519842600_gan.jpg" alt="offer"/>
                     <p className="bottom-left">Book Hotels in Banglore</p>
                     <div className="flex">
                         <div>
                         <p>Price Starts at</p>
                         <p className="red"> ₹607</p>
                         </div>
                         <button className="button_p">Book Now</button>
                     </div>
                   </div>
                   <div className="cities">
                     <img src="https://static.abhibus.com/busgallery/popularCities/1519842600_mum.jpg" alt="offer"/>
                     <p className="bottom-left">Book Hotels in Mumbai</p>
                     <div className="flex">
                         <div>
                         <p>Price Starts at</p>
                         <p className="red"> ₹350</p>
                         </div>
                         <button className="button_p">Book Now</button>
                     </div>
                   </div>
                       
               </div>
                  {/*Popular Cities To Book End*/}
               {/*Why Book With AbhiBus Start */}
               <div className="why">
                   <h4>Why book with AbhiBus?</h4>
                   <p>Finding a hotel for your vacation or a business trip just got easier with AbhiBus- the fastest growing market place for online bus tickets. AbhiBus has curated hotel content understanding the staying needs of our bus travellers. We realized what was the point in publishing all the inventory available which may be of no relevance to our customers at all . This very thought triggered us to curate the content and enter into strategic alliances with leading three star, two star hotels and hotel aggregators from across the country who could give the quality and price without compromise.</p>
                   <p>We are sure you will find the accommodation of your choice within budget at AbhiBus.</p>
               </div>
               {/*Why Book With AbhiBus End */}
           </div>
           
           <Footer />
        </div>
       
    )
}

export default SearchArea;