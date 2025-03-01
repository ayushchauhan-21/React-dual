import React from 'react';
import { Link, NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to='/'
                                    className={({ isActive }) => // yaha par ye className ke andar hamne callback isliye likh hua hai ki ham i
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-orange-700' : 'text-gray-700'} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                /**yaha upper hamne className ke andar callBack isliye add kiya hai kyuki ham classes ko dynamically add and remove kar ske.
                                 * yaha par isActive ek property hai joki hame batata hai ki iss navlink ke andar ki link active hai ki nahi ye batata hai isActive. same iske hi jese ek hota hai isDarkMode joki batata hai ki darkmode hai ki nahi. kyuki iska use karke ham expression ke andar conditions laga skte hai.
                                 * `className` ke andar **callback function nahi likhte**, lekin **JavaScript expressions (ternary operator, template literals, logical operators, etc.)** likh sakte hain jo dynamically classes add/remove kar sakte hain.  
                                 * ---
                                 * 
                                 * ### **1️⃣ Static Classes (Simple)**
                                 * ```jsx
                                 * <div className="bg-red-500 text-white p-4">Hello</div>
                                 * ```
                                 * Yaha className **fixed** hai, koi dynamic logic nahi hai.
                                 * 
                                 * ---
                                 * 
                                 * ### **2️⃣ Dynamic Classes Using Ternary Operator (`? :`)**
                                 * ```jsx
                                 * <div className={isActive ? "bg-green-500" : "bg-red-500"}>
                                 *   Dynamic Class
                                 * </div>
                                 * ```
                                 * 🔹 **If `isActive` true hai** → `"bg-green-500"`  
                                 * 🔹 **If `isActive` false hai** → `"bg-red-500"`
                                 * 
                                 * ---
                                 * 
                                 * ### **3️⃣ Multiple Dynamic Classes Using Template Literals**
                                 * ```jsx
                                 * <div className={`p-4 ${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`}>
                                 *   Dynamic Theme
                                 * </div>
                                 * ```
                                 * 🔹 **If `isDarkMode` true** → `"bg-black text-white"`  
                                 * 🔹 **If `isDarkMode` false** → `"bg-white text-black"`
                                 * 
                                 * ---
                                 * 
                                 * ### **4️⃣ Dynamic Classes Using Logical Operators (`&&`)**
                                 * ```jsx
                                 * <div className={`p-4 ${isActive && "border border-blue-500"}`}>
                                 *   Conditional Border
                                 * </div>
                                 * ```
                                 * 🔹 **If `isActive` true hai**, to `"border border-blue-500"` class add hogi.  
                                 * 🔹 **If `isActive` false hai**, to kuch nahi hoga.
                                 * 
                                 * ---
                                 * 
                                 * ### **5️⃣ Using `clsx` or `classnames` Library (Better Approach)**
                                 * Agar bohot saari dynamic classes handle karni ho, to `"clsx"` ya `"classnames"` library use karna better hota hai.
                                 * 
                                 * **Install karo:**
                                 * ```bash
                                 * npm install clsx
                                 * ```
                                 * **Use karo:**
                                 * ```jsx
                                 * import clsx from "clsx";
                                 * 
                                 * <div className={clsx("p-4", isDark && "bg-black text-white", isActive && "border border-blue-500")}>
                                 *   Better Class Handling
                                 * </div>
                                 * ```
                                 * 🔹 Ye **better readability aur maintainability** deta hai.  
                                 * 
                                 * ---
                                 * 
                                 * ### **Conclusion**
                                 * ✅ Callback nahi likhte, **lekin expressions use karte hain** jo classes ko dynamically add/remove kar sakein.  
                                 * ✅ **Ternary, template literals, logical operators, ya clsx** best practices hain.
                                 * 
                                 */
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/about'
                                    className={({ isActive }) => // yaha par ye className ke andar hamne callback isliye likh hua hai ki ham i
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-orange-700' : 'text-gray-700'} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/contact'
                                    className={({ isActive }) => // yaha par ye className ke andar hamne callback isliye likh hua hai ki ham i
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-orange-700' : 'text-gray-700'} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/github'
                                    className={({ isActive }) => // yaha par ye className ke andar hamne callback isliye likh hua hai ki ham i
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-orange-700' : 'text-gray-700'} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}



export default Header