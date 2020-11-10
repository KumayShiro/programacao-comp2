/* Crie uma classe em JS chamada Aluno contendo as variáveis numeroAluno, nome , idade, p1 e p2,
Faça a instanciação da classe Aluno (atribuição das variáveis de instância com quaisquer valores e chamada dos métodos notaFinal() e mostra()).  
Adicionar o método passou() à classe Aluno a fim de verificar se o aluno passou. Chame o método passou() a fim de testa-lo.
 */
class Aluno{
    constructor(cod, nome, idade, no1, no2){
        this.cod = Number(prompt(`Código do aluno: `))
        this.nome = String(prompt(`Nome do aluno: `))
        this.idade = Number(prompt(`Idade: `))
        this.no1 = Number(prompt(`Primeira nota: `))
        this.no2 = Number(prompt(`Segunda nota: `))
    }
    //Crie os métodos notaFinal() - que calcula e retorna a média final do aluno - , e mostra() - que retorna os valores de numeroAluno, nome e idade.
    mostrar = () => {
        console.log(`Informações requisitadas - Número do aluno: ${this.cod} | Nome do aluno: ${this.nome} | Idade do Aluno: ${this.idade} | Média do aluno: ${this.mediaFinal()}`)
    }
    mediaFinal = () =>{
        var x = (this.no1 + this.no2) / 2
        return x
    }
    passou = () =>{
        if(this.mediaFinal() >= 6){
            console.log(`Aluno aprovado.`)
        }else{
            console.log(`Aluno reprovado.`)
        }
    }
}
aluno1 = new Aluno()
aluno1.mostrar()
aluno1.passou()
aluno2 = new Aluno()
aluno2.mostrar()
aluno2.passou()