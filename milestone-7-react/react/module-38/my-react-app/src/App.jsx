// import React from "react";
import "./App.css";
import Todo from "./Todo";
import Actor from "./Actor";
import Singers from "./singers.";
import BookStore from "./BookStore";
Singers;

function App() {
  const actors = ["sakib", "Raj", "Jasim", "rubel"];

  const books = [
    { id: 1, name: "Physics", price: 68 },
    { id: 2, name: "Accounting", price: 53 },
    { id: 3, name: "Management", price: 33 },
    { id: 4, name: "Biology", price: 433 },
  ];

  const singers = [
    { id: 1, name: "dr. Mahfuzur Rahman", age: 68 },
    { id: 2, name: "Suvrodeb", age: 53 },
    { id: 3, name: "Pritom", age: 33 },
  ];
  return (
    <>
      <h1>Vite + React</h1>
      <Actor name="Anik"></Actor>
      {actors.map((name) => (
        <Actor name={name}></Actor>
      ))}

      <BookStore books={books}></BookStore>

      {singers.map((singer) => (
        <Singers singer={singer}></Singers>
      ))}

      {/* <Person></Person>
      <Device name="laptop"></Device>
      <Device name="mobile" price="1120"></Device>
      <Device></Device> */}
      <Todo task="learn React" isDone={true}></Todo>
      <Todo task="Explore Core Concept" isDone={false}></Todo>
    </>
  );
}

function Device(props) {
  console.log(props);
  let result = (
    <>
      <h2>
        My Device: {props.name} Price:{props.price}" "
      </h2>
    </>
  );

  return result;
}

function Person() {
  const age = 33;
  const money = 20;
  const person = { name: "anik", age: 23 };
  let result = (
    <>
      <h3 className="students">
        I am {person.name} a person with age {age + money}
      </h3>
    </>
  );
  return result;
}

export default App;
