function main(){
    var num = Number(prompt("Entre com um valor: "))
    var res = checkNumber(num)
    console.log(res)
}
function checkNumber(n){
    if(n < 0){
        return "Negativo"
    }else{
        return "Positivo"
    }
}
main()