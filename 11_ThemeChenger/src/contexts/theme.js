import { createContext, useContext } from "react";


// pehle to ek baad yaad rakho ki ham jab bhi context create karte hai to usme koi initial value rakh skte hai
// yaha per hamne context theme ke according create kiya hai to value bhi uske according rakhenge.
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}
// upper if dhyan se dekho to hamne ek hook banaya hai joki ThemeProvider ko use karne ki power return kar raha hai, means jo bhi iss useTheme ko call karega usse ye Theme provider ke through ThemeContext ko access karne ke liye allow karega.