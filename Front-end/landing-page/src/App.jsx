// import { Switch, Route, Link } from "react-router-dom";
import { Switch,Route , Link } from "react-router-dom";
import { DisplayBusDetails } from "./components/LandingPage/DisplayBusData/DisplayBusData";
import { NavBar } from './components/LandingPage/NavBar';
import Pay from "./components/LandingPage/DisplayBusData/PayBus"
function App() {
  return (
    <div>
     
    
        <Route exact path="/bus-details" component={DisplayBusDetails} />
        <Route exact path="/" component={NavBar} />
        <Route exact path="/pay-bus" component={Pay} />


    </div>
  );
}

export default App;
