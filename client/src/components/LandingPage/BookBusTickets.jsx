import React from 'react';
import { useHistory, Link } from "react-router-dom";



const BookBusTickets = () => {

    // const navigate = useNavigate();
    const history = useHistory();



    const [formData, setFormData] = React.useState({
        leaving: "",
        going: "",
        dateOfJourney: "",
        dateOfReturn: "",
    });

    const [formDetails, setFormDetails] = React.useState([])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }


    // handleSubmit function
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormDetails([...formDetails, formData])
        history.push({
            pathname: "/bus-details",
            state: {
                leaving: formData.leaving,
                going: formData.going
            }
        });



    }


    return (
        <>
            <div className="bg-danger">
                <h2 className="my-4 text-center text-white">Book Bus Tickets</h2>

                {/*Booking Buttons Start */}

                <div className="my-4 text-center">
                    <button
                        className="border border-rounded rounded-pill col-1 h5"
                    >Bus</button>
                    <Link to="/book-train-tickets"><button
                        className="border border-primary bg-white text-black h5 rounded-pill col-1"

                    >Trains</button></Link>
                    <button
                        className="border border-primary bg-white text-black h5 rounded-pill col-1"
                    >Hotels</button>
                    <button
                        className="border border-primary bg-white text-black h5 rounded-pill col-1"
                    >Rentals </button>
                </div>
                {/*Booking Buttons End */}

                {/* Search Box starts */}
                <div>
                    <form
                        className="d-flex container"
                        onSubmit={handleSubmit}
                    >

                        <input
                            onChange={handleChange}
                            name="leaving"
                            type="text"
                            required
                            placeholder="Leaving from" />
                        <input
                            onChange={handleChange}
                            name="going"
                            type="text"
                            placeholder="Going to" />
                        <input
                            onChange={handleChange}
                            name="dateOfJourney"
                            type="date"
                            placeholder="Date of Journey" />
                        <input

                            onChange={handleChange}
                            name="dateOfReturn"
                            type="date"
                            placeholder="Date of Return (Optional)" />
                        <input
                            className="btn btn-success p-4"
                            type="submit"
                            value="Search" />
                    </form>
                </div>

            </div>
        </>
    );
}

export { BookBusTickets }