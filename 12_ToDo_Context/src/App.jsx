import { useEffect, useState } from 'react'
import { TodoProvider } from './context/ToDoContext'
import { TodoForm, TodoItem } from './components'
// import './App.css' // isski vajah se extra margin add ho rhi thi isiliye isse hata diya.

function App() {

  // todo ko store karne ke liye ham ek statebana lete hai, jisse todo and uske UI ko change kar paye.
  const [ todos, setTodos ] = useState([]) // yaha par hamare pass sare todos hai. ab addTodo() ke andar hamne ek ek karke todo pass kiya hai

  // jo bhi function ham use karenge uski body yaha likhenge. jo bhi naam definition me likhe hai vahi name same likhna hai.

  // ab dekho yaha par todo ko kaam karne ke liye hamne todo chahiye to usse parameter me pass karenge.
  const addTodo = (todo) => { // yaha par hamare pass ek todo hai.
    // setTodos((prevTodo) => [todo, ...prevTodo]) // yaha par ham todo ko array me aage ya piche kahi bhi add kar skte hai. but iss tarah se ham add nahi kar skte hai kyuki todo ek object hai to hame usse create bhi to karna padega na.
    // isiliye niche sahi tarike se dekhte hai
    setTodos((prev) => [
      {
        id: Date.now(),
        ...todo /**har todo object ke andar id dene ke liye date.now ka use kiya hai jiss se may be har bar unique id generate hogi.*/
      }, ...prev]) // yaha par ham todo ko array me aage ya piche kahi bhi add kar skte hai.
  }
  // dekho iss addTodo ke andar pehle to hamne ek new todo liya hai means if user koi new data(todo ya fir task) enter karega to vo iss function ke through add honge.
  // is function me hamne jo todo liye hai usse ham todos array(joki hamne upper banaya hai useState ka use karke) ke andar add kar rahe hai, using setTodos() method ke jariye.
  // iss setTodo() method me hamne pehle to purane if koi todos(means tasks) pehle se add honge to unko liya hai using "prev" parameter, and ham har bar unn previous todos ke aage ek new todo ko add kar rahe hai.
  // new todo ko pehle to ese samjho ki vo ek msg hai means jobhi task hame complete karna hai vo hai ek string format me, to usse to hamne direct input field me se jese mila hai vesa hi parameter me liya hai and then usko vese hi new todo ke object me daal diya hai but, uske sath hamne ek id bhi add kari hai joki hamne pata nahi kyu Date.now() ka use karke add kari hai.
  // to ye addTodo() function ki functinality ki samjh hai apni bhasha me.

  // now ham updateTodo() function banate hai.
  // todo ko update karne ke liye hame uski id and vo todo khud chahiye hogi isiliye usse parameter me lete hai.
  const updateTodo = (id, todo) => {
    // to yaha sabse pehle to hame todos array jisme sare todo store hai usme se hame di gayi id vale todo ko find karna padega. to hame uske liye todos array par ek loop lagani padegi. then uss id vale todo ko find karke use update karke firse todos array me set karna padega.
    // to hame ye sab kaam setTodos() function ke andar hi karna padega.
    // yaha par "prev" hi hamara todos array hai to ussi par hame map lagana padega.
    // map() ke andar ka "prevTodo" hamra ek ek individual todo hai (means todo object hai).
    // and yaha par iss bar hamne jo "todo" parameter me liya hai na vo ek edit vala todo ka msg hai. addTodo() ka "todo" parameter ek new todo tha.
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
    // yaha par chatGPT se ek question puchna ki ham iss function me ye jo todo paass kar rahe hai to ek todo task ka msg hai ya fir todo ka object hai {id,todo,complete} vala jesa hame context me banaya tha.


  }

  // now ham delete ki functionality bana lete hai.
  // delete karne ke liye bhi hame jiss todo ko delete karna hai uski id chahiye hogi, bas uss id se hi ham usse find karne delete kar denge.
  // then usse bhi hame todos array me update karna padega. isiliye ye kaam bhi setTodos ke andar karna padega.
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => (prevTodo.id !== id)))
    // upper vali line ka mtlb ye hua ki jo jo value hame di gayi id se match na ho usse new array me daal do. means upper vali condition ko jo jo value true kare unn values ko new array me daal do and jo value condition ko false kare uss value ko mat add karo.
  }
  // delete ki functionality kuch esi hogi ke ham purane vale todos array ko pura hi drop kar denge means usse hata kar uski sari values ko ek new array me daal denge but jo id hame di gayi hogi vo id vali value ko hata kar and uss new array ko hi todos array esa set kar denge.


  // now ham complete vali functionality bana lete hai.
  // uske liye hame uss todo ki id chahiye hogi jisse check karna hoga. then hame uss todo ke object ke andar jaa kar uske "complete" property ki value ko change kar dena hoga means if true hogi to false and false hogi to true.
  const toggleComplete = (id) => {
    // yaha bhi prev(means ye to todos array hai) uske upper hame loop lagani padgi means yaha ham map() lagayenge.
    // uske andar ki ek ek value means todo ki id ko hame di gayi id se match karke dekhenge id match huyi to uss todo object ke andar ke complete property ki change kar denge.
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo)))

    // to yaha par esa hua ki hamne todos array(here prev) ko pakda then uss par loop laga kar(here map()) uske andar ke sare todos(here prevTodo) ki id ko ek ek karke(here prevTodo.id) hame di gayi todo ki id se match kiya.
    // then if match ho jaye to uss todo object ke andar ki saari properties ki same rehne diya bas jo completed property hai uski value jo hame mili hogi uss se ulti karke ussi me completed ke andar fir se assign kar diya.

  }

  // now hamne context ki saari functionalities ko bana liya hai.

  // now ab ek baat hai ki jese hi hamari aap load ho to ho skta hai ki usme kuch todo's pehle se hi ho, to vo toso's ko page load hote hi uske sath me hi load karva de esi bhi koi functionality honi chahiye.
  // to page load hote hi uske loading ke sath kuch or bhi load karvane ke liye ham react me useEffect() hook ka use karte hai.
  // means useEffect() page load hote hi localStorage se query kar skta hai and if pehle koi todo ho uss storage me to usse page loading ke time par hi load karva ke apne todos array me add kar skta hai.

  useEffect(() => {
    // react me ham localStorage direct access kar skte hai.
    // to yaha hame pehle, if local storage me koi todo hai to usse load karvana hai to usse get() karte hai.

    // localStorage.getItem("todos") // getItem(key) : getItem() method ke andar hame koi item chahiye to uska key pass karna padta hai. halaki yaha par hamn abhi koi key set nahi kiya hai fir bhi ham jo key set karenge usse abhi pass kar dete hai.
    // now ye jo upper hamne line likhi hai vo hame items get karke de dengi, but getItem() sari item ko string format me get karke deta hai to hame usse apne hisab se dusre format me convert karna padta hai.

    // now ham upper vale data ko JSON format me conver karke use karenge.
    const todos = JSON.parse(localStorage.getItem("todos"))
    // now ye hamne data ko local storage so get kar liya,
    // ab usse local storage me set kar dete hai.
    // but local storage me set karne se pehle ham check kar lete hai ki kya hamare pass todos aaye bhi hai ya nahi and if koi data aaya hai to uski length 0 se badi to hai na.
    // mtlb ham yaha par ye dekh rahe hai ki page load hone se pehel or bhi to koi todo's todos array me the ki nahi, if the to unn todo's ko todos array me set kar do and nahi the to vo yaha tak pohoch hi nahi payenge.
    if(todos && todos.length > 0){
      setTodos(todos)
    }

  }, [])


  // now ye to pehle se pade todo's ke baare me kaam ho gaya but ab ham ye chahte hai ki jese hi ham koi todo likhe to vo bhi direct localStorage me add ho jaye.
  // to uske liye bhi ham useEffect ka use kar skte hai and uske dependency me todos ko daal denge to if todos me koi change hoga to vo useEffect ke through baar baar localStorage me add hota jayega.
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)) // so yaha par ye jo setItem() method hai ye values ko hamesha string me hi leta hai, but hamare pass to array(todos) hai jiss ki values ko hame store karvana hai, 
    // to uske liye bhi ek method hoti hai jese hamne string ko JSON me convert kiya na upper(getItem() ke andar) vese hi ham kisi bhi type ko string me convert kar skte hai joki upper setItem() ke andar likha hai.
  }, [todos])



  return (
    // hamne yaha par Todo ka context wrap kiya hai and uss context ki konsi konsi value ko use kar skte hai vo "value" ke through bataya hai. 
    // now hamne ye jo methods ko yaha import kiya hai unki definition to hamne context me banayi thi ab yaha usko body likh denge. 
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos : ye localStorage me strore hota hai usse clear kar dena.</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {/* yaha par ham ek ek Todo ko call kar rahe hai means TodoItem ko call karenge. jiske liye ham todo par loop lagayenge. */}
            {todos.map((todo) => (
              <div key={todo.id} // yaha per hamne ye key iss liye likhi hai kyuki loop me har baar yahi div repeat hoga and hame har div ko unique banata hai iss liye hamne isme key lagayi hai. and if ham key nahi denge to performance boohot kharab ho jayegi.
              // and key me ham array ki index a use nahi karte hai vo bohot rare case me karte hai jab koi option na ho.
              // array yaha iss liye bata raha hu kyuki hamra 'todos' ek array hi hai.
                   className='w-full'
              >
                <TodoItem todo={todo}/>
              </div>
            ))} 
            {/* yaha hamne map() ke andar vale callback ke andar curly braces '{}' ke jagah par roung brakets '()' lagaye hai, kyuki if ham "{}" ye lagate to hame return statement likhna padega but if ham parantheses "()" lagate hai to ye auto raturn karta hai iss liye hame return statement likhne ki jaroorat nahi hoti hai. */}

          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
