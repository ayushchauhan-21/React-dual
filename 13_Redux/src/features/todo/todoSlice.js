// yaha hamen iss file ka name todoSlice rakha hai vo iss liye ki sab ko pata chale ki rtk(redux-tool-kit) ka use hua hai.

// slice create karne ke liye hame ek hi method chahiye, but hame yaha unique id's bhi generate karvani hai to ham "nonoid" ko bhi import karvayenge.
import { createSlice, nanoid } from "@reduxjs/toolkit";


// now itna sab karke hame store ki initialState banani padegi and usme kuch rakhna hoga.
// initial state ko ham array, object kuch bhi rakh skte hai, yaha per ham usse object rakh rahe hai.
// Initial state ek object hai jisme todos array hai
// First todo example ke liye add kiya hai
const initialState = { 
    todos: [{ id: 1, text: "todo msg"}]
}


// now ab ham ek slice means reducer bana lete hai. and usse export bhi kar denge kyuki hame usse aage use karna pad skta hai.
// slice ham createSlice() method ka use karke create kar skte hai. and isme hame kuch rakhna pdta hai, mostof object hi pass karne padenge.
// createSlice se reducer aur actions ek saath generate hote hai
export const todoSlice = createSlice({
    name: 'todo', // ye hamne slice ka name rakh diya hai. and ye property dena jaroori hai. // Redux dev tools mein dikhne ke liye unique name
    initialState, // ye dena bhi jaroori hai // Default state (khali bhi rakh sakte the [])
    /**
     * Kya fayda hota hai?
     *   First render mein crash nahi hota - Components ko initial state mil jata hai
     *   Structure clear rehta hai - Pata chalta hai ki store mein kya-kya data hoga
     *   Default values set kar sakte ho - Jaise isLoading: false ya empty array []
     *   Initial state na dene par Redux thodi der confuse ho jayega ki data ka structure kaisa hoga! 
     */
    reducers: {
        // Har reducer ka logic yahan define hota hai
        // Context API se different: functionality bhi yahin likhte hai
        // reducer ke andar ham kuch properties and uske function likhte hai jiss se data ka exchange sahi se ho ske.
        // jese ki yaha par ham ek "addTodo" property banayenge and uska ek function bhi likhenge.
        // yaha context api se ek chij different hoti hai context api me ham function ki only definition likhte the and uski functionality kahi or likhte the but redux me ham reducers ke andar hi functionality likh dete hai.
        // noe inn function ke andar hame hamesha 2 chijo ka access milega 1) state and 2) action. means parameter me pass karenge.
        addTodo: (state, action) => {
            // yaha par hame todo add karne ke liye todo ka access to chahiye hi hai to uske liye ham ek todo bana lete hai.
            const todo = {
                id: nanoid(), // ab dekho yaha per hamne nanoid() ye unique id generate kar di hai.
                // now todo ke andar ka msg kese lenge vo dekhte hai. to iske liye ham action ka use karenge, action ke andar jo payload object hai usme se uski text property me hame ye todo ka msg mil jayega.
                // text: action.payload.text // niche vali line and ye line dono same hi hai.
                text: action.payload // payload ka pura detail readme.md me likh hai
            }
            // ab yaha par hamne ye todo banaya hai but ye state ke andar nahi gaya hai.
            // mtlb initial state me to hamne ek todo already rakha hai now ab koi or bhi todo aayega vo bhi iss format se hote hue uss initial state vale object ke andar vale "todos" array me store hota jayega
            // to uske liye hame jo bhi new todo dispatch hoke yaha aayenge uko ham uss todos ke array me push karte jayenge.
            // to yaha par hame pehle uss state ko padkna padega. "state.todos" se the uske andar hame jo bhi value hame milegi usse push karna padega state.todos.push(value)
            // i think iss syntax ka mtlb yahi hota hoga ki state means initialState, todos means initial state ke andar ki property, and uske andar value ko push kar do
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            // ab yah apar ham kya kar rahe hai ki state ko hi padk rahe hai, uss state ke andar se todos ko pakd rahe hai and usse usssi me kuch change kar ke replace kar de rahe hai, like count = count + 1.
            // bas yaha per ham filter() ka use kar raha hai.
            // yaha par ham filter ka use iss liye kar rahe hai kyuki, sabse pehle to hame pata hai ki filter ek array return karta hai apna kaam karke,and iss array me vahi elements hote hai joki filter ki filtering me pass ho gaye ho. means filter me di gayi condition ko satisfy kar gaye ho.
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            // yaha filter ka execution likhte hai, filter me todos array ke elements milenge filter ko jisse hamne todo bol diya hai. and then usme ye dondition lagayi hai ki todo(means har element) ki id nahi milni chhiye action.payload se. means jis element ki id, action.payload de nahi match hogi vo filter ke new arrya me jayega.
            // yaha par e soch raha hu ki todo.id vo action.payload means pure todo object(jisme id and text dono property hogi, like {id: 1, text: 'task1'}) se compare ho raha hai but esa nahi hai vo automatically action.payload.id se hi comparision kar raha hai.
            // means (todo.id !== action.payload.id) === (todo.id !== action.payload) thik hai.
            // dekho yaha per mene upper jo bhi likha hai vo galat likha hai action.payload me hamne yaha par only id hi milti hai koi msg nahi kyuki hame to id dekh kar remove kar dena hai to usme msh ka koi kaam nahi hai. isiliey upper vali comment thodi galat hai.
            // Filter har todo ko check karta hai:
            // - Jis todo ki ID !== action.payload (direct ID) hogi, wahi naye array mein jayegi
            // - Example: dispatch(removeTodo("123")) se ID="123" wala todo hatega
            // - NOTE: action.payload pure object nahi, balki direct ID hai
        },
        updateTodo: (state, action) => {
            // iske liye hame pehle action me se jo new data mil raha hai usse store karvana padega.
            const {id, newMsg} = action.payload // yaha hamne payload me se id and msg ko destructure kiya hai.
            // now hamne new data ko store to karva liye hai but usse kaha set karna hai uske liye jo id mili hai uska matching object bhi find karna padga. uske liye ham array ki fild() ka use karenge, joki hame only vahi object return karega jo match hoga.
            // yaha mujhe dekhna hai ki iss state ke andar kya hai?
            console.log(state)
            const matchTodo = state.todos.find((todo) => todo.id === id)
            if (matchTodo) {
                matchTodo.text = newMsg // Direct update (Immer.js ki wajah se safe hai)
            }
        }
    }
})

// ab yaha par only ye todoSlice ko export karne se kaam nahi chalega hame saari functionalities bhi individually export karni hogi.
// inko export iss liye kiya kyuki ye direct hamare component me kaam aayenge
export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

// itna sab hamne bana liya but iske baare me hamne jo store banaya tha usse to pata hi nahi hai to, and bina inn reducers ke baare me jaane store apne andar ke data ko modify nahi karne dega
// iss liye hame inke baare me store ko batana padega. and inn reducer ko store me register bhi karna padega. tabhi store ko saare reducer ke baare me pata chalega. and usse sare reducer ka list milega.
export default todoSlice.reducer  // now hame yahi store me import bhi karvana padega.