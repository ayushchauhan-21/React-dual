// react me ham esa karte hai ki jitne bhi component banae hai unko ek hi file me import karva lete hai.
// then iss file ko jaha jaha par uss component ki need hai vaha vaha par import karva dete hai.
// esa isliye kyuki ham faltu import ko baar baar likhne se bachte hai.

import InputBox from './InputBox'

export {InputBox}


/**
 * ### **🔹 `import InputBox from './InputBox'` and `export { InputBox }` ka matlab?**  

Ye code **index.js** ya **index.ts** file me likha hota hai jo multiple components ko **re-export** karne ke liye use hoti hai. Iska kaam hai **bar-bar alag-alag files se import karne ki jagah ek hi file se import karna.**

---

### **1️⃣ Normal Export (Direct Export)**
Agar hum **directly** kisi component ko import-export karein, toh code kuch aisa hoga:

#### **📌 Without Re-exporting**
```js
// InputBox.jsx
export default function InputBox() {
    return <input type="text" />;
}
```
Aur jab use karenge toh:
```js
import InputBox from "./components/InputBox";
```
Agar aur bhi components hain (`Button.jsx`, `Card.jsx`), toh har ek ko alag se import karna padega:

```js
import InputBox from "./components/InputBox";
import Button from "./components/Button";
import Card from "./components/Card";
```
Yeh **tedious (boring)** ho sakta hai.

---

### **2️⃣ Centralized Export (Re-export)**
Ab maan lo `components/index.js` file me likh diya:
```js
import InputBox from "./InputBox";
import Button from "./Button";
import Card from "./Card";

export { InputBox, Button, Card };
```
Ab koi bhi file jo inko import karegi, sirf ek hi baar import karegi:
```js
import { InputBox, Button, Card } from "./components";
```
⚡ **Advantage:** Yeh **zyada clean aur maintainable** hai.

---

### **🔹 `export { InputBox }` ka Matlab?**
Ye named export hai, iska matlab hai **InputBox ko ek object ke andar pack kar ke export karna.**

```js
export { InputBox };
```
Internally yeh **yeh hi hota hai:**
```js
const obj = { InputBox };
export default obj;
```
Aur jab import karte ho:
```js
import { InputBox } from "./components";
```
Toh `InputBox` us object se destructure ho jata hai.

---

### **🔹 Agar `export default InputBox` hota toh?**
Agar aap **default export** karte toh sirf **ek hi component** default export ho sakta tha:
```js
export default InputBox;
```
Aur import karte time:
```js
import InputBox from "./components";
```
⚠ **Default export me `{}` ka use nahi hota.**  

Lekin agar **multiple exports** karne hain toh named export better hai.

---

### **🔹 Summary**
✅ `export { InputBox }` se **multiple components ek jagah se export ho sakte hain.**  
✅ `import { InputBox }` karne se code clean aur structured rehta hai.  
✅ **Centralized export ka use large projects me hota hai.**  
✅ **Default export ek baar hota hai, par named export multiple components ke liye better hai.**

---

### **🚀 Best Practice**
Agar project me **bahut saare components hain**, toh **index.js** ya **index.ts** me saare components export karke **ek hi baar import karna best practice hota hai.** 😃
 */