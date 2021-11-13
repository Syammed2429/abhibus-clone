
import './secondsearch.css'
const Secondsearch = ({arrival,depart,sourceTrain,destTrain,setArrival,setDepart})=>{
    return(
        <>
        <div className="secondsearch-s pt-3">
           <div className="secondsearch-input-s p-0" >
               <div className="p-2"><i class="fas fa-location-arrow"></i></div>
               <input type="text" value={arrival} placeholder="Enter Location" className="p-3 b-0 mt-2" />
           </div>
           <div className="p-3"><img style={{cursor:"pointer"}} src="https://www.abhibus.com/trains/images/twoway-arrow.png" alt="toggle" /></div>
           <div className="secondsearch-input-s" >
               <div className="p-2"><i class="fas fa-map-marker"></i></div>
               <input type="text" value={depart} placeholder="Enter Destination" className="p-3 b-0 mt-2" />
           </div>
           <div className="secondsearch-input-s margin-left-search-two-s" >
               <div className="p-2"><i class="fas fa-calendar-day"></i></div>
               <input type="date" placeholder="Enter Location" className="p-3 b-0 mt-2" />
           </div>
           <div className="p-1 arrow-second-size-s"><i class="fas fa-chevron-right"></i></div>
           <div className="p-0 arrow-second-size-s"><button className="button-searchsecond-s">Search</button></div>
        </div>
        </>
    )
}

export {Secondsearch}