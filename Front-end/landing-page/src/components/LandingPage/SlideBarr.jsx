import React from "react";

import Flickity from "react-flickity-component";

import "./Slidebar.css";
const flickityOptions = {
    groupCells: true,
    imagesLoaded: true,
    pageDots: false,
    contain: true,
    asNavFor: ".carousel-main"
};
function Slidebarr() {
    return (
        <div>
            <div style={{}}>
                {" "}
                <Flickity options={flickityOptions}>
                    <img
                        className="slider"
                        src="https://static.abhibus.com/busgallery/offerbanners/Sep2021/27/1632727170/476x220-v2.jpg"
                        alt=""
                    />
                    <img
                        className="slider"
                        src="https://static.abhibus.com/busgallery/offerbanners/Sep2021/24/1632471645/phonepe-476x220.png"
                        alt=""
                    />
                    <img
                        className="slider"
                        src="https://static.abhibus.com/busgallery/offerbanners/Sep2021/24/1632471295/cred-476x220.png"
                        alt=""
                    />
                    <img
                        className="slider"
                        src="./images/get200.png"
                        alt=""
                    />
                    <img
                        className="slider"
                        src="https://static.abhibus.com/busgallery/offerbanners/Sep2021/24/1632471551/ola-476X220.png"
                        alt=""
                    />
                    <img
                        className="slider"
                        src="https://static.abhibus.com/busgallery/offerbanners/Sep2021/24/1632471175/mobe-476x220.png"
                        alt=""
                    />
                </Flickity>
            </div>
        </div>
    );
}

export default Slidebarr;
