function camelCase(val){
    let words = val.replaceAll("_","-")
    let word = words.split("-")

    let result = word[0].toLowerCase()
    for(let i = 1; i<word.length; i++){
        let scnwrd = word[i]
        result += scnwrd[0].toUpperCase() + scnwrd.slice(1).toLowerCase()
    }
    return result;
}
console.log(camelCase("hello_world"))
console.log(camelCase("hello_world_and-you"))

//using map and regex
function camelCase(val){
    return val
        .toLowerCase()
        .split(/[-_]/)
        .map((w, i) => i === 0 ? w : w[0].toUpperCase() + w.slice(1))
        .join('');
}
console.log(camelCase("hello_world"));