import styles from './TodoList.module.css'
import Todo from "../Todo/Todo.jsx";

function TodoList({todos, deleteTodo}) {
   return (
      <ul role='list'>
         {todos.map((item, i) => <Todo key={i} number={i} deleteTodo={() => deleteTodo(i)} text={item} />)}
      </ul>
   );
}

export default TodoList;