import React, { useState } from 'react'
import { useTodo } from '../context/ToDoContext';

function TodoForm() {
    
    // yaha par hamne individual todo ke liye state banayi hai.
    const [todo, setTodo] = useState("") 

    // yaha par ham addTodo ka use karenge to usse bhi lana padega. and ussi ke liye to hamne useTodo() hook banaya hai. 
    const {addTodo} = useTodo()

    // i think ye method ko button ke upper lagane ke liye bana rahe hai. jisse click hone per ye method call ho and iske and likha hua kaam ho jaye.
    const add = (e) => {
        // pehle to iss method ka hamne default behaviour stop kiya hai.
        e.preventDefault()

        // iske baad hame ye dekhte hai ki hamre pass todo hai bhi ya nahi.
        if(!todo) return // means if hamre pass koi todo nahi hua to sidha hi return ho jao.

        // and if todo ke andar koi value hai to ham addTodo() ko call kar lete hai and usme jo bhi pass karna hai usse pass kar dete hai.
        // now ham addTodo ke andar direct ese kuch pass nahi kar skte hai.
        // addTodo(todo) // ye galat hoga, kyuki iss method ka use ham todos array me todo add karne ke liye kar rahe hai and pehle to ham array ke andar uski old value ke sath new value ko sprad operator ki help se add kar rahe hai, sath me jo todo ki value hai joki ek object hai uske andar bhi ham values ko sprad operator ki help se add kar rahe hai.
        // isiliye to hame iss addTodo method me ek object ko pass karna padega kyuki har todo ek object hai.
        // addTodo({id: Date.now(), todo: todo, completed: false}) // iss line me ham id ko faltu me hi bhej rahe hai kyuki definition me hamne id define kar rakhi hai and issi tarike se define kar rakhi hai.
        // addTodo({todo: todo, completed: false}) // yaha per hamne "todo: todo" likha hai jiski jagah par ham only ek baar "todo" likh skte hai, kyuki new syntext ke hisab se if object ke property ka name and value same hi ho to ek hi baar likhne se kaam ho jata hai.
        addTodo({todo, completed: false})

        setTodo("") // ab itna sab kuch ho jane ke baad setTodo ko empty kyu kar diya hai ye chatGPT se puchna.
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo} // iss input ke hamne ye line likh kar todo ke sath connet kiya hai // ye jo hamne value attribute likh ke kiya hai iss hi viring or vire up karna bolte hai.
                onChange={(e) => setTodo(e.target.value)} // mtlb isme jo bhi value likhenge vo todo me jayegi.
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

