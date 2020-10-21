main()
function main(){
    var vetor = [2, 6, 3, 8]
    vetor.forEach(operador)
    novoVet = vetor.map(mult)
    novoVet.forEach(impr)
}	
function operador(elem, pos){
    if(pos % 2 == 1){
        console.log(`Valor ${elem} na posição ${pos}`)
    }
}
function impr(elem, pos){
    if(pos % 2 == 0){
        console.log(`Valor ${elem} na posição ${pos}`)
    }
}
function mult(elem){
    return Math.pow(elem, 2)
}
let a = function(x, y){
    return x * y
}
alert(a(5, 10))
let soma = function(inf, sup){
    let aux = 0
    for(let i = inf; i < sup; i++){
        aux += i
    }
    return aux
}
console.log(soma(5,10))