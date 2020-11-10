/* Implemente em JS uma classe chamada Rio contendo as variáveis nome, nível e poluído (sim/não). Essa classe deve possuir o  método construtor, e ainda os métodos: */

//•	chover(float): que aumenta o nível atual do rio;
//•	ensolarar(float): que diminui o nível atual do rio;
//•	limpar(): que limpa o rio;
//•	sujar(): que polui o rio;
//•	mostra(): que mostra todas as informações do rio.

class Rio{
    constructor(nome, nivel, pol){
        this.nome = nome
        this.nivel = nivel
        this.pol = pol
    }
    chover = () => {
        let chuva = Number(prompt("CHUVA: Qual a previsão para aumento de nível do rio? "))
        this.nivel = this.nivel + chuva
        console.log(`Nível do rio aumentado em ${chuva}`)
    }
    ensolarar = () => {
        let sol = Number(prompt("ENSOLARADO: Qual a previsão para diminuição do nível do rio? "))
        this.nivel = this.nivel - sol
        console.log(`Nível do rio reduzido em ${sol}`)
    }
    limpar = () => {
        if(x == "sim"){
            this.pol = false
            console.log("Rio limpo!")
        }else{console.log("Estado do rio não modificado.")}
    }
    sujar = () => {
        if(x == "sim"){
            this.pol = true
            console.log("Rio poluído!")
        }else console.log("Estado do rio não modificado.")
    }
    mostra = () => {
        console.log(`Nome do rio: ${this.nome} | Nível do rio: ${this.nivel} | Estado de poluição: ${this.pol}`)
    }
}
let x
let rio1 = new Rio("Ibirapuera", 300, false)
rio1.chover()
x = String(prompt("Sujar rio? [sim | não]")).toLowerCase()
rio1.sujar(x)
rio1.mostra()

let rio2 = new Rio("Santos", 500, true)
rio2.ensolarar()
x = String(prompt("Limpar rio? [sim | não]")).toLowerCase()
rio2.limpar(x)
rio2.mostra()