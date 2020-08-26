main()
function main(){
    var population = []

    do{
        var option = Number(prompt("Digite conforme o desejado: \n [1]. req1 \n [2]. req2 \n [3]. req3 \n [4]. req4 \n [5]. req5 \n [6]. Sair do programa"))
        switch(option){
            case 1:
                request1(population)
                break
            case 2:
                request2(population)
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