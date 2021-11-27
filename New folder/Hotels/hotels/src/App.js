
import './App.css';
import Hotel from './Components/Hotel';
import ShowHotel from './Components/ShowHotels';
import { Switch,Route , Link } from "react-router-dom";
import Pay from "./Components/Payment"
import ShowRoom from './Components/ShowRoom';



function App() {
  return (
    <div className="App">
      

       <Switch>
        <Route exact path="/hotels" component={Hotel} />
          <Route exact path="/showHotels" component={ShowHotel}/>
          <Route exact path="/showRooms" component={ShowRoom}/>
          <Route exact path="/hotelpayments" component={Pay}/>
       
        <Route >
        <h1>404  not Found</h1>
        </Route>
       </Switch>
      
    </div>
  );
}

export default App;
