import styles from './Todo.module.css'
import {useState} from "react";

function Todo({text, number, deleteTodo}) {
   const [done, setDone] = useState(false);

   function handleComplete() {
      setDone(!done);
   }


   return (
      <li className={done ? styles.completedTodo : styles.todo}>
         {
            done
               ? <svg onClick={handleComplete} className={styles.completed} width="30" height="30" viewBox="0 0 30 30" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_24_1018)">
                     <rect width="28" height="28" rx="6" fill="#8CD4CB"/>
                     <rect x="1.5" y="1.5" width="25" height="25" rx="4.5" stroke="#33322E" strokeWidth="3"/>
                  </g>
                  <path d="M6 14.1304C7.24162 14.4403 11.0413 16.3974 12.1587 19C13.3439 14.8172 18 6.78155 26 5"
                        stroke="#F9F3E5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                     <filter id="filter0_d_24_1018" x="0" y="0" width="30" height="30" filterUnits="userSpaceOnUse"
                             colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="2" dy="2"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.2 0 0 0 0 0.196078 0 0 0 0 0.180392 0 0 0 1 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_24_1018"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_24_1018" result="shape"/>
                     </filter>
                  </defs>
               </svg>
               : <svg onClick={handleComplete} className={styles.completed} width="30" height="30" viewBox="0 0 30 30" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_24_1017)">
                     <rect x="1.5" y="1.5" width="25" height="25" rx="4.5" fill="#FFF0EE" stroke="#33322E"
                           strokeWidth="3"/>
                  </g>
                  <defs>
                     <filter id="filter0_d_24_1017" x="0" y="0" width="30" height="30" filterUnits="userSpaceOnUse"
                             colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="2" dy="2"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.2 0 0 0 0 0.196078 0 0 0 0 0.180392 0 0 0 1 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_24_1017"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_24_1017" result="shape"/>
                     </filter>
                  </defs>
               </svg>
         }

         {number + 1}. {text}

         <svg onClick={deleteTodo} className={styles.delete} width="30" height="30" viewBox="0 0 30 30" fill="none"
              xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_21_23676)">
               <rect width="28" height="28" rx="6" fill="#F6A89E"/>
               <rect x="1.5" y="1.5" width="25" height="25" rx="4.5" stroke="#33322E" strokeWidth="3"/>
            </g>
            <path d="M7 21C11 14.5 16.5 8 21.5 7" stroke="#F9F3E5" strokeWidth="3" strokeLinecap="round"/>
            <path d="M7.56777 5.99999C9.91402 11 12.914 15.5 21.414 21" stroke="#F9F3E5" strokeWidth="3"
                  strokeLinecap="round"/>
            <defs>
               <filter id="filter0_d_21_23676" x="0" y="0" width="30" height="30" filterUnits="userSpaceOnUse"
                       colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                 result="hardAlpha"/>
                  <feOffset dx="2" dy="2"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.2 0 0 0 0 0.196078 0 0 0 0 0.180392 0 0 0 1 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_21_23676"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_21_23676" result="shape"/>
               </filter>
            </defs>
         </svg>

      </li>
   );
}

export default Todo;