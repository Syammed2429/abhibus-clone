import React from 'react';
import { data } from './faqdata.json'
import { FaqDataDisplay } from './FaqDataDisplay';


const FAQ = () => {

    React.useEffect(() => {
        setFaq(data)
    }, [])

    const [faq, setFaq] = React.useState([]);

    const handleShowData = () => {
        setFaq(data)
    }

    const handleHideData = () => {
        setFaq(data => !data)
    }

    return (
        <>
            <div className=" rounded-0 shadow  container col-8 my-5 py-4">

                <h3>Frequently Asked Questions on Online Bus Booking</h3>
                <div>Q. How do you do online bus reservation on AbhiBus?</div>
                <div>Ans: Booking a bus ticket online in India is easy with ABHIBUS. Simply enter the Leaving from -- Going to destination details along with the date you wish to travel in the bus search option on the site. Within seconds you will be given a list of buses availability for your route. Select your bus that suits you best for you. Then just follow the simple steps to the ticket booking payment process and your seat will be reserved for your bus journey.</div>
                <div>Q. Do I need to create an account to book bus tickets on AbhiBus?</div>
                <div>Ans: No, you can book bus tickets as a guest user by providing required passenger details. However, we recommend you to create an account so that you get the latest information about bus availability, ticket details and other features which will help you book faster during future transactions.</div>
                <div>Q. How to sign-up AbhiBus?</div>
                <div>Ans: AbhiBus offers a one-step sign-up & login process with just an OTP received on your mobile. </div>
                <div>Q. Is it safe to travel by bus during the (COVID-19) pandemic?</div>
                <div>Ans: AbhiBus is maintaining all the COVID safety precautions set by the Government of India and Ministry of Health and Family Welfare (MOHFW). Passengers can book their tickets on Abhibus.com or Mobile APP and have safe travel by following travel guidelines during this COVID pandemic.
                </div>
                <div>Q. How do I book for bus services which are safe and reliable? </div>
                <div>Ans: Take the advantage of online bus Rating Score, Compare Bus Fare etc features on the site and we are assured about safety, reliability while booking your bus tickets with AbhiBus. We also introduced our ‘Safety-T’ bus details feature wherein the bus operators that take the necessary precautions during the covid-19 pandemic.</div>
                {/* {console.log(fa)} */}

                <FaqDataDisplay dat={faq}
                    handleShowData={handleShowData}
                    handleHideData={handleHideData}
                />
            </div>
        </>
    );
}

export { FAQ }