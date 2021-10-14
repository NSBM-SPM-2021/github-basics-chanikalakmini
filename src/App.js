import React , {useState,useEffect }  from "react";
import "./App.css";
//importing Components
import Form from "./Components/form";
import TodoList from "./Components/TodoList";




function App() {
  //State stuff
   const [inputText, setInputText] = useState("");
   const [todos, setTodos] = useState([]);
   const [status, setStatus] = useState("all");
   const [filteredTodos, setFilteredTodos] = useState([]);

   //use EFFECT
   useEffect(() => {
     filterHandler();
     // eslint-disable-next-line
   }, [todos, status]);

  //  //use Effect
  //  useEffect() => {
  //    filterHandler();
  //  }, [todos, status]);

   //functions
   const filterHandler = () => {
     switch(status){
       case 'completed':
         setFilteredTodos(todos.filter((todo)  => todo.completed === true));
         break;
       case"uncompleted":
        setFilteredTodos(todos.filter((todo)  => todo.completed === false));
        break;
       default:
          setFilteredTodos(todos);
          break;

      }
   };
   //save to Local
   // eslint-disable-next-line
   const saveLocalTodos = () => {
     localStorage.setItem("todos", JSON.stringify(todos));
   };
   // eslint-disable-next-line
   const getLocalTodos = () => {
     if(localStorage.getItem('todos') ===null) {
       localStorage.setItem('todos', JSON.stringify([]));
      } else {
        let todolocal = JSON.parse(localStorage.getItem("todos"));
        setTodos(todolocal);
      }

   };

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
       setStatus={setStatus}
      />
       <TodoList
         setTodos={setTodos}
         filteredTodos={filteredTodos}
        todos={todos}
       />
    </div>
  );
}

export default App;
