import { useState } from "react";

function Login () {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return( 
    <div>
        { isLoggedIn ? (
            <button onClick={() => setIsLoggedIn (false)}>logout</button>
        ): (
            <button onClick={() => setIsLoggedIn(true)}>login</button>
        )} 
        <p>{isLoggedIn ? "Bem-vindo!" : "Por Favor faça o login." } </p>
    </div>
    )
} 

export default Login