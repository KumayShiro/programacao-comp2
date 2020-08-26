main()
function main(){
    var population = []
    do{
        var option = Number(prompt(`Digite conforme o desejado: 
        [1]. Cadastrar novo habitante 
        [2]. Média das idades das pessoas com olhos castanhos e altura maior que 1.60 
        [3]. req3
        [4]. req4
        [5]. req5 
        [6]. Sair do programa`))
        switch(option){
            case 1:
                register(population)
                break
            case 2:
                mdAge(population)
                break
            case 3:
                request3(population)
                break
            case 4:
                request4(population)
                break
            case 5:
                request5(population)
                break
            case 6:
                alert("Obrigado por utilizar nossos serviços! O programa será encerrado...")
                break
            default:
                alert("Opção invalida")
        }
    }while(option != 6)
}
function register(arr){
    var person = new Object()
    person.gen = prompt("Gênero: ").toUpperCase()
    person.h = Number(prompt("Altura: "))
    person.age = Number(prompt("Idade: "))
    person.eyes = prompt("Cor dos Olhos: A - Azul; V - Verde; C - Castanho").toUpperCase()
    arr.push(person)
    console.log(arr)
}
function mdAge(arr){
    var total = 0
    var cont = 0
    for(var i = 0; i < arr.length; i++){
        if((arr[i].eyes = "C") && (arr[i].h > 1.60)){
            total += arr[i].age
            cont++
        }
    }
    if(cont > 0)
        alert(`A média das idades é de ${(total/cont).toFixed(2)}`)
    else
        alert("Não existem pessoas assim cadastradas!")
}