function duplicate(val){
    let word = val
    let result = ""
    for(let letter of word){
        if(!result.includes(letter)){
            result += letter;
        }
    }
    console.log(result)
}
duplicate("bbbaaaaattt")