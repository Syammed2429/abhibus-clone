import React from 'react';
import Slidebarr from './SlideBarr';


const BookSRTC = () => {


    return (
        <>
            <div className="card rounded-0 shadow mt-4 p-4 w-55  col-8 container ">
                <div>
                    <h3>Book SRTC(State Road Transport Corporation) bus tickets at AbhiBus</h3>
                    <div>
                        <ul className="d-flex justify-content-end">
                        </ul>
                    </div>
                    <div > <Slidebarr /></div>



                </div>
            </div>
        </>
    );
}

export { BookSRTC }