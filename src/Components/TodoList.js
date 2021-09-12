 import React from "react";
//Import Components
import Todo from "./Todo";

 const TodoList = ({ todos, setTodos , filteredTodos  }) => {
     return (
        <div className="todo-container">
        <ul className="todo-list">
          <table>
          {todos.map((todo) => (
            <Todo 
               setTodos={setTodos} 
               todos={todos} 
               key={todo.id} 
               todo={todo}
               text={todo.text} 
               />
            ))}
          </table>
        </ul>
      </div>
     );
 };

 export default TodoList;
