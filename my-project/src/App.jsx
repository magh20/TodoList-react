import classes from "./App.module.css";
import { useState } from "react";
import { TodoList } from "./components/TodoList/TodoList";

function App() {
  const [showTodoList, setShowTodoList] = useState(true);

  const ToggleTodoList = () => {
    setShowTodoList((prevState) => !prevState);
  };

  const btn = (
    <button className={classes.btn} onClick={ToggleTodoList}>
      {showTodoList ? "Hide Todo" : "Show TodoList"}
    </button>
  );

  if (showTodoList) {
    return (
      <div className={classes.container}>
        {btn}
        <TodoList />
      </div>
    );
  } else {
    return (
      <div className={classes.container}>
        {btn}
        <p>***</p>
      </div>
    );
  }
}

export default App;
