main()
function main(){
	//var vetor = [0, 2, 3, 5, 2, 3, 3, 0, -12, 8]
	var vetor = [1, 3, 5, 7]
	console.log(vetor.some(pares))
}
function pares(elem){
	return elem % 2 == 0
}
