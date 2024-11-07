import logo from './logo.svg';
import { useState } from 'react';
import 'react-notifications/lib/notifications.css';  
import {NotificationContainer, NotificationManager} from 'react-notifications';
import './App.css';

function App() {

  let [todoList, setTodoList]=useState([]) 

  let saveToDoList=(event)=>{
      event.preventDefault();
      let todoName=event.target.todo.value.trim();     // Values are comming from input field
                                                // event==submit, target==form, todo==formName, value==input field value

        if(todoName === '') { 
            NotificationManager.warning("Please write something!");
        }
        else if(!( todoList.includes(todoName))){     // checking if the task already present or not in todoList array!
          
            let finalTodo=[...todoList, todoName];    // keep previousList + new todo
            setTodoList(finalTodo);
        }
        else{   
            NotificationManager.info("Already exists !");      
        }
  }

  let list=todoList.map( (value, index)=>{
      return(
        <TodoListItems val={value} indexNumber={index}  todoList={todoList}
                         setTodoList={setTodoList} key={index}
        />
      )
  })
  return (
    <div className="App">
      <NotificationContainer/>
        <h1>ToDo List</h1>
        <form onSubmit={saveToDoList}>
            <input type="text" name="todo"/> <button>Add</button>
        </form>

       <div className='outerDiv'>
            <ul>
                {list}
            </ul>
       </div>
    </div>
  );
}

function TodoListItems({val,indexNumber,todoList,setTodoList}){

    let [status, setStatus]=useState(false);      // For line-through the text & remove line-through
  
    let deleteRow=()=>{
        
          let finalData=todoList.filter( (v, i)=> i != indexNumber )
          setTodoList(finalData )   // After deleting the data, updating Todo list by calling setTodoList function
   
    }

    let checkStatus=()=>{
      setStatus(!status)
    }
    return(
      <li className={status?'completedTodo':''} onClick={checkStatus}>{indexNumber+1} : {val}<span onClick={deleteRow}>&times;</span></li>
    )
}

export default App;
