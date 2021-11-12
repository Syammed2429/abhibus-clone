import './App.css';
import {Landing} from './components/Landing/Landing'
import { Secondlanding } from './components/secondlanding/Secondlanding';
import {useState} from 'react'
function App() {
  const [data,setData] = useState([])
  const [flag,setFlag] = useState(false)
  const [sourceTrain,setSourceTrain] = useState("");
  const [destTrain,setDestTrain] = useState("");
  return (
    <div className="App">
      {!flag ?
      <Landing setFlag={setFlag} setData={setData} setSourceTrain={setSourceTrain}
      sourceTrain={sourceTrain} destTrain={destTrain}
      setDestTrain={setDestTrain}
      />
      :<Secondlanding data={data}
      sourceTrain={sourceTrain} destTrain={destTrain}
      />}
    </div>
  );
}

export default App;
