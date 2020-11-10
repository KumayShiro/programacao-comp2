class Carro {
    constructor(marca, modelo, ano, velocidade, motor){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.velocidade = velocidade
        this.motor = motor
    }
    mostrar(){
        console.log(this)
    }
    vel(x){
        if(!this.motor){
            this.motor = true
        }
        this.velocidade = this.velocidade + x
    }
    velMenos(x){
        if(!this.motor){
            this.motor = true
        }
        this.velocidade = this.velocidade - x
    }
}

//Ambos comandos abaixo chamam a função construtor
//this. representa o primeiro objeto
let obj1 = new Carro("GM", "Onyx", 2019, 0, false)
//this. representa o segundo objeto
let obj2 = new Carro("FIAT", "Palio", 2020, 0, false)
let x
x = Number(prompt("Aumentar a velocidade em quanto?"))
obj1.vel(x)
x = Number(prompt("Diminuir a velocidade em quanto?"))
obj1.velMenos(x)
x = Number(prompt("Aumentar a velocidade em quanto?"))
obj2.vel(x)
obj1.mostrar()
obj2.mostrar()