function main(){
    var word1 = String(prompt('Primeira palavra: '))
    var word2 = String(prompt('Segunda palavra: '))
    var index = compareStrings(word1, word2)
    console.log(`O resultado é ${index}`)
}
function compareStrings(wo, wt){
    var m
    if(wo.length >= wt.length){
        m = wo
    } 
    else{
        m = wt
    }
    if(wo == wt){     
        return 0
    }
    else{
        for(var i = 0; i < m.length; i++){
            if(wo[i] != wt[i]){
                return i + 1
            } 
        }
    }
}
main()