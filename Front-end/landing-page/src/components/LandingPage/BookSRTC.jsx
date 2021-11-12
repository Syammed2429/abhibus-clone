import React from 'react';
// import Carousel from './Sliderbar';
import { Test2 } from './Test2';

const BookSRTC = () => {


    return (
        <>
            <div className="card rounded-0 shadow mt-4 p-4 w-55  col-8 container ">
                <div>
                    <h3>Book SRTC(State Road Transport Corporation) bus tickets at AbhiBus</h3>
                    <div>
                        <ul className="d-flex justify-content-end">
                            <button>{"<"}</button>
                            <button>{">"}</button>
                        </ul>
                    </div>
                    {/* <div className="d-flex justify">
                        <h1 className="mr-4">fffg</h1>
                        <h1 className="mr-4">fffg</h1>
                        <h1 className="mr-4">fffg</h1>
                        <h1 className="mr-4">fffg</h1> */}
                    <div style={{ width: "95%", margin: "auto", backgroundColor: "white", marginTop: "5px" }}> <Test2 /></div>
                    {/* <Test2 /> */}


                    {/* </div> */}
                </div>
            </div>
        </>
    );
}

export { BookSRTC }