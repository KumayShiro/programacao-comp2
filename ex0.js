main()
function main(){
    //Matriz 3x4 - 3 alunos com 4 notas cada
    let matriz = []
    matriz[0] = []
    matriz[1] = []
    matriz[2] = []
    cadastrarMatriz(matriz)
    calcMedias(matriz)
}
function cadastrarMatriz(m){
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 4; j++){
            m[i][j] = Number(prompt(`Informe a nota ${j} para o aluno ${i}: `))
        }
    }
}
function calcMedias(m){
    let vet = [0, 0, 0]
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 4; j++){
            vet[i] += m[i][j]
        }
        vet[i] = vet[i]/4
    }
    alert(`As médias são ${vet}`)
}