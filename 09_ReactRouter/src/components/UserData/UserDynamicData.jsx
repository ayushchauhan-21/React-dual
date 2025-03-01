//hamne main component me iss component(UserDynamicData) ko call karvate time jo path me syntax ke andar colon ke baad jo bhi likha hoga usko ham yaha access kar skte hai.
// usse access karne ke liye react-router-dom me ek function ya fir hook keh skte hai, "useParams" iske through ham ye kar skte hai.


import React from 'react'
import { useParams } from 'react-router-dom'

function UserDynamicData() {
    // now yaha par hamne jo bhi main component me iss component ko call karte time path me colon ke baad likha tha usse likhna padta hai means ussi name ka variable ya fir hook banana padta hai "useParams()" ka use karke.
    const {userData} = useParams()
    return (
        <div className='bg-gray-500 text-3xl p-4 my-3'>
            Data: {userData}
        </div>
    )
}

export default UserDynamicData
