function capital(val){
    let count = 0
    let words = val.split(" ")
    for(let word of words){
        if(word[0] === word[0].toUpperCase()){
            count++
        }
    }
    console.log(count)
}
capital("hey I Was just Checking how Many Words start from Capital Letter")

//using map and reduce
function capital2(val) {
    return val
        .split(" ")
        .map(word => word[0] === word[0].toUpperCase())
        .reduce((a, b) => a + b, 0);
}

console.log(capital2("hey I Was just Checking how Many Words start from Capital Letter"));