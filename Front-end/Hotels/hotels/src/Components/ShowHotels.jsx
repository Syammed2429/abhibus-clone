import { useEffect, useState } from "react"
import axios from "axios";
import "../Components/Css/ShowHotels.css"
function ShowHotel({city,checkin,checkout,guest}){
   // console.log(city,checkout,checkin,guest)
    const [details,setDetails] = useState(null);
    const [isError,SetError] =useState(false);
    const [loading,setLoading] = useState(false)
    const [Show,SetShow] =useState(false)
    useEffect(async()=>{
        axios.get(`http://localhost:3210/hotels/sort_asc`)

        .then((res)=>{

            setDetails(res.data);
            console.log("res",details)
            SetShow(true)
        })
        .catch((e)=>{SetError(true);console.log(e,"e")})
        
    },[loading])

    const getDetails=async(order)=>{
        console.log(order)
        axios.get(`http://localhost:3210/hotels/sort_${order}`)

        .then((res)=>{

            setDetails(res.data);
            console.log("res",details)
        })
        .catch((e)=>{SetError(true);console.log(e,"e")})
        .finally(()=>{
            setLoading(false)
        })
     }
    
    return(
        <div>
            {loading&&<p>Loading</p>}
            {isError&&<div>"SomeThing went wrong"</div>}

            ShowHotels TextArea
            {Show&& <><div>
                <h3>{details.length}Hotels Found </h3>
              <div className="flex">
                  <p>Check-in</p>
                  <p>Check-out</p>
                  <p>1 Adult,1 Children, 1 Room </p>
              </div>
            </div>
            <div>Sort By
                 <select onChange={(e)=>{getDetails(e.target.value)}}>
                     <option value="desc">Price: High To Low</option>
                     <option value="asc"> Price: Low To High</option>
                </select>
            </div>
                {details.map((e)=>{
                    return <div key={e._id} className="flex suggestion-width">
                        <img className="thumbnail" src={e.thumbnail} alt="thumbnail" />
                            <div>
                                <p>{e.hotel_name}</p>
                                <p>{e.location}</p>
                            </div>
                            <div>
                           <p className="red"> ₹{e.price}</p>
                            <button onClick={()=>{console.log(e._id,"id")}} >Book Now</button>
                            </div>
                           
                    </div>
                })}</>}
        </div> 

      
    )

}

export default ShowHotel