main()
function main(){
    var vendedores = []
    var vendas = []
    do{
        var opt = Number("[1]. Cadastrar Vendedor \n [2]. Cadastrar venda \n [3]. Sair do Programa")
        switch(opt){
            case 1:
                cadVendedor(vendedores)
                break
            case 2: 
                break
            case 3:
                break
        }
    }
}
function cadVendedor(arr){
    var person = new Object()
    person.codigo = Number(prompt("Informe o código: "))
    person.nome = String(prompt("Nome: "))
    for(var i = 0; i < arr.length; i++){
        if(arr[i].codigo == person.codigo){
            alert("Código já existente! Você será redirecionado ao menu principal.")
            return 0
        }
    }
    arr.push(person)
    alert("Vendedor cadastrado com sucesso!")
}