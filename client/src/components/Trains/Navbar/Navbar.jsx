
import './navbar.css';

const Navbar =()=>{


    return(
        <>
            <div className="main-navbar">
                <div className="main-2ndnavbar">
                    <img className="abhibus-navbar" src="https://static.abhibus.com/img/abhilogos/logo1.png" alt="abhibus" />
                    <div>  </div>
                    {/* 3rd div of my bookings and account */}
                    <div className="thirdDiv">
                        <div>My Bookings</div>
                        <i className="fas fa-caret-down red"></i>
                        <i class="fas fa-user-circle"></i>
                        <div>Sumit</div>
                        <i className="fas fa-caret-down red"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export {Navbar}