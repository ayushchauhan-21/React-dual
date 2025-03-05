import React, { useContext, useState } from 'react'
import UserContext from '../context/Usercontext'

const LogIn = () => {
    // ye niche ke dono state issliye banaye hai taaki input field se mili values ko store kar ske 
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // yaha hamne useContext ke andar jiska context use karna hai uski value daali hai. usme se hame setUser ko call karke user ki value set kar skte hai.
    const {setUser} = useContext(UserContext)

    const hendleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
    return (
        <div>
            <h1>Log In</h1>
            <input
                type="text"
                placeholder='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <input
                type="password" 
                name="pswd" 
                id="pswd" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button type="submit" onClick={hendleSubmit}>Submit</button>
        </div>
    )
}

export default LogIn
