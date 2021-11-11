import { useEffect, useRef, useState } from "react"
import axios from "axios";
import TextTruncate from 'react-text-truncate';
import "../Components/Css/ShowRoom.css"
function ShowRoom(){
    const [data,setData]=useState([]);
    const [showImg,setShowImg] =useState("")
    const [sh,setsh] =useState(false)
    const getData =async ()=>{
          await  axios.get(`http://localhost:3210/hotels/618d6e45c4086f4e31447f2b`)
          .then((res)=>{
            setData(res.data);
            console.log(res.data);
            setsh(true)
          }).finally(
              console.log(data)
             
            )
    }
    const readmore=useRef(null);
    const smoothScroll = ()=>{
      readmore.current.scrollIntoView({
        behavior :"smooth"
      })
    }
    useEffect(()=>{
        getData();
        readmore.current.focus();
        if(sh){
        setShowImg(data.gallery[0]);
        let i=0;
        console.log(data.description,"description")
        setInterval(() => {
            setShowImg(data.gallery[i]);
            i++;
            if(i===(data.gallery.length-1))
            i=0;
        }, 4000);}
    },[sh])
   
    return (
        <div  >
          <div className="flex">
               
                      <div className="show" >
                         <img  src={showImg} alt="img" />
                         <div >
                           <h2 className="text-decor">Room Type</h2>
                           <hr/>
                           <div className="flex check">
                             <img className="img" src={data.thumbnail} alt="oak"/>
                              <div>
                                <h2 className="text-decor">Oak</h2>
                                <div>
                                  <p> Room Amenities:</p>
                                   <p>{data.Laundry&&" | Laundry "}{data.ac&&" | AC "}{data.wifi&&" | Wi-Fi "}{data.breakfast&&" | Break-Fast "}{data.restaurent&&" | Restaurent "}{data.Laundry&&" | Laundry "}</p>
                                 </div> 
                                 <div>
                                    <p>Room Policies</p>
                                     <p>2 Guests (Max 2 Adults)</p>
                                 </div>
                              
                              </div>
                              <div>
                                <p className="red">₹{data.oak_price}</p>
                                <button>Book Now</button>
                              </div>
                           </div>
                         </div>
                         
                           <div className="flex check">
                             <img className="img" src={data.thumbnail} alt="oak"/>
                              <div>
                                <h2 className="text-decor">Maple</h2>
                                <div>
                                  <p> Room Amenities:</p>
                                   <p>{data.Laundry&&" | Laundry "}{data.ac&&" | AC "}{data.wifi&&" | Wi-Fi "}{data.breakfast&&" | Break-Fast "}{data.restaurent&&" | Restaurent "}{data.Laundry&&" | Laundry "}</p>
                                 </div> 
                                 <div>
                                    <p>Room Policies</p>
                                     <p>3 Guests (Max 2 Adults)</p>
                                 </div>
                              
                              </div>
                              <div>
                                <p className="red">₹{data.maple_price}</p>
                                <button>Book Now</button>
                              </div>
                           </div>
                          <div>
                          <h2 className="text-decor">Cancelation Policy</h2>
                           <hr/>
                           <ul className="special-li">
                              <li>Standard Check-In Time 12:00 PM.</li>
                              <li>Standard Check-Out Time 11:00 AM.</li>
                              <li>Early Check-In Policy Early check-in between 10 am to 12 pm is possible (free of charge) but can be confirmed, subject to availability, only upon arrival at the hotel and not in advance. For check-in prior to 10 AM, an extra night's tariff shall be applicable.</li>
                              <li>Late Check-Out Policy Late check-out between 12 pm and 1 pm is possible (free of charge) but can be confirmed, subject to availability, only at the time of check-out and not in advance. For check-out after 1 PM, an extra night's tariff shall be applicable.</li>
                              <li>Child Reservation Policy A maximum of 1 child upto an age of 8 years and an extra infant upto an age of 2 years is allowed free of charge, subject to room occupancy capacity. Breakfast will be included in stay but no extra bed or mattress will be provided. Extra person charges are applicable for anyone above 8 years of age. Extra person charges are also applicable for extra kids during check-in.</li>
                              <li>Identification Card All adults must carry one of these photo ID cards at the time of check-in: Driving License, Voters Card, Passport, Ration Card or Aadhar Card. PAN Cards are not accepted.</li>
                              <li>Other Policies Our hotels reserve the right of admission to ensure safety and comfort of guests. This may include cases such as local residents, unmarried and unrelated couples among others.</li>
                              <li>No cancellation fee is charged if the booking is cancelled 24 hours prior to the standard check-in time.</li>
                              
                           </ul>
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
                                
                                onClick={smoothScroll}>Read on</a>}
                                />
                                </div>
                        </div>
                
         </div>
         <div ref={readmore}>
           <h4>About Treebo Trend Vikrant Residency</h4>
           <hr/>
           {data.description}
         </div>
       </div>
    )
}

export default  ShowRoom