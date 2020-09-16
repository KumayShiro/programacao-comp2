main()
function main(){
    var tabelaPontos =  []
    for(let i = 0; i < 4; i++){
        tabelaPontos[i] = []
    }
    var tabelaTimes = []
    cadastrar(tabelaTimes, tabelaPontos)
    mediaPontos(tabelaTimes, tabelaPontos)
    melhorTimeSerie(tabelaTimes, tabelaPontos)
}
function cadastrar(time, pontos){
    for(let i = 0; i < 4; i++){
        let novoTime = new Object()
        novoTime.nome = String(prompt("Nome do time: "))
        novoTime.cidade = String(prompt("Cidade do time: "))
        novoTime.media = 0
        for(let j = 0; j < 3; j++){
            pontos[i][j] = Number(prompt(`Pontos do time ${novoTime.nome} na ${j + 1} série:`))
        }
        time.push(novoTime)
    }
    console.log(time, pontos)
}
function mediaPontos(time, pontos){
    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 3; j++){
            time[i].media += pontos[i][j]
        }
        time[i].media /= 3
        alert(`A média de pontos do time ${time[i].nome} é ${time[i].media.toFixed(2)}`)
    }
}
function melhorTimeSerie(time, pontos){
    for(let i = 0; i < 3; i++){
        let melhorPontuacao = pontos[0][i]
        let melhorTime = time[0].nome
        for(let j = 0; j < 4; j++){
            if(pontos[j][i] > melhorPontuacao){
                melhorPontuacao = pontos[j][i]
                melhorTime = time[j].nome
            }
        }
        alert(`A maior pontuação da série ${i + 1} é de ${melhorPontuacao}, do time ${melhorTime}`)
    }
}