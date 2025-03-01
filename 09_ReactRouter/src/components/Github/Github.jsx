import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    // yaha per ham useLoaderData() ka ek variable bana kar usme api se aaye data ko store karenge.
    const data = useLoaderData() // now itne lambe Loader ko banane se usko use karne ke process se jyada kuch to nahi but thoda UX better banta hai.
    /* ye comment githubInfoLoader() ki wajah se hai.
    // const [follower, setFollower] = useState([])
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/hiteshchoudhary')
            .then((res) => res.json())
            // .then(data => setFollower(data.followers)) // yaha me kya kar raha hu, ki direct api se jo data mil raha hai usse pehle to JSON me convert karva diya then usko second .then me data(joki parameter hai yaha) ke andar le kar usme se followers extract karke usse setFollower() ke through set karne ki koshi kar raha hu.
            // ye pehle work nahi kiya but abhi kar raha hai. but hitesh ne sahi kiya hai api ka pura data hi ek state me store karva ke usme se followers ko extract kar rahe hai. vo thi sahi aproch hai.
            // apni aproch me ham ek time per ek hi data extract kar skte hai.
            // let suppose hame api ke data me se image chahiye to uske liye hame ek variable(state) alag se banana padega. then uske liye alag se proccess karni padegi joki sahi nahi hogi memory and big scal par.
            // isiliye hitesh sir ki aproch sahi hai abhi baad me dekha jayega.
            .then(data => setData(data))
    }, [])
    */

    return (
        <>
            <div className=' text-center my-4 bg-gray-500 text-white p-4 text-3xl'>
                {/* Github Followers: {follower} */}
                Github Followers: {data.followers}
            </div>
            <div className=' my-3 bg-cyan-400'>
                <img className=' p-4' src={data.avatar_url} alt="git photo" width={300} />
            </div>
        </>
    )
}

export default Github


//-------------------------------------------------------------------------------------------------------------------//
//                                                         Loader
//-------------------------------------------------------------------------------------------------------------------//
// dekho hame abi Loader ke baare me dekhna hai to uske liye ek chhoti si problem ko samjhte hai ki,
// yaha par pehle component load ho raha hai then useEffect() API ko call karta hai, then hame data milta hai, then data proccess ho kar hame display me milta hai.
// iss se thoda lag bhi aa skta hai ki component pehle load ho jaye and data baad me mile to vo data thooooooodaaaa sa late show hoga iss se UX par asar ho skta hai.
// isiliye loader kaam me aata hai.
// loader ko ham ek attribute bhi keh skte hai kyoki vo ek loading funciton ko call karke pehle api se data fetch karva leta hai.
// then jab bhi ham component ko load karvate hai to loader pehel loading function ko call karke data fetch karva leta hai then component load hota hai.
// isiliye hame data uss component ke sath hi show hota hai.

// ab loader ke liye hame ek funciton banana padta hai joki API ko call karke hame data proccess karke deta hai.
// so ham ye finction isi file bhi bana skte hai but sahi practice hai ki hame ye function alag file me bana kar component ke jese use karna chaihye.
// but yaha ham issi file me ye loader function bana lete hai. then usse expoert bhi karva denge.

// ab ye function likhne se pehel upper ham api ko call kare hai usse comment kar dete hai.
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')

    // yaha ham iss reponse ko directly return kar skte hai.
    // and yaha per dekhne vali baat ye bhi hai ki ham jo return kar rahe hai vo ek pronmise hai
    return response.json()
}

//-------------------------------------------------------------------------------------------------------------------//
//                                              Loader By AI Expaination:
//-------------------------------------------------------------------------------------------------------------------//
/**
 * ## **🔹 Loader in React Router - Deep Explanation**
React Router v6.4 se **loaders** introduce kiye gaye jo data fetching ko aur **efficient aur structured** banate hain. Pehle hame `useEffect()` aur `useState()` ka use karna padta tha data fetch karne ke liye, lekin loaders automatically **server se data fetch karke usko route ke saath inject** kar dete hain.  

---

# **🔹 Loader Kya Hota Hai?**
Loader ek **function** hota hai jo kisi particular route ke liye **data fetch karta hai** aur jab tak data load ho raha hota hai tab tak ek **loading state** dikhata hai.  
Jab data fetch ho jata hai, tab vo **route ke element me inject ho jata hai** aur `useLoaderData()` hook se access kiya jata hai.  

### **✅ Loader se kya fayda hai?**
1. **Faster Rendering:** Loader pehle data fetch kar leta hai, toh component render hone ke baad `useEffect` ki tarah extra re-render nahi hota.  
2. **Better UX:** Jab tak data load nahi hota, tab tak ek proper **loading state** dikhai ja sakti hai.  
3. **Server-Side Friendly:** Loader **server-side rendering (SSR) aur static generation ke saath bhi kaam kar sakta hai.**  

---

# **🔹 Loader Kaam Kaise Karta Hai?**
1. **Ek loader function define karo** jo API ya koi bhi data fetch kare.  
2. **Us loader function ko kisi route me attach karo.**  
3. **Component me `useLoaderData()` ka use karke data access karo.**  

## **✅ Step-by-Step Example:**
### **🔹 1. Loader Function Banayein (API Call)**
```js
const userLoader = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};
```
🔹 Ye function ek API call karega aur **data return karega**. Agar koi error aayi toh vo **handle** ho jayegi.

---

### **🔹 2. Route me Loader Attach Karein**
```js
import { createBrowserRouter } from "react-router-dom";
import Users from "./Users";

const router = createBrowserRouter([
  {
    path: "/users",
    element: <Users />,
    loader: userLoader, // Loader attach kiya yaha
  }
]);

export default router;
```
🔹 **Yaha loader attach kar diya `userLoader` ko `/users` route ke saath.**  
Jab bhi `/users` open hoga, toh **React Router pehle loader function run karega**, aur jab data load ho jayega, tab `Users` component ko render karega.

---

### **🔹 3. Component me `useLoaderData()` se Data Lena**
```js
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData(); // Loader se data fetch kiya
  
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
```
🔹 **Ab `Users` component me `useLoaderData()` ka use karke directly data access kar sakte hain!**  
**⚡ Pehle se hi data fetch ho chuka hoga, isliye `useEffect()` aur `useState()` ki zaroorat nahi!**  

---

# **🔹 Loader ke Saath Error Handling**
Agar API call fail ho jaye toh **Error Boundary** ka use karke error show kar sakte hain.  
```js
const userLoader = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Response("Failed to fetch", { status: response.status });
  }
  return response.json();
};
```
Ab **Error Component** likho:
```js
const ErrorComponent = () => {
  return <h2 style={{ color: "red" }}>Failed to load data</h2>;
};
```
Aur route me error element add kar do:
```js
const router = createBrowserRouter([
  {
    path: "/users",
    element: <Users />,
    loader: userLoader,
    errorElement: <ErrorComponent />, // Agar error aayi toh yeh dikhega
  }
]);
```
🔹 **Agar API call fail ho gayi, toh "Failed to load data" dikhayega instead of crashing!**  

---

# **🔹 Full Code Example (With Loader & Error Handling)**
```js
import { createBrowserRouter, RouterProvider, useLoaderData } from "react-router-dom";

// ✅ Loader function
const userLoader = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Response("Failed to fetch", { status: response.status });
  }
  return response.json();
};

// ✅ Error Component
const ErrorComponent = () => {
  return <h2 style={{ color: "red" }}>Failed to load data</h2>;
};

// ✅ Users Component
const Users = () => {
  const users = useLoaderData(); // Loader se data fetch kiya
  
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

// ✅ Routes with Loader
const router = createBrowserRouter([
  {
    path: "/users",
    element: <Users />,
    loader: userLoader,
    errorElement: <ErrorComponent />, // Error handling
  }
]);

// ✅ App Component
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
```
### **🎯 Benefits of Loader in this Example:**
✅ **`useEffect` aur `useState` ka koi jhanjhat nahi!**  
✅ **Faster rendering - component load hone se pehle hi data ready hai!**  
✅ **Error handling easy ho gaya!**  

---

# **🔹 Loader vs `useEffect()`**
| Feature | `useEffect()` | Loader |
|---------|-------------|--------|
| **Data Fetching** | Component render hone ke baad hota hai | Component se pehle hota hai |
| **Re-rendering** | Pehle empty state hoti hai, phir data aata hai | Pehle data load hota hai, fir component render hota hai |
| **Performance** | Extra render lagta hai | Fast rendering hoti hai |
| **Error Handling** | Manual handle karna padta hai | `errorElement` automatically handle karta hai |

---

# **🔹 Conclusion**
🔹 **Loader ek advanced feature hai jo React Router me efficient data fetching ke liye use hota hai.**  
🔹 **Ye traditional `useEffect` aur `useState` se better hai kyuki ye pehle hi data fetch kar leta hai aur phir component render karta hai.**  
🔹 **Error handling bhi easy ho jata hai aur fast performance milti hai.**  

⚡ **Agar tu React Router v6.4+ use kar raha hai, toh `useEffect` ki jagah loader use karne ka soch sakta hai!** 🚀🔥
 */