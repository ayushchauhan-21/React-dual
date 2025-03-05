import React, { useContext, useState } from "react";

// yaha ham ek context create karenge then uska use issi file me karenge.
const UserContext = React.createContext()

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    
    return (
        <UserContext.Provider value={{user, setUser}} >
            {children}
        </UserContext.Provider>
    )
}


// ye code LogIn component ke liye hai
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
            <input
                type="password" 
                name="pswd" 
                id="pswd" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" onClick={hendleSubmit}>Submit</button>
        </div>
    )
}

// ye code profile component ke liye hai.
function Profile() {
    const {user} = useContext(UserContext)
    if (!user) return <div>please login</div>

    return <div>Welcome {user.username} </div>
}