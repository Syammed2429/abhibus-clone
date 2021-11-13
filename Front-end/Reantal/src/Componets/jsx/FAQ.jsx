import "../css/Faq.css";
import {useState} from "react"
function FAQ(){
    const extra = <>
        <b className="extra_b">Q. Can I book SRTC bus tickets on AbhiBus?</b>
        <b className="light_b">Ans: Yes, you can book SRTC (State Road Transport Corporation) bus tickets using our website or mobile app. Some of the major SRTC includes.</b>
        <ul>
            <li>APSRTC - Andhra Pradesh State Road Transport Corporation</li>
            <li>TSRTC - Telangana State Road Transport Corporation</li>
            <li>GSRTC - Gujarat State Road Transport Corporation</li>
            <li>HRTC - Himachal Road Transport Corporation</li>

        </ul>

    </>
    const[readmore,setReadmore] = useState(false);
    const linkname = readmore ? "Hide FAQs" : "View all FAQs"
return(
    <>
    <div className="shadow_cont">
        <div className="card">
        <h3>Frequently Asked Questions on Online Bus Booking</h3>
         <b>Q. How do you do online bus reservation on AbhiBus?</b>
         <b>Ans: Booking a bus ticket online in India is easy with ABHIBUS. Simply enter the Leaving from -- Going to destination details along with the date you wish to travel in the bus search option on the site. Within seconds you will be given a list of buses availability for your route. Select your bus that suits you best for you. Then just follow the simple steps to the ticket booking payment process and your seat will be reserved for your bus journey.</b>
         <b>Q. Do I need to create an account to book bus tickets on AbhiBus?</b>
         <b>Ans: No, you can book bus tickets as a guest user by providing required passenger details. However, we recommend you to create an account so that you get the latest information about bus availability, ticket details and other features which will help you book faster during future transactions.</b>
         <b>Q. How to sign-up AbhiBus?</b>
         <b>Ans: AbhiBus offers a one-step sign-up & login process with just an OTP received on your mobile.</b>
         <b>Q. Is it safe to travel by bus during the (COVID-19) pandemic?</b>
         <b>Ans: AbhiBus is maintaining all the COVID safety precautions set by the Government of India and Ministry of Health and Family Welfare (MOHFW). Passengers can book their tickets on Abhibus.com or Mobile APP and have safe travel by following travel guidelines during this COVID pandemic.</b>
         <b>Q. How do I book for bus services which are safe and reliable?</b>
         <b>Ans: Take the advantage of online bus Rating Score, Compare Bus Fare etc features on the site and we are assured about safety, reliability while booking your bus tickets with AbhiBus. We also introduced our ‘Safety-T’ bus details feature wherein the bus operators that take the necessary precautions during the covid-19 pandemic.</b>
         {readmore && extra}

         <h5 onClick={()=>{setReadmore(!readmore)}}  className="link">{linkname}</h5>
       
        </div>

    </div>

    </>
)
}
export{FAQ}