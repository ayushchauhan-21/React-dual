import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

createRoot(document.getElementById('root')).render(
  // dekho yaha par hame only provider se App ko wrap kiya hai but contextAPI me ham iss context ke name then "contextName.Provider" karke wrap karte hai.
  // and contextAPI me ham isme value attribute uss karte hai but yaha par iski jagah par store attribute use hota hai.
  <Provider store={store}>
    <App />
  </Provider>,
)
