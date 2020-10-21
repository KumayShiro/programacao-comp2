main()
function main(){
    let vendedores = []
    let vendas = []
    do{
        let opt = Number(prompt(` [1]. Cadastrar Vendedor \n [2]. Cadastrar venda \n [3]. Consultar as vendas de um funcionário em determinado mês \n [4]. Consultar o total de vendas de determinado vendedor \n [5]. Mostrar o número do vendedor que mais vendeu em determinado mês \n [6]. Mostrar o número do mês com mais vendas \n [7]. Sair do Programa`))
        switch(opt){
            case 1:
                cadastrarVendedor(vendedores)
                break
            case 2:
                cadastrarVendas(vendas, vendedores) 
                break
            case 3:
                consultaVendaFuncMes(vendas)
                break
            case 4:
                consultaTotalVendas(vendas)
                break
            case 5: 
                maiorVendaMes(vendas, vendedores)
                break
            case 6:
                mesMaiorVendas(vendas)
                break
            case 7:
                alert("Finalizando Programa...")
                break
            default:
                alert("Opção inválida")
        }
    }while(opt != 7)
}
function cadastrarVendedor(arr){
    let vendedor = new Object()
    vendedor.codigo = Number(prompt("Informe o código: "))
    vendedor.nome = String(prompt("Nome: "))
    for(let i = 0; i < arr.length; i++){
        if(arr[i].codigo == vendedor.codigo){
            alert("Código já existente! Você será redirecionado ao menu principal.")
            return 0
        }
    }
    arr.push(vendedor)
    console.log(arr)
    alert("Vendedor cadastrado com sucesso!")
}
function cadastrarVendas(vda, vds){ //vda = vendas; vds = vendedores
    let vendas = new Object()
    vendas.codigo = Number(prompt("Informe código da venda: "))
    vendas.vendedor = Number(prompt("Informe código do vendedor: "))
    vendas.mes = Number(prompt("Informe o mês da venda"))
    vendas.valor = Number(prompt("Valor da venda: "))
    for(let i = 0; i < vds.length; i++){
        if(vds[i].codigo == vendas.vendedor){
            for(let j = 0; j < vda.length; j++){
                if((vda[j].vendedor == vendas.vendedor) &&(vda[j].mes == vendas.mes)){
                    alert("Venda já existente nesse mês para esse vendedor.")
                    return 0
                }
            }
            vda.push(vendas)
            alert("Venda inserida com suceso.")
            console.log(vda, vds)
            return 0
        }
    }
    alert("Vendedor não existente")    
}
function consultaVendaFuncMes(vda){
    if(vda.length == 0){
        alert("Não há nenhuma venda cadastrada no momento.")
        return 0
    }
    let vendedor = Number(prompt("Informe o número do vendedor: "))
    let mes = Number(prompt("Informe o mês da venda: "))
    for(let i = 0; i < vda.length; i++){
        if((vda[i].vendedor == vendedor) && (vda[i].mes == mes)){
            alert(`O valor de vendas do funcionário ${vendedor} no mês ${mes} é R$${(vda[i].valor).toFixed(2)}`)
            return 0
        }
    }
    alert("Informações não encontradas.")
}
function consultaTotalVendas(vda){
    if(vda.length == 0){
        alert("Não há informações para retornar.")
        return 0
    }
    let vendedor = Number(prompt("Informe o código do vendedor: "))
    let total = 0
    for(let i = 0; i < vda.length; i++){
        if(vda[i].vendedor == vendedor){
            total += vda[i].valor
        }
    }
    if(total == 0){
        alert("O vendedor não existe ou não possui nenhuma venda")
    }else{
        alert(`O total de vendas do funcionário ${vendedor} é de ${(total).toFixed(2)}.`)
    }
}
function maiorVendaMes(vda){
    if(vda == 0){
        alert("Não há vendas cadastradas até o momento. ")
        return 0
    }
    let mes = Number(prompt("Informe o número do mês para consulta: "))
    let vendedor 
    let maior = 0
    for(let i = 0; i < vda.length; i++){
        if(vda[i].mes == mes){
            if(vda[i].valor > maior){
                maior = vda[i].valor
                vendedor = vda[i].vendedor 
            }
        }
    }
    if(maior > 0){
        alert(`A maior venda no mês ${mes} é de $${maior}, correspondente ao funcionário de número ${vendedor}`)
    }else{
        alert("Nenhuma venda para esse mês.")
    }
}
function mesMaiorVendas(vda){
    let meses = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for(let i = 0; i < vendas.length; i++){
        let posicao = vda[i].mes - 1
        meses[posicao] += vda[i].valor
    }
    let maior = meses[0]
    for(let i = 0; i < vda.length; i++){
        if(vda[i].valor > maior){
            maior = vda[i].valor
        }
    }
    let posicao = vda.indexOf(maior)
    alert(`Mês com mais vendas ${posicao + 1} com valor total de R$${maior}`)
}