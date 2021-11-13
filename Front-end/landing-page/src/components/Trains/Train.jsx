// import './App.css';
import { Landing } from './Landing/Landing'
import { Secondlanding } from './secondlanding/Secondlanding';
import { useState } from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
function Train() {
  const [data, setData] = useState([])
  const [flag, setFlag] = useState(false)
  const [sourceTrain, setSourceTrain] = useState("");
  const [destTrain, setDestTrain] = useState("");
  return (
    <div>
      <BrowserRouter>
        {!flag ?
          <Landing setFlag={setFlag} setData={setData} setSourceTrain={setSourceTrain}
            sourceTrain={sourceTrain} destTrain={destTrain}
            setDestTrain={setDestTrain}
          />
          : <Secondlanding data={data}
            sourceTrain={sourceTrain} destTrain={destTrain}
          />}
      </BrowserRouter>
    </div>
  );
}

export { Train };
