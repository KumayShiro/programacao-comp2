function main(){
    var hour = Number(prompt('Hora: '))
    var minutes = Number(prompt("Minutos: "))
    var seconds = Number(prompt("Segundos:"))
    console.log(`${hour}:${minutes}:${seconds}`)
    var totalSeconds = convertToSeconds(hour, minutes, seconds)
    console.log(`A hora específicada, convertida em segundos é ${totalSeconds}`)
}
function convertToSeconds(h, m, s){
    s = s + (m * 60) + (h * 3600)
    return s
}
main()