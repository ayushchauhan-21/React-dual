
import { useEffect, useState } from 'react'
// import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState('light')

  const darkTheme = () => {
    setThemeMode('dark')
  }
  
  const lightTheme = () => {
    setThemeMode('light')
  }

  // actual theme change logic
  useEffect(() => {
    console.log("theme mode is: ", themeMode)
    // yaha ham pehle se jobhi mode ki value hogi usse hata kar new value set kar denge, means phele koi bhi value ho "light" ya "dark" usse hata kar hamne jo value rakhni hai usse likh denge
    document.querySelector('html').classList.remove("light", "dark") // iss line se pehle vali jo bhi value hogi vo hat jayegi
    document.querySelector('html').classList.add(themeMode)// iss line se theme mode me jobhi value hogi vo set ho jayegi.
  },[themeMode])

  return (

    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>

  )
}

export default App
