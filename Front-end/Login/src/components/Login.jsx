import { useState } from "react";
import { Modal, Button } from "react-bootstrap"
import "./box.css"
import "./rightdiv.css"
import "./leftdiv.css"
export const Login = function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleLogin = () => {
        return window.location.href = "http://localhost:2345/auth/google"

    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="bg-dark text-white text-center" closeButton>
                    <Modal.Title >Login/Signup with OTP</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="box">
                        <div className="left"><img className="logo_left" src="https://static.abhibus.com/img/icons/left-img.png" alt=""></img></div>
                        
                        <div >
                            <input className="inputbox" type="text" placeholder="Enter your Mobile Number"></input>
                            <br></br>
                            <div className="freeRide">
                                <div><input type="checkbox"></input></div>
                                <div>Get First Ride FREE</div>
                            </div>
                            <button className="login_btn">Login/Signup with OTP</button>

                            <p className="para">or login with</p>

                            <div className="refBtn">
                                <div>
                                    <button>
                                        <img src="https://static.abhibus.com/img/icons/facebook-32.png" alt=""></img>
                                       
                                    </button>
                                </div>
                                <div>
                                    <button onClick={handleLogin}>
                                        <img src="https://static.abhibus.com/img/icons/google-32.png" alt=""></img>                                   
                                        
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </Modal.Body>
                
            </Modal>
        </>
    );
}
