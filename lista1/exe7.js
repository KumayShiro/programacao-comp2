function main(){
    var values = [] //Positive Numbers
    addValue(values)
    var res = totalValue(values)
    console.log(`A soma de todos os valores é ${res}`)
}
function addValue(arr){
    var n = Number(prompt('Digite um valor: '))
    while(n >= 0){
        arr.push(n)
        n = Number(prompt('Digite outro valor (ou um número menor que zero para encerrar o programa): '))
    }
    return arr
}
function totalValue(arr){
    var total = 0
    for(var i = 0; i < arr.length; i++){
        total += arr[i]
    }
    return total
}
main()