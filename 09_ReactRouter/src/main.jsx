// isme main.jsx, component flder pura, layout.jsx itne hi kaam ke hai.
// Github file me loader bhi sikha hai.
// packages me tailwind, react-router-dom or kuch ho to dekh lena.

// in this file:
// react router


//-------------------------------------------------------------------------------------------------//
//                                          react router
//-------------------------------------------------------------------------------------------------//
/**
 * ### **📌 What is a Route?**
 * A **route** is simply a **path (URL)** that points to a specific page or component in a web application.  
 * For example:  
 * 
 * | **URL (Route)**        | **Page / Component**         |
 * |------------------------|-----------------------------|
 * | `/`                    | Home Page                   |
 * | `/about`               | About Page                  |
 * | `/contact`             | Contact Page                |
 * 
 * So, whenever a user visits **"/about"**, the **About Page** should be displayed.
 * 
 * ---
 * 
 * ### **📌 What is a Router?**
 * A **router** is a mechanism that **manages routes** in a web application.  
 * It ensures that when the user goes to **a specific route (URL), the correct component or page is displayed.**
 * 
 * 🛑 **Problem Without a Router in React**  
 * By default, React is a **Single Page Application (SPA)**, meaning it does **not reload the page** when moving between different sections.  
 * 👉 If we use only **`<a href="/about">`**, the whole page reloads, which is **not ideal** for smooth navigation.
 * 
 * 🚀 **Solution: React Router**  
 * React Router **prevents page reloads** and handles navigation using **components** instead of regular `<a>` tags.
 * 
 * ---
 * 
 * ### **📌 How to Use React Router?**
 * First, install React Router:  
 * ```bash
 * npm install react-router-dom
 * ```
 * Then, in your **React App**, set up the router:
 * 
 * #### **1️⃣ Basic Routing Example**
 * ```javascript
 * import React from "react";
 * import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 * import Home from "./Home";
 * import About from "./About";
 * 
 * function App() {
 *   return (
 *     <Router>
 *       <Routes>
 *         <Route path="/" element={<Home />} />  
 *         <Route path="/about" element={<About />} />
 *       </Routes>
 *     </Router>
 *   );
 * }
 * 
 * export default App;
 * ```
 * ### 🔍 **Explanation**
 * - `<Router>`: Wraps the entire app to enable routing.
 * - `<Routes>`: Groups all routes.
 * - `<Route path="/" element={<Home />}>`: When the user visits `/`, it loads the `Home` component.
 * - `<Route path="/about" element={<About />}>`: When the user visits `/about`, it loads the `About` component.
 * 
 * ---
 * 
 * ### **📌 Navigating Between Pages Without Page Reload**
 * Instead of `<a href="...">`, we use **`<Link>`** from `react-router-dom`.
 * 
 * ```javascript
 * import { Link } from "react-router-dom";
 * 
 * function Navbar() {
 *   return (
 *     <nav>
 *       <Link to="/">Home</Link>
 *       <Link to="/about">About</Link>
 *     </nav>
 *   );
 * }
 * ```
 * 🔹 Now clicking on these links **doesn't reload the page** but changes the content dynamically! 🔥
 * 
 * ---
 * 
 * ### **📌 Conclusion**
 * - A **Route** is a URL that maps to a specific page or component.
 * - A **Router** is a system that **manages routes** and enables navigation **without reloading the page**.
 * - **React Router** helps us create **Single Page Applications (SPAs)** efficiently.
 * 
 * 💡 **React Router = Navigation without full page reloads!** 🚀
 */


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/ContactUs.jsx'
import UserDynamicData from './components/UserData/UserDynamicData.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'


// const router = createBrowserRouter([ // iss method ke andar aham ek array pass karte hai.
//   // iss array ke andar further aur objects hote hai.
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path:'', // ye first vala path empty dene se ye '/' ke baad isme(child array ka pehla element me) jo component likha hai vo render hoga, and if iss first element ke path me ham 'Home' likh denge to '/' load hone par kuch nahi render hoga usme bus hamne jo layout me likh raha hai vahi load hoga means yaha header and footer. layout ke outlet me koi component paas nahi hoga. and vo empty rahega.
//         element: <Home />
//       },
//       {
//         // path: "", // yaha kuch nahi likha to 404 error dega. kyoki usse pata hi nahi hai ye kya hai and kaha hai, but usse ye pata hai ki issme kya dikhana hai.
//         path:"about", // ye vahi path hai joki ham upper URL me likhenge.
//         element: <About />
//       },
//       {
//         path:'contact',
//         element: <Contact />
//       }
//     ]
//   }

// ])
// yaha upper hamne jo nesting kari hai route ki usse ham alga tarike se bhi kar skte hai 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} >
        {/** ham kisi bhi route ke further nested route bhi bana skte hai, 
       * example ke liye ham about me aur bhi route banate hai.
       * nested route banane ke liye hamne Route tag ka hi use karna hoga. 
       * and about ko self closing se hataa kar pairing vala tag banana hoga. 
       * 
       * 
       * 
       * dekho ye abhi kaam to nahi kar raha hai but baad me dekhna kyu kaam nahi kar raha hai.*/}
        <Route path='user/:userData' element={<UserDynamicData />} />
      </Route>

      <Route path='contact' element={<Contact />} />
      {/** 
       * yaha ham ek dynamic data joki sidha url se ham le ske vesa kuch banate hai. 
       * uske liye hame path ke andar to ham joki name dena chahe vo de skte hai but uske baad hame ek "/" forwoed slash then uske baat ":" colon then uske baad jo bhi ham likhenge ussi se ham component ke andar data ko handle kar payenge.
       * baaki ki info component me hai.
       */}
      <Route path='user/:userData' element={<UserDynamicData />} />
      {/**
       *  now ab ham browser ki url me jo bhi "user/" ke baad likhenge vo print ho kar hame mil jayega.  
       *  so iss tarah ham url se data le skte hai.
       */}

      {/* now ham git hub ka component set karenge. */}
      {/* <Route path='github' element={<Github/>} />  */}
      {/** upper vala and niche vale me ek hi fark hai ki niche vale me loader attribute hai. isiliye upper vali line ko comment kiya hai. */}
      <Route
        path='github'
        element={<Github />}
        loader={githubInfoLoader} // yaha per ye loader lagane ke baad jis component ke liye isse use kar rahe hai usme isse useLoaderData() hook ka use karke iss loader ke data ko use bhi karna hota hai.
      />

    </Route>
  )
)

/**
 * problem:
 * {
 *     path: '/',
 *     element: <Layout />,
 *     children: [
 *       {
 *         path:'home',
 *         element: <Home />
 *       },
 *       {
 *         // path: "",
 *         path:"about",
 *         element: <About />
 *       }
 *     ]
 *   }
 *     
 * yaha issue ye tha ki children ke andar first element me ham path ke andar 'home' likh rahe thi '/' per header and footer ke alava kuch nahi sikh raha hai.
 * 
 * Solution:
 * 
 * Bhai, ye issue **nested routing** ka hai. Samjho ki jab tu `createBrowserRouter()` me `children` array use karta hai, toh React Router automatically parent (`Layout` component) ke andar child routes ko render karta hai.  
 * 
 * ## **🔹 Jo tu likh raha hai uska matlab kya hai?**
 * ```js
 * {
 *   path: '/',
 *   element: <Layout />,
 *   children: [
 *     {
 *       path: '',  // Yaha empty string diya hai
 *       element: <Home />
 *     },
 *     {
 *       path: "about",
 *       element: <About />
 *     }
 *   ]
 * }
 * ```
 * 🔹 **Ye keh raha hai ki jab bhi `/` URL par jaoge, toh `Layout` render hoga**  
 * 🔹 **Aur `children` ke andar `path: ''` ka matlab hai ki default child route `Home` component hai**  
 * 
 * ---
 * 
 * ## **🔹 Tera Issue Kya Hai?**
 * Jab tu **first time `/` open karta hai**, toh `Layout` component load hota hai, **but** uske andar jo child routes hai, unko render hone ke  * liye `<Outlet />` chahiye.  
 * Agar `<Outlet />` nahi diya hoga `Layout` component me, toh `Home` component render nahi hoga.
 * 
 * ### **💡 Solution: `Layout.jsx` me `<Outlet />` add karna hoga!**
 * ```jsx
 * import { Outlet } from "react-router-dom";
 * 
 * const Layout = () => {
 *   return (
 *     <div>
 *       <h1>Website Layout</h1>
 *       <Outlet /> {* Yaha Outlet add karna zaroori hai /}
 *       </div>
 *     );
 *   };
 *   
 *   export default Layout;
 *   ```
 *   ☝️ **Ab jab bhi `/` load hoga, toh `Layout` ke andar `Outlet` ke jagah `Home` component render ho jayega!**  
 *   
 *   ---
 *   
 *   ## **🔹 Agar `path: 'home'` likh raha hai toh issue kyu aa raha hai?**
 *   Agar tu `path: 'home'` likh raha hai, toh iska matlab hai ki **`/home` pe jaane par `Home` component dikhega, `/` pe nahi.**  
 *   
 *   Agar `/` pe first load me `Home` dikhana chahte ho, toh ya toh **empty path `path: ""` rakho** (aur `Outlet` use karo), ya fir ek **index  * route** use karo.  
 *   
 *   ### ✅ **Best Solution: `index: true` use karna**
 *   ```js
 *   {
 *     path: '/',
 *     element: <Layout />,
 *     children: [
 *       {
 *         index: true,  // Ye automatically "/" par render hoga
 *         element: <Home />
 *       },
 *       {
 *         path: "about",
 *         element: <About />
 *       }
 *     ]
 *   }
 *   ```
 *   **💡 `index: true` ka matlab hai ki ye default route hai, jab `/` visit hoga toh yahi render hoga.**  
 *   Ye better hai instead of `path: ""` because ye explicitly batata hai ki ye **default child route hai.**  
 *   
 *   ---
 *   
 *   ## **🔹 Final Conclusion**
 *   ✅ **Agar Home first load pe chahiye toh:**
 *   - `Layout.jsx` me `<Outlet />` add karo  
 *   - `path: ''` ki jagah `index: true` use karo  
 *   
 *   **✅ Correct Code:**
 *   ```js
 *   const router = createBrowserRouter([
 *     {
 *       path: '/',
 *       element: <Layout />,
 *       children: [
 *         {
 *           index: true, // Ye by default "/" par load hoga
 *           element: <Home />
 *         },
 *         {
 *           path: "about",
 *           element: <About />
 *         }
 *       ]
 *     }
 *   ]);
 *   ```
 *   Ab **first load pe bhi `Home` dikhega, aur URL me manually `/home` likhne ki zaroorat nahi padegi!** 🚀🔥
 */


// yaha hamne jo RouterProvider ke andar router attribute ke andar router variable le rakha hai usse upper banate hai.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

//--------------------------------------------------------------------------------------------------------------------//
//                                               Router Provider
//--------------------------------------------------------------------------------------------------------------------//
/**
 * Bhai, tujhse kitni baar bola hai ki mujhe Hinglish me samjhao, toh chalo abhi pura reply Hinglish me likh raha hoon. Dhyan se padh, sab clear ho jayega! 😎  
 * 
 * ---
 * 
 * ## **`RouterProvider` Kya Hai? Kyu Use Karte Hai? Kaise Kaam Karta Hai?**  
 * 
 * ### **1️⃣ `RouterProvider` Kya Hai?**
 * `RouterProvider` ek React Router ka component hai jo **poore app me navigation aur routing handle** karta hai. Matlab ki, ye ensure karta hai ki **URL ke hisaab se kaunsa component render hoga**.
 * 
 * ✅ Iske bina React app me **page navigation proper nahi hoga**.  
 * ✅ Ye **route matching, navigation aur UI rendering** handle karta hai.  
 * ✅ **React Router v6.4+** ke saath introduce hua hai.  
 * 
 * ---
 * 
 * ## **2️⃣ `RouterProvider` Kyu Use Karte Hai?**
 * 🔹 **Centralized Route Management** → Sare routes ek hi jagah define ho jate hai.  
 * 🔹 **Automatic Route Matching** → Jo URL match karega, wahi component render hoga.  
 * 🔹 **Data Fetching (Loader API)** → Component render hone se pehle data fetch kar sakte hai.  
 * 🔹 **Error Handling** → Agar koi route match nahi hota, toh ek error page dikhaya ja sakta hai.  
 * 
 * ---
 * 
 * ## **3️⃣ Basic Example of `RouterProvider`**
 * Tujhe React Router install karna padega agar pehle nahi kiya hai:
 * 
 * ```sh
 * npm install react-router-dom
 * ```
 * 
 * Ab ek basic example dekh:  
 * 
 * ```jsx
 * import { createBrowserRouter, RouterProvider } from "react-router-dom";
 * import Home from "./Home";
 * import About from "./About";
 * import NotFound from "./NotFound";
 * 
 * const router = createBrowserRouter([
 *   { path: "/", element: <Home /> },
 *   { path: "/about", element: <About /> },
 *   { path: "*", element: <NotFound /> }, // Agar koi route nahi mila toh ye chalega
 * ]);
 * 
 * function App() {
 *   return <RouterProvider router={router} />;
 * }
 * 
 * export default App;
 * ```
 * ### 🔹 **Isme Kya Ho Raha Hai?**
 * 1. **`createBrowserRouter()`** → Ye ek router object banata hai jo sare routes store karta hai.  
 * 2. **`RouterProvider`** → Ye router ko app ke andar provide karta hai.  
 * 3. **Agar user `/` pe jata hai toh `Home` component show hoga, `/about` pe `About` show hoga.**  
 * 4. **Agar koi random URL likh diya (`/xyz`), toh `NotFound` component chalega.**  
 * 
 * ---
 * 
 * ## **4️⃣ `RouterProvider` ke andar `router` attribute kyu likhte hai?**
 * `RouterProvider` ko **ek router object chahiye jo bataye ki kaunse routes hai**.  
 * 
 * ### **Example:**
 * ```jsx
 * const router = createBrowserRouter([...]); // Routes define kiye
 * <RouterProvider router={router} />; // RouterProvider ko diya
 * ```
 * **Agar ye router pass nahi karenge, toh routing work nahi karegi!**  
 * 
 * ---
 * 
 * ## **5️⃣ Types of Routers**
 * `RouterProvider` ke andar jo `router` dete hai, wo 3 tarike se bana sakte hai:
 * 
 * ### **1️⃣ `createBrowserRouter()` (Recommended)**
 * - **Modern web apps ke liye best hai.**
 * - **History API** ka use karta hai (clean URLs, no `#`).
 * - **SEO friendly** hota hai.
 * 
 * ```jsx
 * const router = createBrowserRouter([
 *   { path: "/", element: <Home /> },
 * ]);
 * ```
 * 🔹 **URL Example:** `https://example.com/about`
 * 
 * ---
 * 
 * ### **2️⃣ `createHashRouter()` (For Old Browsers)**
 * - **URL me `#` aata hai**, example: `https://example.com/#/about`
 * - **Agar server side URL handling nahi hai toh useful hota hai.**
 * - **SPA (Single Page Application) ke liye thoda outdated method hai.**
 * 
 * ```jsx
 * const router = createHashRouter([
 *   { path: "/", element: <Home /> },
 * ]);
 * ```
 * 🔹 **URL Example:** `https://example.com/#/about`
 * 
 * ---
 * 
 * ### **3️⃣ `createMemoryRouter()` (For Testing)**
 * - **History ko memory me store karta hai, browser me URL nahi dikhta.**
 * - **Testing ya server-side rendering (SSR) me use hota hai.**
 * 
 * ```jsx
 * const router = createMemoryRouter([
 *   { path: "/", element: <Home /> },
 * ]);
 * ```
 * 
 * ---
 * 
 * ## **6️⃣ Advanced Features of `RouterProvider`**
 * ### **1️⃣ Nested Routes (Parent-Child Routing)**
 * Agar ek parent route ke andar multiple child pages hai, toh nested routing ka use karte hai.
 * 
 * ```jsx
 * const router = createBrowserRouter([
 *   {
 *     path: "/",
 *     element: <Layout />, 
 *     children: [
 *       { path: "home", element: <Home /> },
 *       { path: "about", element: <About /> },
 *     ],
 *   },
 * ]);
 * ```
 * 🔹 **Advantage:** `Layout` component fix rahega, sirf `Home` ya `About` change hoga.
 * 
 * ---
 * 
 * ### **2️⃣ Error Handling with `errorElement`**
 * Agar koi galat URL enter kare ya koi error ho, toh ek error component show kar sakte hai.
 * 
 * ```jsx
 * const router = createBrowserRouter([
 *   {
 *     path: "/",
 *     element: <Home />,
 *     errorElement: <ErrorPage />, // Error handling
 *   },
 * ]);
 * ```
 * 
 * ---
 * 
 * ### **3️⃣ Data Fetching with `loader`**
 * Agar hame component load hone se pehle **API se data fetch** karna hai, toh `loader` ka use kar sakte hai.
 * 
 * ```jsx
 * const router = createBrowserRouter([
 *   {
 *     path: "/user/:id",
 *     element: <UserProfile />,
 *     loader: async ({ params }) => {
 *       return fetch(`https://api.example.com/user/${params.id}`).then((res) => res.json());
 *     },
 *   },
 * ]);
 * ```
 * 🔹 **Advantage:** Pehle data fetch hoga, fir component render hoga.
 * 
 * ---
 * 
 * ## **7️⃣ Summary**
 * | Feature | Description |
 * |---------|-------------|
 * | `RouterProvider` | Poore app ke liye routing manage karta hai. |
 * | `router` attribute | RouterProvider ko batata hai ki kaunse routes hai. |
 * | `createBrowserRouter` | Clean URLs use karta hai (best for modern apps). |
 * | `createHashRouter` | URLs me `#` lagta hai (old browsers ke liye). |
 * | `createMemoryRouter` | URL browser me nahi dikhta (testing ke liye best). |
 * | `loader` | Component render hone se pehle data fetch kar sakta hai. |
 * | `errorElement` | Agar koi galat URL hai toh error component show hota hai. |
 * 
 * ---
 * 
 * ## **8️⃣ Final Example with Everything**
 * Ye ek **full-fledged example** hai jo nested routes, error handling aur data fetching sab cover karta hai:
 * 
 * ```jsx
 * import { createBrowserRouter, RouterProvider } from "react-router-dom";
 * import Layout from "./Layout";
 * import Home from "./Home";
 * import About from "./About";
 * import UserProfile from "./UserProfile";
 * import ErrorPage from "./ErrorPage";
 * 
 * const router = createBrowserRouter([
 *   {
 *     path: "/",
 *     element: <Layout />,
 *     children: [
 *       { path: "home", element: <Home /> },
 *       { path: "about", element: <About /> },
 *       {
 *         path: "user/:id",
 *         element: <UserProfile />,
 *         loader: async ({ params }) => {
 *           return fetch(`https://api.example.com/user/${params.id}`).then((res) => res.json());
 *         },
 *       },
 *     ],
 *     errorElement: <ErrorPage />,
 *   },
 * ]);
 * 
 * function App() {
 *   return <RouterProvider router={router} />;
 * }
 * 
 * export default App;
 * ```
 * 
 * ---
 * 
 * ## **Conclusion**
 * ✅ `RouterProvider` se **routing easy** ho jati hai.  
 * ✅ `router` attribute me ek **router object** dena padta hai.  
 * ✅ Nested routes, error handling, aur data fetching bhi easy ho jata hai.  
 * ✅ Ye **modern approach** hai React apps me routing handle karne ka.  
 * 
 * Agar ab bhi koi doubt hai toh pooch le bhai! 🚀
 */