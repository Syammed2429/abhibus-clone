
import './App.css';
import Hotel from './Components/Hotel';
import ShowHotel from './Components/ShowHotels';
import { Switch,Route , Link } from "react-router-dom";
import Pay from "./Components/Payment"
function App() {
  return (
    <div className="App">
       <Link to="/"> <Hotel /></Link>
      
       <Link to="/Showhotels"> <ShowHotel/></Link>

       <Switch>
        <Route path="/" >
          <h1>Hotel Search</h1>
        </Route>
       
        <Route >
        <h1>404  not Found</h1>
        </Route>
       </Switch>
       {/* <Pay type="oak"  checkin={ new Date()} checkout={new Date(1)} guest={"1 Adult 2 Children 1Room"}/> */}
    </div>
  );
}

export default App;
