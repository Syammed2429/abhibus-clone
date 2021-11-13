
import '../css/navbar.css';

const Navbar =()=>{


    return(
        <>
            <div className="main-navbar">
                <div className="main-2ndnavbar">
                    <img className="abhibus-navbar" src="https://static.abhibus.com/img/abhilogos/logo1.png" alt="abhibus" />
                    <div>  </div>

                    <div className="thirdDiv">
                        <div>My Bookings</div>
                        <i className="fas fa-caret-down red"></i>
                        <i class="fas fa-user-circle"></i>
                        <div>Login/Register</div>
                        <i className="fas fa-caret-down red"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export {Navbar}