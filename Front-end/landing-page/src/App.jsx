import { Routes, Route } from "react-router-dom";
import { DisplayBusDetails } from "./components/LandingPage/DisplayBusData/DisplayBusData";
import { NavBar } from './components/LandingPage/NavBar';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="/bus-details" element={<DisplayBusDetails />} />
      </Routes>


    </div>
  );
}

export default App;
