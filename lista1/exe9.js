function main(){
    var num = Number(prompt('Digite um valor inteiro e positivo: '))
    var div = checkDivider(num)
    var res = sumValues(div)
    console.log(`A soma dos divisores do número ${num} é: ${res}`)
}
function checkDivider(n){
    var dividers = []
    for(var i = 1; i <= n; i++){
        if(n % i == 0){
            dividers.push(i)
        }
    }
    return dividers
}
function sumValues(arr){
    var total = 0
    for(var i = 0; i < arr.length; i++){
        total += arr[i]
    }
    return total
}
main()