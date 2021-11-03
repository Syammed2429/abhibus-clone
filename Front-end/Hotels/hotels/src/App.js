
import './App.css';
import Hotel from './Components/Hotel';
import ShowHotel from './Components/ShowHotels';
import { Switch,Route , Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Link to="/"> <Hotel /></Link>
      
       <Link to="/hotels"> <ShowHotel/></Link>

       <Switch>
        <Route path="/" >
          <h1>Hotel Search</h1>
        </Route>
       
        <Route >
        <h1>404  not Found</h1>
        </Route>
       </Switch>
     
    </div>
  );
}

export default App;
