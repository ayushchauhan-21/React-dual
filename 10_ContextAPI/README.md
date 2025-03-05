# 🔹 **Context API in React**

## **1️⃣ Context API Kya Hota Hai?**
Context API ek **built-in state management system** hai jo React me **data ko globally share** karne ke liye use hota hai.  

👉 Normally, React me **props drilling** ka issue hota hai, jisme parent component ko data child components tak bhejne ke liye **multiple props pass** karne padte hain.  
👉 Context API **props drilling se bachne** ka ek tarika hai, jo **data ko directly kisi bhi component tak pohchane** me madad karta hai.

---

## **2️⃣ Context API Ka Kaam Kya Hai?**
Agar kisi bhi component ko **global data** (like user info, theme, authentication state, etc.) chahiye, toh **har jagah props bhejne ki zaroorat nahi** hoti.  
Uske badle, hum **Context API se data create karke use kisi bhi component me access** kar sakte hain.

✅ **Props Drilling Issue (Without Context API)**  
```jsx
function App() {
  const [theme, setTheme] = useState("light");

  return (
    <Parent theme={theme} /> // Data pass karna pad raha hai
  );
}

function Parent({ theme }) {
  return <Child theme={theme} />;
}

function Child({ theme }) {
  return <h1>Current Theme: {theme}</h1>;
}
```
🔴 **Problem** → Agar deeply nested components hote, toh har ek level pe props pass karna padta (**props drilling**).  

✅ **Solution Using Context API**  
```jsx
import React, { createContext, useContext, useState } from "react";

// 1️⃣ Context Create Karna
const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  return (
    // 2️⃣ Context Provider Use Karna
    <ThemeContext.Provider value={theme}>
      <Parent />
    </ThemeContext.Provider>
  );
}

function Parent() {
  return <Child />;
}

function Child() {
  // 3️⃣ Context Ka Data Access Karna
  const theme = useContext(ThemeContext);

  return <h1>Current Theme: {theme}</h1>;
}
```
✅ **Context API se direct data access ho gaya, bina props drilling ke!** 🎯  

---

## **3️⃣ Context API Kaise Kaam Karta Hai?**
Context API **mainly 3 parts** me kaam karta hai:  

### **1️⃣ `createContext()`** – Context Banana  
```js
const ThemeContext = createContext();
```
Ye ek **global storage** jaisa kaam karta hai, jisme hum data store kar sakte hain.

### **2️⃣ `Provider`** – Data Provide Karna  
```jsx
<ThemeContext.Provider value={theme}>
   <Child />
</ThemeContext.Provider>
```
👉 Provider ke `value` prop me jo bhi data denge, wo **saare child components** ko available hoga.

### **3️⃣ `useContext()`** – Data Consume Karna  
```jsx
const theme = useContext(ThemeContext);
```
👉 **useContext() se hum Context ke andar stored value directly le sakte hain.**  

---

## **4️⃣ Context API Ka Use Kaha Karna Chahiye?**
✅ **Jab kisi data ka multiple components me access chahiye ho.**  
✅ **Jab props drilling ka issue ho.**  
✅ **Jab ek hi state multiple jagah use ho rahi ho (like authentication, themes, language settings, etc.).**  

### **Example Use Cases**
- 🛠 **Theme Switching** (Light/Dark Mode)
- 🔑 **User Authentication** (Login/Logout Status)
- 🌍 **Language/Localization Settings**
- 🛒 **Shopping Cart State Management**
- 📲 **Real-time Data Sharing (Notifications, Live Updates, etc.)**

---

## **5️⃣ Kya Context API Redux Ka Alternative Hai?**
❌ **Nahi**, Context API **state sharing** ke liye best hai, lekin **complex state management** ke liye Redux better hai.  
🔹 **Agar app choti hai** (like theme toggling, authentication state), toh **Context API** best hai.  
🔹 **Agar app bada hai** (like advanced state logic, caching, middleware, debugging tools), toh **Redux better hai**.

---

## **🎯 Final Summary**
| Feature | Explanation |
|---------|------------|
| **Context API Kya Hai?** | Ek state management tool jo React me data ko globally share karta hai. |
| **Kya Problem Solve Karta Hai?** | Props drilling ka issue khatam karta hai. |
| **Kaise Kaam Karta Hai?** | `createContext()`, `Provider`, aur `useContext()` ke through. |
| **Kab Use Karna Chahiye?** | Jab multiple components ko ek hi state access karni ho. |
| **Redux Ka Alternative Hai?** | Nahi, complex state management ke liye Redux better hai. |

---

🔥 **Context API ek powerful feature hai jo React apps ko clean aur efficient banata hai. Agar props drilling ho rahi ho, toh Context API ka use zaroor sochna chahiye!** 🚀









# **User Authentication ka example :**

### 📌 **`useContext` Ka Use**  

Yahaan `useContext` ka use `UserContext` se data fetch karne ke liye ho raha hai.

---

## 🏆 **Code Ka Breakdown**
### ✅ **Step 1: Create Context**
```jsx
const UserContext = React.createContext()
```
- Ye ek **context create** kar raha hai jisme **user ka data store hoga**.

---

### ✅ **Step 2: Context Provider**
```jsx
const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    
    return (
        <UserContext.Provider value={{user, setUser}} >
            {children}
        </UserContext.Provider>
    )
}
```
- **Context Provider ek wrapper hai**, jo `value` ke andar `{ user, setUser }` ko store kar raha hai.  
- **Agar `setUser` call hota hai, toh `user` ki value update ho jayegi**.  
- **`children` vo components hain jo `UserContextProvider` ke andar likhe honge.**

---

### ✅ **Step 3: LogIn Component (Context Ko Update Karna)**
```jsx
const LogIn = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { setUser } = useContext(UserContext) // Context se setUser function ko access kiya.

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password }) // Ye `user` state ko update karega.
    }

    return (
        <div>
            <h1>Log In</h1>
            <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <br />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    )
}
```
- **`useContext(UserContext)` ka use karke `setUser` function ko access kiya.**  
- Jab user form submit karega, toh `setUser({ username, password })` se **context me data update ho jayega**.  

---

### ✅ **Step 4: Profile Component (Context Se Data Access Karna)**
```jsx
function Profile() {
    const { user } = useContext(UserContext) // Context se user ko access kiya.
    
    if (!user) return <div>Please login</div>

    return <div>Welcome {user.username} </div>
}
```
- **Yaha `useContext(UserContext)` ka use karke `user` ko access kiya.**  
- **Agar `user` null hai (matlab login nahi kiya), toh "Please login" show hoga.**  
- **Agar `user` ka data available hai, toh `Welcome {user.username}` dikhayega.**  

---

### ✅ **Step 5: App Component (Context Provider Ka Use)**
```jsx
function App() {
  return (
    <UserContextProvider>
      <LogIn />
      <Profile />
    </UserContextProvider>
  )
}
```
- **Pure app ko `UserContextProvider` ke andar wrap kiya**, taaki `LogIn` aur `Profile` components ko **context ka access mil sake**.

---

## 🔥 **`useContext` Kaise Kaam Kar Raha Hai?**
1. **Context Create Kiya:** `React.createContext()`
2. **Context Provide Kiya:** `UserContextProvider` ke andar `{ user, setUser }` ko pass kiya.
3. **Context Ko Update Kiya:** `LogIn` component me `useContext(UserContext)` ka use karke `setUser` call kiya.
4. **Context Se Data Access Kiya:** `Profile` component me `useContext(UserContext)` ka use karke `user` ka data access kiya.

---

## 🎯 **Final Conclusion**
- **Context API ek global state management tool hai** jo props drilling se bachata hai.  
- **`useContext(UserContext)` ka use karke context ke andar stored values ko access ya update kar sakte hain.**  
- **Agar `setUser({ username, password })` call hota hai, toh pura context update ho jata hai aur saare consumers re-render hote hain.**  

🚀 **Ab tum `useContext` ka sahi use samajh gaye! 🔥**