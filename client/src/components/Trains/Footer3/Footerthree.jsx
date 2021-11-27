import './footerthree.css';


const Footerthree = ()=>{

    return(
        <>
            <div className="footer-three-s back-footer-three-s">
                <div style={{display: 'flex'}}>
                    <div className="footertwo-space-s pb-0">ixigo</div>
                <div className="footertwo-space-s pb-0">|</div>
                <div className="footertwo-space-s pb-0">ConfirmTkt</div>
                </div>
                <div className="footerthree-lastimage-align-s"  style={{display: 'flex'}}>
                    <div className="footer-three-lastimage-s">Copyright @ Le Travenues Technology Ltd. All Right Reserved.</div>
                    <div><img src="https://static.abhibus.com/assets/img/travel-insu.png" alt="pic" /></div>
                    <div><img src="https://static.abhibus.com/assets/img/copyright.png" alt="pic" /></div>
                    <div><img src="https://static.abhibus.com/assets/img/visa.png" alt="pic" /></div>
                    <div><img src="https://static.abhibus.com/assets/img/paypal.png" alt="pic" /></div>
                </div>
                
            </div>
            
       
        </>
    )
}

export {Footerthree}