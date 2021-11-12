import React from 'react';
import { useLocation, Routes, Route, BrowserRouter, Link } from "react-router-dom";


const DisplayBusDetails = () => {
    const { search } = useLocation();
    const params = React.useMemo(() => new URLSearchParams(search), [search]);


    return (
        <>
            <div>
                {/* </BrowserRouter> */}
                <h1>Hello</h1>
                {/* {console.log('busData:', busData)} */}
                <div>
                    <h1>Leaving: {params.get("leaving")} </h1>
                </div>
            </div>
            {/* <NavBar /> */}
        </>
    );
}


export { DisplayBusDetails }