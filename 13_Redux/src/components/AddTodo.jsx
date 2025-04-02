import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {
    // yaha hamne ye state iss liye kyuki hame input ko wire up karna tha and usme values bhi show karni thi.
    const [input, setInput] = useState('')

    // now ham dispatch ko create karte hai uske liye useDispatch hook ko import karvana padta hai
    const dispatch = useDispatch()

    // now hamne submit par jo handler banaya hai usse bhi create kar lete hai.
    const addTodoHandler = (e) => {
        e.preventDefault()


        // now ham dispatch ka use karenge
        // dispatch ka working kuch esa hai ki dispatch reducer ka use karte hue store me value add karta hai.
        // now hame dispatch ke andar reducer ko call karna padta hai.
        dispatch(addTodo(input)) // yaha addTodo ke andar hamekuch bhejna padega joki hamne usse create karte time vaha par likha hoga, and hamne vaha par action.payload likha tha means yaha se input ka msg pass hoga and ye vaha par action.payload ke andar se hote hue todo object ke text property me store ho jayega.

        // now hamne user se input le liya joki input me store hoga and usse addTodo me bhej bhi diya but iss sabke baad bhi input field me vo likha rahe ye sahi nahi hai isiliye hame uss input field ko clean bhi karna padega.
        // to input state me firse kuch set karne ke liye hame setInput ka use karna pdega,
        setInput('')
    }
    // so hamne iss tarh se todo ko add kar diya hai baaki ka kal dekhenge
    //dusre din, yaha tak to hamne useDispatch() tak kaam kar diya.
    // means redux ke jo char main topic the, 1)store, 2)reducer, 3)dispatch, 4)selector to inme se hamne 3 kaam kar diya hai now hame last kaam karna hai. selector banana.
    // joki ham todos.jsx ke andar todo ko list karenge tab banayenge.

    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
                Add Todo
            </button>
        </form>
    )
}

export default AddTodo
