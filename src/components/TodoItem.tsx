import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ text: string; onRemoveTodo: () => void }> = ({
  text,
  onRemoveTodo,
}) => {
  return (
    <div>
      <li className={classes.item} onClick={onRemoveTodo}>
        {text}
      </li>
    </div>
  );
};
export default TodoItem;
