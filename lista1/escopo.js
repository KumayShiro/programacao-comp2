/*
variáveis de escopo local
function main(){
    var num1 = Number(prompt('Informe um número: '))
    var result = exe1(num1)
    console.log(`A soma dos números é de ${result}`)
}

function exe1(n){
    var soma = 0 
    for(var i = 1; i <= n; i++) {
        soma += 1
    }
    return soma 
}

main() //Call main function 

//variáveis de escopo global
function main() {
    var vetor = []
    input(vetor)
    adc10(vetor)
    console.log(vetor)
}
function input(vet){
    vet.push(8)
    vet.push(6)
    vet.push(7)
}
function adc10(vet){
    for(var i = 0; i < vet.lenght; i++) {
        vet[i] = vet[i] + 10
    }
} */

function main() {
    var car = new Object()
    buy(car)
    console.log(car)
}
function buy(obj){
    obj.model = 'Renegade'
    obj.marca = 'jeep'
    obj.year = 2019
}
main()