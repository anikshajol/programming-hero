import "./App.css";
import Team from "./Team";
import Counter from "./counter";
Counter;

function App() {
  // const [count, setCount] = useState(0);

  // function handleClick() {
  //   alert("button clicked");
  // }

  // function addToFive(num) {
  //   alert(num + 5);
  // }

  return (
    <>
      <Counter></Counter>
      <h1>React Core Concept</h1>
      {/* <button onClick={handleClick}>Click Me</button>
      <button onClick={() => addToFive(5)}>Click Me</button> */}
      <h2>
        <Team></Team>
      </h2>
    </>
  );
}

export default App;
