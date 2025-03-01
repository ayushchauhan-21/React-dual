// is file ko hamne page ka layout create karne ke liye banaya hai.

import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

// yaha par hamne Header and Footer ke bich me Outlet likha hai kyuki Ye Outlet Header And Footer ko har layout me same rakhe ga and jo bhi component ham add karenge unko Header and Footer ke bich me set kar dega.
// if hamne Outlet ko upper likha hota to only upper vala part change hota baaki ka sab set rehta.
// now ye ab hamne main.jsx ke andar jo router variable banaya hai route karne ke liye uske andar ham isse easily use kar ske iss liye banaya hai.
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout

// fraud ne ye number bataya hai : 97731


//  