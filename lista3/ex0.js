main()
function main(){
    var notasAlunos = []
    for(let i = 0; i < 3; i++){
        notasAlunos[i] = []
    }
    var nomesAlunos = []
    cadastroNomesAlunos(nomesAlunos)
    cadastroNotaAlunos(notasAlunos)
    mediaNotas(notasAlunos, nomesAlunos)
    maiorNotaProva(nomesAlunos, notasAlunos)
    menorNotaAluno(nomesAlunos, notasAlunos)
}
function cadastroNomesAlunos(nomes){
    for(let i = 0; i < 3; i++){
        let aluno = new Object()
        aluno.nome = String(prompt(`Entre com o nome do ${i + 1}° aluno: `))
        aluno.cod = Number(prompt("Entre com o código desse aluno: "))
        aluno.med = 0
        nomes.push(aluno)
    }
    console.log(nomes)
}
function cadastroNotaAlunos(notas){
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 4; j++){
            notas[i][j] = Number(prompt(`Entre com a nota da ${j + 1} prova para o ${i + 1} aluno: `)) 
        }
    }
    console.log(notas)
}
function mediaNotas(notas, nomes){
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 4; j++){
            nomes[i].med += notas[i][j]
        }
        nomes[i].med /= 4
        alert(`A média de ${nomes[i].nome}, de código ${nomes[i].cod}, é ${nomes[i].med}`)
    }
}
function maiorNotaProva(nome, nota){
    for(let j = 0; j < 4; j++){
        let maiorNota = nota[0][j]
        let nomeMaiorNota = nome[0].nome
        for(let i = 0; i < 3; i++){
            if(nota[i][j] > maiorNota){
                maiorNota = nota[i][j]
                nomeMaiorNota = nome[i].nome
            }
        }
        alert(`A maior nota da ${j + 1}ª prova é ${maiorNota}, do aluno ${nomeMaiorNota}`)
    }
}
function menorNotaAluno(nomes, notas){
    for(let i = 0; i < 3; i++){
        let menorNota = notas[i][0]
        for(let j = 0; j < 4; j++){
            if(notas[i][j] < menorNota){
                menorNota = notas[i][j]
            }
        }
        alert(`A menor nota do aluno ${nomes[i].nome} é ${menorNota}.`)
    }
}