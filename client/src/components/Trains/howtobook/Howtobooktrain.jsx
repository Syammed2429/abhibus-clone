
import './howtobooktrain.css'
const Howtobooktrain =()=>{

    return(
        <>
        <div className="pt-5 padding-left-s"  >
            <div className="h5"><b>How to Book Train Ticket on AbhiBus</b></div>
            <div className="process-steps-s">
                    <div className="inside-process-grid p-3 process-steps-s-div">
                        <div><img src="https://www.abhibus.com/trains//images/how-to-1.png" alt="pic" /></div>
                        <div className="h5" style={{fontSize:"1.2rem"}}>Select Train <br/> & Make Payment</div>
                    </div>
                    <div className="alignarrows-s"><img src="https://www.abhibus.com/trains//images/how-to-arrow.png" alt="left" /></div>
                    <div className="inside-process-grid p-3 process-steps-s-div">
                        <div><img src="https://www.abhibus.com/trains//images/how-to-2.png" alt="pic" /></div>
                        <div className="h5" style={{fontSize:"1.2rem"}}>Enter IRCTC Password
or Reset if forgotten</div>
                    </div>
                    <div className="alignarrows-s"><img src="https://www.abhibus.com/trains//images/how-to-arrow.png" alt="left" /></div>
                    <div className="inside-process-grid p-3 process-steps-s-div">
                        <div><img src="https://www.abhibus.com/trains//images/how-to-3.png" alt="pic" /></div>
                        <div className="h5" style={{fontSize:"1.2rem"}}>Complete Booking <br/>
& Have a nice trip</div>
                    </div>
            </div>
        </div>
        </>
    )
}

export {Howtobooktrain}