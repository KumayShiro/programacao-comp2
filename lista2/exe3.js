main()
function main(){
    var population = []
    do{
        var option = Number(prompt(`Digite conforme o desejado: 
        [1]. Cadastrar novo habitante 
        [2]. Média das idades das pessoas com olhos castanhos e altura maior que 1.60 
        [3]. Maior idade dentre os habitantes
        [4]. Quantidade de indivíduos do sexo feminino com idade entre 20 e 45 anos ou que tenham olhos verdes e altura inferior a 1.70m
        [5]. Percentual de homens
        [6]. Sair do programa`))
        switch(option){
            case 1:
                register(population)
                break
            case 2:
                mdAge(population)
                break
            case 3:
                olderAge(population)
                break
            case 4:
                item4(population)
                break
            case 5:
                percentMan(population)
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
    if(arr.length == 0){
        alert("Nenhum habitante cadastrado.")
        return 0
    }
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
function olderAge(arr){
    if(arr.length == 0){
        alert("Nenhum habitante cadastrado.")
        return 0
    }
    var old = arr[0].age
    for(var i = 0; i < arr.length; i++){
        if(arr[i].age > old){
            old = arr[i].age
        }
    }
    alert(`A maior idade encontrada foi ${old}`)
}
function item4(arr){
    if(arr.length == 0){
        alert("Nenhum habitante cadastrado.")
        return 0
    }
    var cont = 0
    for(var i = 0; i < arr.length; i++){
        if((20 <= arr[i].age <= 45) && (arr[i].gen == "F") || (arr[i].eyes == "V") && (arr[i].h < 1.70))
            cont++
    }
    if(cont > 0){
        alert(`Quantidade total de pessoas do item 4: ${cont}`)
    }else{
        alert("Nenhuma pessoa se encaixa nos critérios do item 4.")
    }
}
function percentMan(arr){
    if(arr.length == 0){
        alert("Nenhum habitante cadastrado.")
        return 0
    }
    cont = 0
    for(var i = 0; i < arr.length; i++){
        if(arr[i].gen == "M"){
            cont++
        }
    }
    if(cont > 0){
        alert(`Porcentagem de homens dentre os habitantes: ${((cont/ arr.length) * 100).toFixed(2)}`)
    }else{
        alert("Nenhum homem encontrado")
    }
}