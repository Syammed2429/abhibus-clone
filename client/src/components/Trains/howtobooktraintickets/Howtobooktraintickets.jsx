
import './howtobooktraintickets.css'

const Howtobooktraintickets = ()=>{


    return(
        <>
        <div className="padding-left-s pt-5">
            <div className="border-show-s">
                <div className="p-4 h4">How to book train tickets online?</div>
                <div className="inner-howtotrain-s p-4">
                        <div ><ul>
                            <li>Visit www.AbhiBus.com/trains or open AbhiBus mobile app – android or iOS</li>
                            <li>Select Source and Destination cities, Date of the journey, then click “Search” button</li>
                            <li>Choose your train and check seat availability for the same</li>
                            <li>Select seat class & date that suits you the best</li>
                            <li>Click on “Book” button and enter your IRCTC user ID (If you do not have a User Id then choose “Create IRCTC UserID” option or reset it by clicking on “Forgot IRCTC Password” button)</li>
                            <li>Fill the requisite form and click “Book” button</li>
                            <li>Now proceed for payment, Choose method of your preference i.e. Debit/Credit Card, Net banking or AbhiCash. All our payment means are secure and protected.</li>
                            <li>You will be redirected to IRCTC to enter the password for the user ID entered earlier and confirm. You are done with it!”</li>
                            </ul>
                            <div style={{paddingLeft:"40px"}}>You will also receive an instant auto update of your payment and ticket through an e-mail & message on your registered mobile numbers or email ids. So no need to carry hardcopy of your tickets.</div>
                            <div style={{paddingLeft:"40px"}} className="pt-3">Now book train tickets at AbhiBus!</div>
                            </div>
                            
                        <div><img src="https://www.abhibus.com/trains/images/ticket-bg.png" alt="trainpic" /></div>
                </div>
            </div>
            
        </div>
        </>
    )
}

export {Howtobooktraintickets}