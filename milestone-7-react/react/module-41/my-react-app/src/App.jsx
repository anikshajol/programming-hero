import { useEffect, useState } from "react";
import "./App.css";
import Watch from "./components/watch/Watch";

function App() {
  // const watches = [
  //   { id: 1, name: "Apple Watch", price: 200 },
  //   { id: 2, name: "Galaxy Watch", price: 100 },
  //   { id: 3, name: "Mi Watch", price: 80 },
  // ];

  // const watches = [
  //   { id: 1, name: "Apple Watch Series 7", price: 399.99 },
  //   { id: 2, name: "Samsung Galaxy Watch 4", price: 249.99 },
  //   { id: 3, name: "Fitbit Versa 3", price: 179.95 },
  //   { id: 4, name: "Garmin Forerunner 945", price: 599.99 },
  //   { id: 5, name: "Fossil Gen 5", price: 249.0 },
  // ];

  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetch("../public/watches.json")
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);

  return (
    <>
      {/* <Sunglass></Sunglass> */}

      {watches.map((watch) => (
        <Watch key={watch.id} watch={watch}></Watch>
      ))}
    </>
  );
}

export default App;
