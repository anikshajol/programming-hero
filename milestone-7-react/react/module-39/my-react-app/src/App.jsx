import "./App.css";
import Friends from "./Friends";
import Posts from "./Posts";
import Team from "./Team";
import Counter from "./counter";
import Users from "./users";
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
      {/* <Counter></Counter> */}
      <h1>React Core Concept</h1>
      {/* <button onClick={handleClick}>Click Me</button>
      <button onClick={() => addToFive(5)}>Click Me</button> */}
      <Users></Users>
      {/* <Friends></Friends> */}
      <Posts></Posts>
      {/* <h2>
        <Team></Team>
      </h2> */}

      
    </>
  );
}

export default App;
