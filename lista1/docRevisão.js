function revisao(){
    var bicicletas = [] //Vetor que carregará os dados das bicicletas
    var resp //Recebe a resposta do usuário
    do{
        bike = new Object() //Cria um objeto para bike e o apaga a cada loop
        //Recebe as características da bike
        bike.modelo = String(prompt('Entre com o modelo: '))
        bike.marca = String(prompt('Marca: '))
        bike.aro = Number(prompt('Aro: '))
        bike.roda = Number(prompt('Roda: '))
        data = prompt('Entre com a data de fabricação: ').split('/')
        bike.fabricacao = new Date(data[2], data[1] - 1, data[0])
        bicicletas.push(bike) //Insere os dados da bike no vetor das bicicletas
        resp = String(prompt('Continuar? [S / N]')).toUpperCase() //Pergunta ao usuário se o laço continuará sendo executado
    } while(resp != 'N') //Se a resposta é diferente de N, executa novamente
    var somaAros = 0
    var maiorRoda = bike[0].roda
    var maiorRMarca = bike[0].marca
    var dtIni = prompt('Entre com uma data inicial: DD/MM/AAAA').split('/')
    var dtFim = prompt('Entre com a data final: DD/MM/AAAA').split('/')
    for(var i = 0; i < bicicletas.length; i++){
        somaAros += bike[i].aro
        if(bike[i].roda > maiorRoda){
            maiorRoda = bike[i].roda
            maiorRMarca = bike[i].marca
        }
    }
    console.log(`Média dos Aros das bicicletas: ${(somaAros/bicicletas.length).toFixed(2)}`)
    console.log(`A marca da bicicleta de maior Roda é ${maiorRMarca}, com roda de tamanho ${maiorRoda}`)
    var dataInicial = new Date(dtIni[2], dtIni[1]-1, dtIni[0])
    var dataFinal = new Date(dtFim[2], dtFim[1]-1, dtFim[0])
    for(var i = 0; i < bicicletas.length; i++){
        if(bike[i].fabricacao >= dataInicial && bike[i].fabricacao <= dataFinal){
            console.log(`Bicicleta de marca ${bike[i].marca}, fabricada em ${bike[i].fabricacao}`)
        }
    }
}