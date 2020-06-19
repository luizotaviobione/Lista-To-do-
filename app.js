/*variaveis */
var botao =  document.querySelector('.botao')
var listaElementos = document.querySelector('.listaElementos')
//console.log(listaElementos)
var texto = document.querySelector('.texto')
var x = 0;
const filterOption = document.querySelector(".filter-todo")



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

	if(x===0)
	{
		const teste2 = listaElementos.childNodes;
		teste2[0].remove()
		x++

	}

	




})

filterOption.addEventListener("click", filterTodo)


/*funções*/

function elementoEliminado(e){
	botao = e.target.parentNode
	elemento = botao.parentNode
	elemento.classList.add('elementoEliminado')
	elemento.addEventListener("transitionend", function(){
		elemento.remove()
	})
	//elemento.parentNode.removeChild(elemento)



}

function elementoMarcado(e){
	botao = e.target.parentNode
	elemento = botao.parentNode
	elemento.classList.add('elementomarcado')

}

function filterTodo(e){
	const todos = listaElementos.childNodes;
	
	
	todos.forEach(function(todo){
		//console.log(e.target.value)
		
		switch(e.target.value){
			case "All":
				todo.style.display ="block"
				break;
			
			case "Completed":
				if(todo.classList.contains('elementomarcado')){
					todo.style.display = 'block'
				}else{
					todo.style.display = 'none'
				}
				break;

			case "Uncompleted":
				if(!todo.classList.contains('elementomarcado')){
						todo.style.display = 'block'
				}else{
					todo.style.display = 'none'
				}
				break;


		}
	})
	
}