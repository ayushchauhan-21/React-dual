import { createContext, useContext } from "react";

export const TodoContext = createContext({
    // ab yaha hame jo bhi jiche chahiye hai vo yaha likhenge.
    // like hame todos ko rakhne ke liye and usse delete and modify karne ke liye array le lete hai. jisme todos ko object me store karenge.
    todos: [
        // iss array ko ham empty hi rakhenge but abhi isme todo kesa hona chahiye uske liye ek todo ka structure banate hai.
        {
            id: 1,
            todo: "todo msg",
            completed: false
        }
        // {},{},{} // ese hi ham or bhi todos bana skte hai.
    ],

    //now hamne todos store karne ke liye array to bana liya ab aage ki functionalities likhte hai,
    // and imortant baat ki, context ke andar ham ese jab bhi koi functionalities ki definition hi likhte hai uski body functionality jaha par use ho rahi ho vaha likhte hai. ye only iss contextAPI me hi hai redux, zustend etc me alag hai ye kaam.

    // addTodo me jese hi hame kuch milega to ye function apne kaam karega.
    addTodo: (todo) => {},

    // todo ko update karne ke liye,
    updateTodo: (id, todo) => {}, // isme hame jiss todo ko update karna hai usse pehchanne ke liye uski id and vo todo khud chahiye.

    //todo ko delete karne ke liye,
    deleteTodo: (id) => {}, // yaha todo ko delete karne ke liye only usse identify karke usse delete karna hai jiske liye hame only id hi chahiye.

    // complete hua hai ki nahi uske liye,
    toggleComplete: (id) => {}, // yaha bhi usse identify karne ki need hai isiliye only id hi pass kiya hai.

}) // yaha par ye TodoContext ek object hai isiliye iski initial value ko hamne object rakha hai.


export const useTodo = () => {
    return useContext(TodoContext)
} // i think ye useTodo TodoContext ka context return kar raha hai. isiliye isse banaya hai.

export const TodoProvider = TodoContext.Provider



/**
 * hamne useTodo() hook kis liye banaya hai?
 * 
 * Haan bhai, **tumne jo likha hai vo overall sahi hai**, but **thoda aur precise explanation** de sakte ho. Thoda aur better way me likhne ka try karte hai:  
 * 
 * ---  
 * 
 * ### 🔹 **Explanation of Your Comment:**  
 * Tumne likha:  
 * > *"Yaha par ye `TodoContext` ek object hai isiliye iski initial value ko hamne object rakha hai."*  
 * 
 * ✅ **Correction & Better Explanation:**  
 * Haan, `TodoContext` **ek React context object hai**, jo `createContext()` se ban raha hai.   
 * 🔹 **Initial value ek object isiliye rakhi hai** kyunki **hume ek default structure define karna hai**, jisme:  
 * - **todos ka ek array** ho (jisme har todo ek object hoga).  
 * - **functions ho** jo `todos` ko modify kar sake (jaise `addTodo`, `updateTodo`, etc.).  
 * 
 * 👉 **Yahi reason hai ki initial value ek object rakhi hai, taaki jab bhi koi component `useContext(TodoContext)` se access kare, to usse ek proper structure mile.**  
 * 
 * ---
 * 
 * ### 🔹 **Why We Created `useTodo()` Hook?**  
 * Tumne yeh likha:  
 * > *"i think ye `useTodo` `TodoContext` ka context return kar raha hai. isiliye isse banaya hai."*  
 * 
 * ✅ **Better Explanation:**  
 * Haan, `useTodo()` ka kaam **basically ek shortcut provide karna hai**, taaki har baar `useContext(TodoContext)` likhne ki zaroorat na pade.  
 * 
 * 👨‍💻 **Example:**  
 * Instead of this:  
 * ```jsx
 * const { todos, addTodo } = useContext(TodoContext);
 * ```
 * We can simply write this:  
 * ```jsx
 * const { todos, addTodo } = useTodo();
 * ```
 * 💡 **Shortcut banane ke liye hi hum yeh custom hook banate hain.**  
 * 
 * ---
 * 
 * ### 🔥 **Final Explanation in One Line:**  
 * - **`TodoContext`** ek **React context object hai** jisme **default state (todos + functions) ko ek object ke form me rakha hai**, taaki components ise access kar sake.  
 * - **`useTodo()` hook isliye banaya hai** taki `useContext(TodoContext)` ko baar-baar likhne ki zaroorat na pade, aur direct `useTodo()` likh ke context access ho jaye.  
 * 
 * ✅ **Tumne jo socha, vo almost correct hai!** Bas thoda aur clarity add ki maine. 😎🔥
 */