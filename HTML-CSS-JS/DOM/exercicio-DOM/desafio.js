let titulo = document.getElementById ('titulo')
let botaoAdicioarItem = document.getElementById ('adicionarItem')
let botaoRemoverItem = document.getElementById ('removerItem')
let lista = document.getElementById ('lista')

function adicionarItem (){
    let novoItem = document.createElement('li')

    novoItem.innerHTML = `item ${lista.children.length + 1}`

    lista.appendChild(novoItem)

    titulo.innerHTML = 'Novo item adicionado!'
    titulo.style.color = 'green'
}

function removerItem (){
    if(lista.children.length > 0){
        lista.removeChild(lista.lastElementChild)

        titulo.innerHTML = 'Item removido'

        titulo.style.color = "red"
    } else {
        titulo.innerHTML = 'Não há mais itens para remover'
        titulo.style.color = 'gray'
    }
}

botaoAdicioarItem.addEventListener ('click', adicionarItem)
botaoRemoverItem.addEventListener ('click', removerItem)