/* VIACEP - viacep.com.br/ws/cep/json/
wb > web service
{
  "cep": "14404-281",
  "logradouro": "Rua Luciano Villaça",
  "complemento": "",
  "bairro": "Jardim Aviação",
  "localidade": "Franca",
  "uf": "SP",
  "ibge": "3516200",
  "gia": "3104",
  "ddd": "16",
  "siafi": "6425"
}
*/
funcaoAPI = () => {
    let cep = Number(document.getElementById('input#CEP').value)
    let req = new XMLHttpRequest()
    let url = `viacep.com.br/ws/${cep}/json`
    req.open('GET', url, true) //Abre a requisição com a variável url definida
    req.send() //Envia a requisição
    req.onload = () => {
        //Transforma a resposta em JSON (chave: valor)
        let res = JSON.parse(req.responseText) 
        document.getElementById(`#log`).innerHTML = `${res.logradouro}`
        document.getElementById(`#bairro`).innerHTML = `${res.bairro}`
        document.getElementById(`#local`).innerHTML = `${res.localidade}`
        document.getElementById(`#uf`).innerHTML = `${res.uf}`
    }
}