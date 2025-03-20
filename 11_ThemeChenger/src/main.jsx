// iss project me hamne context api ke baare me sikha hai.
// isme hamne context ke liye context folder ke andar theme.js file banayi hai.
// then component ke liye card.jsx, themeBtn.jsx banayi hai.
// app.jsx ko me bhi bohot kuch likha hai.
// and main baat ki app.jsx me se app.css hata deni hai, then hame index.css ke andar ek line likhni hai jisse hamari css me class button toggle karne par set hoti rahegi. and jisse project ko pata chalega ki darkTheme class ke based par change karni hai.


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
