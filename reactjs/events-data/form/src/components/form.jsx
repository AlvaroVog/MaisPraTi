import React, {useState} from "react";

function Form () {
    const [tarefas, setTarefas] = useState ([])

    const [novaTarefa, setNovaTarefa] = useState ('')

    const handleInputChange = (event) => {
        setNovaTarefa (event.target.value)
    }

    const handleAddTask = () => {
        if (novaTarefa.trim()=== ''){
            return
        }

        setTarefas ([... tarefas, novaTarefa])
        setNovaTarefa ('')
    }

    const handleRemoveTask = (index) => {
        const updateTasks = tarefas.filter ((_, i) => i =/= index)
        setTarefas (updateTasks)
    }

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <input type="text" value={novaTarefa} onChange={handleInputChange}
            placeholder="Digite uma nova tarefa"/>
            <button onClick={handleAddTask}>Adicionar tarefa</button>

            <ul>
                {tarefas.map((tarefa, index) => (
                    <li key={index}>{tarefa} <button onClick={()=> handleRemoveTask (index)}>Remover</button></li>
                ))}
            </ul>
        </div>
    )
}

export default Form