import { useState } from "react";
import { Form } from "./Form/Form";
import { Todo } from "./Todo/Todo";
import classes from "./TodoList.module.css";

const todos = [
  { id: 1, title: "test title 1" },
  { id: 2, title: "test title 2" },
  { id: 3, title: "test title 3" },
  { id: 4, title: "test title 4" }
];

export const TodoList = () => {
  const [todoList, setTodoList] = useState(todos);

  const onAddHandler = (title) => {
    setTodoList([...todoList, { id: Date.now(), title}]);
  };

  const onRemoveHandler = (id) => {
    const newArray = todoList.filter((item) => item.id !== id);
    setTodoList(newArray);
  };

  return (
    <div>
      <ul className={classes.list}>
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            onRemoveHandler={onRemoveHandler}
          />
        ))}
      </ul>
      <Form onAdd={onAddHandler} />
    </div>
  );
};
