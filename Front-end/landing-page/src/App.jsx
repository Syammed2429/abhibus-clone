// import { Switch, Route, Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Hotel from "./components/Hotel/Hotel";
// import { Hotels } from "./components/Hotel/Hotels";
import Pay from "./components/Hotel/Payment";
import ShowHotel from "./components/Hotel/ShowHotels";
import ShowRoom from "./components/Hotel/ShowRoom";
import { BookBusTickets } from "./components/LandingPage/BookBusTickets";
import { DisplayBusDetails } from "./components/LandingPage/DisplayBusData/DisplayBusData";
import PayBus from "./components/LandingPage/DisplayBusData/PayBus";
import { NavBar } from './components/LandingPage/NavBar';
import { Train } from "./components/Trains/Train";


function App() {
  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="/bus-details" element={<DisplayBusDetails />} />
      </Routes> */}
      <Switch>
        <Route exact path="/book-train-tickets" component={Train} />
        <Route exact path="/bus-details" component={DisplayBusDetails} />
        <Route exact path="/hotels" component={Hotel} />
        <Route exact path="/showHotels" component={ShowHotel} />
        <Route exact path="/showRooms" component={ShowRoom} />
        <Route exact path="/payments" component={Pay} />
        <Route exact path="/pay-bus" component={PayBus} />

        <Route exact path="/" component={NavBar} />
        <Route exact path="/book-bus-tickets" component={BookBusTickets} />
      </Switch>

      {/* <PayBus /> */}
    </div>

  );
}

export default App;