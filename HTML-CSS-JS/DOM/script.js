let titulo = document.getElementById('titulo')

titulo.textContent = "Aula de JS básico"

titulo.innerHTML = "Mudei o conteudo do titulo novamente"

titulo.style.color = "blue"

let botao = document.getElementById('botao')

botao.addEventListener ('click', ()=> {
    alert('Você clicou no botao!')
})

let novoParagrafo = document.createElement ('p')
 
novoParagrafo.innerHTML = "Ester é um parágrafo criado com JS"

document.body.appendChild(novoParagrafo)

let paragrafo = document.querySelector ('.paragrafo')

paragrafo.remove()