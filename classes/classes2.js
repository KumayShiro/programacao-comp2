/* Implemente em JS uma classe chamada Produto contendo as variáveis id , descrição , qtde  e preco . Essa classe deve possuir o método construtor e ainda os métodos:
•	comprar(int x): que compra um produto aumentando em x a quantidade em estoque;
•	vender(int x): que vende um produto diminuindo em x a quantidade em estoque;
•	subir(float x): que aumenta o preço do produto em x unidades;
•	descer(float x): que diminui o preço do produto em x unidades;
•	mostra(): que mostra todas as informações do produto
 */
class Produto{
    constructor(id, desc, qnt, val){
        this.id = Number(prompt(`Informe o Identificador do produto: `))
        this.desc = String(prompt(`Descrição: `))
        this.qnt = Number(prompt(`Quantidade em estoque: `))
        this.val = Number(prompt(`Preço do produto: R$`))
    }
    comprar = (x) => {
        this.qnt = this.qnt + x
    }
    vender = (x) => {
        if(this.qnt - x >= 0){
            this.qnt = this.qnt - x
        }else{console.log(`O valor informado não pode ser subtraído.`)}
    }
    subir = (x) => {
        this.val = this.val + x
    }
    descer = (x) => {
        if(this.val - x >= 0){
            this.val = this.val - x
        }else{console.log(`O valor informado nao pode ser subtraido.`)}
    }
    mostrar = () => {
        console.log(`-- Informações do produto ${this.id} -- \n Descrição: ${this.desc} \n Quantidade em estoque: ${this.qnt} \n Valor Unitário: ${this.val} `)
    }
}
prd1 = new Produto()
prd1.mostrar()
let x
x = Number(prompt(`Quantia para compra: `))
prd1.comprar(x)
x = Number(prompt('Diminuir preço: '))
prd1.descer(x)
prd1.mostrar()

prd2 = new Produto()
prd2.mostrar()
x = Number(prompt(`Quantia para venda: `))
prd2.vender(x)
x = Number(prompt(`Subir preço: `))
prd2.subir(x)
prd2.mostrar()
