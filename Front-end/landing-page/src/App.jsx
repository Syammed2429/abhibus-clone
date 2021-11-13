// import { Switch, Route, Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { DisplayBusDetails } from "./components/LandingPage/DisplayBusData/DisplayBusData";
import { NavBar } from './components/LandingPage/NavBar';

function App() {
  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="/bus-details" element={<DisplayBusDetails />} />
      </Routes> */}
      <Switch>
        <Route path="/bus-details" component={DisplayBusDetails} />
        <Route path="/" component={NavBar} />
      </Switch>

    </div>
  );
}

export default App;
