function main(){
    var fat = Number(prompt('Digite um número: '))
    var res = calcFat(fat)
    console.log(`Resultado do Fatorial do número ${fat}: ${res}`)
}
function calcFat(n){
    var calc = 1
    if(n == 0 || n == 1){
        return 1
    }
    for(var i = n; i > 0; i--){
        calc *= i
    }
    return calc
}
main()