function main(){
    var radius = Number(prompt("Raio da esfera: "))
    var size = calcSphereVolume(radius)
    console.log(size)
}
function calcSphereVolume(rd){
    var res
    var vol
    if(rd <=0){
        res = "Nao é possível cálcular com raio núlo ou negativo!"
    } else {
        vol = (4 * (Math.PI) * (rd ** 3)) / 3
        res = `O volume da esfera é de ${(vol.toFixed(2))} m³` 
    }   
    return res
}
main()