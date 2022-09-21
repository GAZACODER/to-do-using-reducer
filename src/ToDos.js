
import React, { useReducer, useState } from "react";
 
function reducer(state, action) {
  switch (action.type) {
    case "add-todo":
      return {
        todos: [...state.todos, { text: action.text, completed: false }],
      };
    case "toggle-todo":
      return {
        todos: state.todos.map((t, idx) =>
          idx === action.idx ? { ...t, completed: !t.completed } : t
        ),
      };
      case "delete-todo":
      return {
        todos: state.todos.filter((t, idx) => idx !== action.idx),
      };
    default:
      return state;
  }
}
 
const ToDos = () => {
    const [text, setText] = useState();
  const [{ todos }, dispatch] = useReducer(reducer, {
    todos: []
  });
  
  const handleChange = (e) => {
    setText(e.target.value)
  }
 const onSubmit=(e) => {
          e.preventDefault();
          dispatch({ type: "add-todo", text });
          setText("");
  }
  
  return (
    <div>
     
        <input value={text} onChange={handleChange} />
        <button onClick={onSubmit}>add</button>
     
       {todos.map((t, idx) => (
        <div
          key={t.idx}
          id={t.idx}
           style={{textDecoration: t.completed ? "line-through" : ""}}>
          
           <input type="checkbox" value="idx" onClick={() => dispatch({ type: "toggle-todo", idx })} />

          {t.text}
          <button onClick={() => dispatch({type:"delete-todo",idx})}>x</button>

        </div>
      ))}
    </div>
  );
};
 
export default ToDos;
