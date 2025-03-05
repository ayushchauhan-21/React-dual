// hamne jo UserContext banaya hai uska use karke yaha per ek context provider banayenge.
// context provider ek wrapper ke jese kaam karta hai, and iske andar likhe huye component iske context ka use kar skte hai.

import React, { useState } from "react";
import UserContext from "./Usercontext";

/*
// Question: in dono syntax me kya difference hai?
const UserContextProvider = (children) => {
    return(
        <>
            {children}
        </>
    )
}

const UserContextProvider = ({children}) => {
    return(
        <>
            {children}
        </>
    )
}
// answer:
### 🔍 **Difference Between `children` in Parameters**  

Tumhare code me **pehli** aur **dusri function definition** me **parameters me fark hai**, jo important hai.  

---

### ❌ **Incorrect Version**  
```jsx
const UserContextProvider = (children) => {
    return (
        <>
            {children}
        </>
    );
};
```
#### 🔴 **Issue:**  
- Yaha `children` ek **object nahi, balki direct function ka first parameter hai**.  
- Jab **React ek component render karta hai**, toh uske props ek **object** ke form me pass hote hain.  
- Yaha `children` directly as a parameter aa raha hai, **jo ek object nahi hai**.  
- **Iska result hoga ki `{children}` undefined rahega, aur koi content render nahi hoga.** 😟  

---

### ✅ **Correct Version**  
```jsx
const UserContextProvider = ({ children }) => {
    return (
        <>
            {children}
        </>
    );
};
```
#### 🟢 **Why This is Correct?**  
- **React props ko ek object ke roop me pass karta hai.**  
- `{ children }` **destructuring syntax hai**, jo props se `children` ko extract kar raha hai.  
- Ab `{children}` properly render hoga, aur `UserContextProvider` ke andar jo bhi child components honge, wo display honge.

---

### 🚀 **Final Version (With Context API Implementation)**  
Agar tum `UserContext` use kar rahe ho, toh **correct implementation kuch aisa hoga:**  
```jsx
import React from "react";
import UserContext from "./Usercontext";

const UserContextProvider = ({ children }) => {
    return (
        <UserContext.Provider value={{ name: "Student", age: 22 }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
```
#### 🔥 **Final Thoughts:**  
✅ **Pehla wala (Incorrect)**: `{children}` **undefined rahega**.  
✅ **Dusra wala (Correct)**: `{children}` **as a prop receive hoga, aur properly render karega**.  
💡 **Conclusion:** **Always use `{ children }` instead of `(children)` in functional components.** 🚀

*/

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    // yaha return me only children likhne se kaa nahi hoga, hamne jo context banaya hai(UserContext), uska use karke, uski provider propertry ka use karna hoga then usme kon kon si value dena chahte hai jo value attribute ka use karke batana hoga.
    return (
        <UserContext.Provider value={{user, setUser}} >
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider