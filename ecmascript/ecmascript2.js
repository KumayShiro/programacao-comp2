main()
function main(){
	var vetor = [3, 2, 4]
	vetor.forEach(opr)
	
	var novoVet = vetor.map(criar)
	console.log(`Vetor multiplicado por 2: ` + novoVet)
	
	var novo2 = vetor.filter(filtrar)
	console.log(novo2)
	
	var soma = vetor.reduce(reduzir)
	console.log(`Valor total: ${soma}`)
	
	var sub = vetor.reduce(reduzir2)
	console.log(`valor total sub ${sub}`)
}
function opr(elem, pos){
	if(pos % 2 == 1){
		console.log(`O elemento ${elem} está em uma posição ímpar`)
	}
}
function criar(elem){
	return elem * 2
}
function filtrar(elem, pos){
	return ((elem <= 3) && (pos < 3))
}
function reduzir(tot, elem){
	console.log(`Valores parciais: ${tot}`)
	return tot + elem
}

function reduzir2(tot, elem, pos){
	
	if(pos == 1){
		return ((tot + 1) * tot) - ((elem + 1)* elem)
	}
	return tot - ((elem + 1) * elem)
	return ((elem + 1) * elem) - tot
}