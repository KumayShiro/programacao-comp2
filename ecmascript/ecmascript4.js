/*Prof. Daniel Facciolo Pires

Supondo um vetor contendo as informa��es de bicicletas:
    � C�digo
    � Aro
    � Modelo
    � Marca
    � Valor
    � Ano

Fa�a uma fun��o utilizando ES5 para cada um dos requisitos abaixo:
    1. Adiciona uma bicicleta no vetor
    2. Busca por uma bicicleta no vetor a partir de um c�digo informado pelo usu�rio
    3. Calcula a soma dos valores das bicicletas em estoque
    4. Mostra todas as bicicletas de uma marca informada pelo usu�rio
    5. Soma o valor 3 em todas os aros das bicicletas cadastradas
    6. Mostra a bicicleta mais velha */

let vetor = []
let cad = function(vet){
	var bicicleta = new Object()
	bicicleta.cod = Number(prompt("C�digo da Bicicleta: "))
	bicicleta.aro = Number(prompt("Aro: "))
	bicicleta.mod = String(prompt("Modelo: "))
	bicicleta.mca = String(prompt("Marca: "))
	bicicleta.val = Number(prompt("Valor: R$"))
	bicicleta.ano = String(prompt("Ano: dd/mm/aaaa"))
	vet.push(bicicleta)
	console.log("Bicicleta cadastrada! ")
	console.log(vet)
}
cad(vetor)
cad(vetor)
var cod 
let search = function(vet){
	cod = Number(promtp("Informe um c�digo: "))
	let okay = vet.filter(searchP)
	console.log(okay)
}
function searchP(elemn){
	return (elemn.cod == cod)
}
search(vetor)

let soma = function(vet){
	let res = vet.reduce(tot)
	console.log(res)
}
function tot(total, elemn){
	total.val += elemn.val
}

