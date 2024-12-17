import { useState, useEffect }  from "react";

function LifeCycleClassComponent (){
    const [count, setCount] = useState (0)

    useEffect(() => {
        console.log ("component montado!")

        return () => {console.log ("Componente será desmontado")}
    }, [])

    useEffect (()=> {
        console.log ("Componente Atualizado!")
    }, [count])

    const increment = () =>{
        setCount (count + 1)
    }

    return (
        <div>
            <p>Contagem: {count} </p>
            <button onClick={increment}>Incremente a Contagem</button>
        </div>
    )

}

export default LifeCycleClassComponent