import styles from './App.module.css'
import TodoList from "./components/TodoList/TodoList.jsx";
import {useState} from "react";
import TodoForm from "./components/TodoForm/TodoForm.jsx";

function App() {
   const [todos, setTodos] = useState(['Listen to Kanye West new album', 'Go for a run']);

   function addTodo(text) {
      setTodos([...todos, text]);
   }

   function deleteTodo(index) {
      setTodos(todos.filter((item, i) => i !== index))
   }

   return (
      <div className={styles.app}>
         <div className={styles.title}>
            <h1>Things to do</h1>
         </div>
         <div className={styles.form}>
            <TodoForm addTodo={addTodo}/>
         </div>
         <div className={styles.list}>
            {
               todos.length > 0
                  ? (<TodoList todos={todos} deleteTodo={deleteTodo}/>)
                  : (<h2>Write your first case</h2>)
            }
         </div>
      </div>
   )
}

export default App
