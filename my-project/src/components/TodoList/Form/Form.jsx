/* eslint-disable react/prop-types */
import { useState } from "react";
import classes from "./Form.module.css"

export const Form = ({ onAdd }) => {
    const [value, setValue] = useState("");
    
    const onChangeHandler = (e) => {
      setValue(e.target.value);
    };
  
    const onClickHandler = () => {
      onAdd(value);
      setValue("");
    };
  
    return (
      <div className={classes.search}>
        <input type="text" onChange={onChangeHandler} value={value} placeholder="please enter what you want.." />
        <button onClick={onClickHandler}>Submit</button>
      </div>
    );
}