
import './App.css';
import Hotel from './Components/Hotel';
import ShowHotel from './Components/ShowHotels';
import { Switch,Route , Link } from "react-router-dom";
import Pay from "./Components/Payment"
import ShowRoom from './Components/ShowRoom';



function App() {
  return (
    <div className="App">
       {/* <Link to="/"> <Hotel /></Link>
      
       <Link to="/Showhotels"> <ShowHotel/></Link> */}

       <Switch>
        <Route exact path="/hotels" component={Hotel} />
          <Route exact path="/showHotels" component={ShowHotel}/>
          <Route exact path="/showRooms" component={ShowRoom}/>
          <Route exact path="/payments" component={Pay}/>
       
        <Route >
        <h1>404  not Found</h1>
        </Route>
       </Switch>
       {/* <Pay type="oak"  checkin={ new Date()} checkout={new Date(1)} guest={"1 Adult 2 Children 1Room"}/> */}
    </div>
  );
}

export default App;
