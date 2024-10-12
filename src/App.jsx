// import { createElement } from "react";
import { TodoList } from "./TodoList";
import { TodoListClass } from "./TodoListClass";
import { Name } from "./Name";

function App() {
  // return createElement(
  //   "h3",
  //   { id: "5" },
  //   "hello world",
  //   createElement("span", null, "Bye")
  // );
  // return (
  //   <h1 id="5">
  //     Hello World
  //     <span>Bye</span>
  //   </h1>
  // );

  // return createElement("div", { id: "largeDiv", className: "large" }, "hi");
  // return (
  //   <div className="large" id="largeDiv">
  //     <label htmlFor="inputId">
  //       test
  //     </label>
  //     <input id="inputId" type="number" defaultValue={3}></input>
  //   </div>
  // );

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList />
      <TodoListClass />
      <Name />
    </div>
  );
}

export default App;
