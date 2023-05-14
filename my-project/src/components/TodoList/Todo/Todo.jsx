/* eslint-disable react/prop-types */
import classes from "./Todo.module.css";
export const Todo = ({
  title,
  id,
  onRemoveHandler,
}) => {
  return (
    <li className={classes.box}>
      <p>{title}</p>
      <div>
        <button onClick={() => onRemoveHandler(id)}>Delete</button>
        <button>Edit</button>
      </div>
    </li>
  );
};
