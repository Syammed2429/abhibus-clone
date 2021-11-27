import "./App.css";
import Train from "./Componets/jsx/Reantal";
function App() {
  return (
    <div className="App">
      <Train></Train>
    </div>
  );
}
/*
 const [count, setCount] = useState(10); //count is variable & setState is a inbuilt function
  // useState(10)
  const handlecount = (val) => {
    setCount(count + val);
<h1>counter App</h1>
      <h3>Counter:{count}</h3>
      <button
        onClick={() => {
          handlecount(1);
        }}
      >
        add by 1
      </button>
      <button
        disabled={count === 0}
        onClick={() => {
          if (count > 0) handlecount(-1);
        }}
      >
        dec by 1
      </button>
*/ /*


   const [count, setCount] = useState(0);
  const updateCounter = (value) => {
    setCount(count + value);
  };
  return (
    <div>
      <h2>Counter App</h2>
      <h4>Conter:{count}</h4>
      <button
        onClick={() => {
          updateCounter(1);
        }}
      >
        addition
      </button>
      <button
        onClick={() => {
          updateCounter(-1);
        }}
      >
        decreament
      </button>
      <button
        onClick={() => {
          setCount(count * 2);
        }}
      >
        double
      </button>
    </div>
  );
*/
export default App;
