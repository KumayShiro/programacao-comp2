let vetor = []
// nova forma de criarmos uma função -> variável é uma função
// função para cadastro
let cad = function(vet){
    for(let i = 0; i < 3; i++){
        let bicicleta = new Object()
        bicicleta.codigo = Number(prompt(`Informe codigo`))
        bicicleta.aro = Number(prompt(`Informe aro`))
        bicicleta.modelo = prompt(`Informe modelo`)
        bicicleta.marca = prompt(`Informe marca`)
        bicicleta.valor = Number(prompt(`Informe valor`))
        bicicleta.ano = Number(prompt(`Informe ano `))
        // insere no vetor
        vet.push(bicicleta)
        console.log(`Bicicleta inserida com sucesso`)
    }
}
cad(vetor)
// 2. Busca por uma bicicleta no vetor a partir de um código informado pelo usuário
let codigo = Number(prompt(`Informe codigo`))
console.log(vetor.filter((elemn) => elemn.codigo == codigo))
// 3.	Calcula a soma dos valores das bicicletas em estoque
console.log(`A soma é ${vetor.reduce((acm, elemn) => acm + elemn.valor, 0)}`)
// 4.	Mostra todas as bicicletas de uma marca informada pelo usuário
let marca = String(prompt("informe a marca: "))
console.log(vetor.filter((elemn) => elemn.marca == marca))
// 5.	Soma o valor 3 em todas os aros das bicicletas cadastradas
console.log(vetor.map((elemn) => elemn.aro += 3))
// 6.	Mostra a bicicleta mais velha
let older = vetor[0].ano
vetor.forEach(function(elemn){if(elemn.ano < older){older = elemn.ano}})
console.log(`A bicicleta mais velha é do ano de ${older}.`)