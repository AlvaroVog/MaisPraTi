import { Component } from "react"

class LifeCycleClassComponent extends Component {
    constructor(props) {
        super (props)
        this.state = {count: 0}
    }

    componentDidMount () {
        console.log ("Component montado !")
    }

    componentDidUpdate (prevProps, prevState){
        console.log ("Component atualizado! Propriedades e esados anteriores: " + prevProps, prevState)
    }

    componentWillUnmount () {
        console.log ("Component será desmontado")
    }

    increment = () =>{
        this.state ({ count: this.state.count + 1 })
    }

    render () {
        return(
            <div>
                <p>Contagem: {this.state.count}</p>
                <button onClick={this.increment}>Incrementar</button>
            </div>
        )
    } 
}

export default LifeCycleClassComponent