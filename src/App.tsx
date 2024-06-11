import { useEffect, useState } from "react";
import Header from "./components/header";
import Home from "./components/home";
import "./App.css";

function App() {
  const [count, setCount] = useState({
    first: "",
    second: "",
  });

  const initialTodos = [
    {
      id: 1,
      title: "Todo 1",
      complete: false,
    },
    {
      id: 2,
      title: "Todo 2",
      complete: false,
    },
  ];
  const callApi = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    const data = await response.json();
    console.log(data);
    setCount({ ...count, first: data.title });
  };
  useEffect(() => {
    callApi();
  }, []);
  const changeFunction = (e: any) => {
    // console.log(e.target.value);
    const value = e.target.value;
    const name = e.target.name;
    setCount((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
    <Home />
      {/* <Header title="Todo List" />
      <input
        type="text"
        name="first"
        value={count.first}
        onChange={changeFunction}
      />
      <input
        type="text"
        name="second"
        value={count.second}
        onChange={changeFunction}
      />
      <button onClick={() => console.log(count)}>Log</button>
      {initialTodos.map((todo) => (
        <div key={todo.id}>
          <label>{todo.title}</label>
        </div>
      ))} */}
    </>
  );
}

export default App;
