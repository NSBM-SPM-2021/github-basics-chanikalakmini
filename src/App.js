import React , {useState }  from "react";
import "./App.css";
//importing Components
import Form from "./Components/form";
import TodoList from "./Components/TodoList";




function App() {
   const [inputText, setInputText] = useState("");
   const [todos, setTodos] = useState([]);
   const [status, setStatus] = useState("all");
  return (
    <div className="App">
      <header>
       <h1>Chani's To do List</h1> 
       </header>
       <Form 
       inputText={inputText}
       todos ={todos} 
       setTodos={setTodos} 
       setInputText={setInputText}
        />
       <TodoList setTodos={setTodos} todos={todos}
       />
    </div>
  );
}

export default App;
