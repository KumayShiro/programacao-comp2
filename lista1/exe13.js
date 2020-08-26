function main(){
    var population = [] //Declara a variável de população de forma global
    do{
        //Menu de opções
        var options = Number(prompt("Escolha: \n [1]. Cadastrar \n [2]. Média de Salários \n [3]. Menor e Maior Idade \n [4]. Quantidade de mulheres \n [5]. Sair do Programa"))
        switch(options){
            case 1:
                //Chama a função para registrar os habitantes
                register(population)
                break
            case 2:
                //Chama a função para executar o cálculo de média dos salários
                averageCalc(population)
                break
            case 3:
                //Verifica a maior e a menor idade
                ageCalc(population)
                break
            case 4:
                //Chama função para executar a contagem das mulheres específicadas no item
                wiCalc(population)
                break
            case 5: 
                alert("Obrigado por utilizar nossos serviços!")
                break
            default: alert("Opção inválida!")
        }
    }while(options != 5)
}
function register(vet){
    alert("Serviços de Cadastramento!")
    var person = new Object()
    person.age = Number(prompt("Idade: "))
    person.gender = prompt("Gênero: [M/ F]").toUpperCase()
    person.salary = Number(prompt("Salário: "))
    person.children = Number(prompt("Número de filhos: "))
    vet.push(person)
    alert("Pessoa registrada com Sucesso!")
}
function averageCalc(vet){
    alert("Serviços de Média Salárial")
    var s = 0
    if(vet.length == 0){ alert("Não há nenhum habitante cadastrado em nosso banco de dados!") }
    else{
        for(var i = 0; i < vet.length; i++){ s += vet[i].salary }
        alert(`A média de salário dos habitantes é de ${(s/ vet.length).toFixed(2)}`)
    }
}
function ageCalc(vet){
    alert("Serviços de Cálculo de Menor e Maior Idade!")
    var yon = old = vet[0].age
    if(vet.length == 0){ alert("Não há nenhum habitante cadastrado em nosso banco de dados!") }
    else{
        for(var i = 1; i < vet.length; i++){
            if(vet[i].age < yon){
                yon = vet[i].age
            }
            if(vet[i].age > old){
                old = vet[i].age
            }
        }
        alert(`A menor idade encontrada é ${yon} | E a maior é ${old}`)
    }
}
function wiCalc(vet){
    alert("Serviços de Contagem de Mulheres dentro das Específidades!")
    var wom = 0
    if(vet.length == 0){ alert("Não há nenhum habitante cadastrado em nosso banco de dados!") }
    else{
        for(var i = 0; i < vet.length; i++){
            if((vet[i].gender == "F") && (vet[i].children >= 3) && (vet[i].salary <= 500)){
                wom += 1
            }
        }
        alert(`Quantidade de mulheres com 3 filhos ou mais e de renda até R$ 500, 00: ${wom}`)
    }
}
main()