import React from 'react'
import { useSelector } from 'react-redux'
// now ham value ko delete karne ke liya delete ka button bhi denge and uss button ki kuch functionality bhi hogi and iska mtlb hua ki ham kuch action perform karenge and hame jante hai ki action ko dispatch bhi karna pdega. to iske liye hame dispatch ko import karna padega.
import { useDispatch } from 'react-redux'
// to hamne dipatch ko bhi import karva liya hai, and if dispatch hai to uska koi reducer bhi hoga. to usse bhi hame import karvana padega.
import { removeTodo } from '../features/todo/todoSlice'

// now ye sab to ho gaya but ab ham todos kaha se layenge vo dekhna padega.
// jiske liye hame selector use karna pdega.

function Todos() {
    // so ham todos ko yaha par layenge selector hi help se, useSelector ek method hai and hame iss method ke andar state ka access molta hai.
    const todos = useSelector(state => state.todos) // yaha par hame jo state mil raha hai vo initialState hai todoSlice ke andar vala, and todos uss state ke andar ka ek array hai.

    // now ham kuch dispatch bhi karenge to usse bhi ek variable me store kar lete hai.
    const dispatch = useDispatch()

    /**
     * todo ko shaw karke delete ki button ka ye logic hai joki niche achhe se css ke sath likha hai joki <div>Todos</div> ke niche aayega.
     * {
                // isme ham ek loop ka logic likhenge
                todos.map((todo) => {
                    // iss loop me ham ek <li> ke andar todo ke text ki value means todo msg likhenge, but hame yaha har, loop se generated <li> ko ek unique id means key deni padegi.
                    <li key={todo.id}>
                        {todo.text}
                        // now hame iss todo me ek detele button bhi lagani padegi 
                        <button 
                            // onClick={dispatch(removeTodo(todo.id))} // yaha per hame onclick me dispatch() ko call karvana padega. and usme hame action pass karna padega.but is hamne dispatch ko iss tarah dispatch(removeTodo(todo.id)) karke call kiya tho ye dispatch function yahi par execute ho jayega.
                            // so issi se bachne ke liye hame ek call back use karna pdega.
                            onClick={() => dispatch(removeTodo(todo.id))}
                        > X </button>
                    </li>
                })
        }
     */
    return (
        <>
    <div>Todos</div>
    <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className='text-white'>{todo.text}</div>
            <button
             onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </>
    )
}

export default Todos
