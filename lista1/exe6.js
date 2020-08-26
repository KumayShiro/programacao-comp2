function main(){
    var gen = String(prompt("Gênero: [M/ F]")).toUpperCase()
    var heig = Number(prompt("Altura: "))
    var res = calcIdealWeight(gen, heig)
    console.log(`Peso ideal: ${res.toFixed(2)}`)
}
function calcIdealWeight(g, h){
    var idealWeight
    switch(g){
        case "F":
            idealWeight = ((62.1 * h) - 44.7)
            break
        case "M":
            idealWeight = ((72.7 * h) - 58)
            break
        default:
            idealWeight = 0
    }
    return idealWeight
}
main()