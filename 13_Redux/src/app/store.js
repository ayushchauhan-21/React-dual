//ham yaha redux ka ek store bana rahe hai jiske liye hamne niche vali line ko import kiya hai.
import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'; // now hamne ye reducer import kiya hai iss store ke object me add karna hoga reducer property bana kar

// now ham ek variable bana kar usse export kar dete hai
export const store =  configureStore({
    reducer: todoReducer
})