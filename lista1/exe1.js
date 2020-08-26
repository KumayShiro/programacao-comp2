function main(){
    var number = Number(prompt('Informe um número: ')) 
    var res = exe1(number) 
    console.log(`A soma dos números é: ${res}`)
}
function exe1(n){
    var total = 0
    for(var i = 1; i <= n; i++){
        total += i
    }
    return total
}
main() //Call main function