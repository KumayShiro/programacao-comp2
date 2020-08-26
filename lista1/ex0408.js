function principal(){
    var num1 = Number(prompt('Informe o primeiro número: ')) //Recebe o primeiro valor
    var num2 = Number(prompt('Informe o segundo número: ')) //Recebe o segundo valor
    var opr = String(prompt('Informe uma operação: ')) //Recebe um operando
    var res = soma(num1, opr,  num2) //Recebe o valor de acordo com a segunda função de nome soma
    console.log(`Resultado final: ${res}`) //Imprime o resultado final
}
function soma(x, o, y){ //Passa os parametros, num1 = x; o = opr; num2 = y
    switch(o){ //Muda de operação de acordo com o
        case '+': //Adição
            return x + y
            break
        case '-': //Subtração
            return x - y
            break
        case '/': //Divisão
            if (y == 0) {
                alert('O divisor não pode ser zero!')
            }
            return x / y
            break
        case '*': //Multiplicação
            return x * y
            break
    }
}