 import React from 'react';

 const Todo = ({ text, todo, todos, setTodos  }) => {
     //Events
     const deleteHandler = () => {
         setTodos(todos.filter((el) => el.id !== todo.id ));
     };
     const completeHandler = () => {
         setTodos(todos.map(item => {
             if(item.id === todo.id){
                 return {
                     ...item, completed: !item.completed
                 };
                }
                 return item;
             
           })
           );
         };

     return(
         <tr>
             <td style={{backgroundColor:"white",color:"black"}}><li className={`todo-item ${todo.completed? "completed" : ""}`} >{ text.toUpperCase() }</li></td>
             <td>
             <button onClick={completeHandler } className="complete-btn"> 
                    <i className="fas fa-check"></i>
                </button>
                <button onClick={deleteHandler} className="trash-btn">
                    <i className="fas fa-trash"></i>
                </button>
             </td>
         </tr>
         
        //  <div clasName="todo">
        //     <div style={{display: "inline-block"}}>
        //     <li className={'todo-item ${todo.completed? "completed" : ""}'} >{ text }</li>
        //     </div>
        //     <div style={{display: "inline-block"}}>
        //         <button onClick={completeHandler } className="complete-btn"> 
        //             <i className="fas fa-check"></i>
        //         </button>
        //         <button onClick={deleteHandler} className="trash-btn">
        //             <i className="fas fa-trash"></i>
        //         </button>
        //     </div>
        // </div>
         ); 
     };

 export default Todo;