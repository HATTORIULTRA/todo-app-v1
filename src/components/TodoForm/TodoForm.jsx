import styles from './TodoForm.module.css'
import {useState} from "react";

function TodoForm({addTodo}) {
   const [text, setText] = useState('');

   function handleFormSubmit(e) {
      e.preventDefault();
      if(text.length > 0) {
         addTodo(text);
         setText('')
      }
   }

   return (
      <form onSubmit={handleFormSubmit} className={styles.form}>
         <input onChange={(e)=> setText(e.target.value)} className={styles.input}
                type="text"
                value={text}
                placeholder='Enter ToDo...'/>
         <button className={styles.button}
                 type='submit'>
            Create ToDo
         </button>
      </form>
   );
}

export default TodoForm;