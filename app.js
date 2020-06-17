/*variaveis */
var botao =  document.querySelector('.botao')
var listaElementos = document.querySelector('.listaElementos')
//console.log(listaElementos)
var texto = document.querySelector('.texto')



/*eventos*/

botao.addEventListener("click",()=>{
	/*elemento submit não carregar*/
	event.preventDefault();

	/*criar elemento da lista e inserir o texto*/
	var elementoLista = document.createElement('li')
	elementoLista.innerText = texto.value
	listaElementos.appendChild(elementoLista)
	texto.value = ''
	elementoLista.classList.add('estiloElementos')

	/*criando a lixeira*/
	var lixeira = document.createElement('button')
	lixeira.innerHTML = '<i class="fas fa-trash"></i>'
	elementoLista.appendChild(lixeira)
	lixeira.classList.add('lixeira')



	/*criando botão de check*/
	var check = document.createElement('button')
	check.innerHTML = '<i class="fas fa-check"></i>'
	elementoLista.appendChild(check)
	check.classList.add('check')


	/*evento de excluir*/
	lixeira.addEventListener("click",elementoEliminado)

	/*evento de marcar o elemento*/
	check.addEventListener("click",elementoMarcado)

	




})


/*funções*/

function elementoEliminado(e){
	botao = e.target.parentNode
	elemento = botao.parentNode
	elemento.parentNode.removeChild(elemento)

}

function elementoMarcado(e){
	botao = e.target.parentNode
	elemento = botao.parentNode
	elemento.classList.add('elementomarcado')

}