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

//for multiple words
function duplicate1(sentence) {
    let result = "";
    for (let char of sentence) {
        if (result === "" || char !== result[result.length - 1]) {
            result += char;
        }
    }
    console.log(result);
}
duplicate1("bbbaaattt aaanndddd bbbbaall");