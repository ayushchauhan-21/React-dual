import React, { useState } from 'react'
import { useTodo } from '../context/ToDoContext';

function TodoItem({ todo }) {

    const [isTodoEditable, setIsTodoEditable] = useState(false)

    // dusri ek aur state banate hai joki todo ke andar kya msg hai vo batayegi.
    const [todoMsg, setTodoMsg] = useState(todo.todo) // iska ye mtlb hua ki jo bhi hamara todo hai uske andar ka todo. kyuki pehla todo ek object hai and uske hi andar todo name se property hai jiske andar todo ka msg pada hua hai.


    // yaha hamne todo kaitem kesa dikhega vo code likha hai.
    // now usme hamne banayi functionality set karni hai.
    // to yaha sabse pehle hame Todo ka context leke ana padega.
    // then usme se jitni bhi functionality hame chahiye vo likhni padegi.
    const {updateTodo, deleteTodo, toggleComplete} = useTodo()

    // now upper ek state bana lete joki todo editable hai ki nahi bo bayega.

    const editTodo = () => {
        updateTodo(todo.id, {...todo, todo: todoMsg})
        setIsTodoEditable(false)
    }

    const toggleCompleted =  () => {
        toggleComplete(todo.id )
    }
    

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
