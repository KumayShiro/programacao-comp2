function main(){
    // declaração do vetor
    var vetor = []
    entrada(vetor) //Chama as funções
    soma(vetor)
    mostraPares(vetor)
}
function inputValues(vet){
    for(var i=0;i<5;i++){ //Lê os valores do vetor
        vet.push(Number(prompt("Informe um número: ")))
    }
}

function soma(vet){
    var soma = 0 //Cria um acumulador
    for(var i=0;i<5;i++){
       soma += vet[i] //Soma o atual ao já existente
    }
    console.log(soma)
}

function mostraPares(vet){
    for(var i=0; i<5; i++){ //Exibe os números pares dentro do vetor
        if (vet[i] % 2 == 0){
            console.log(vet[i])
        }
     }
}