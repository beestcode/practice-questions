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