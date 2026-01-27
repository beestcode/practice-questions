function occurences(val){
    let count = 0
    let char = val.split("")
    let word = val.split("").map(char => char === char ? count++ : char)
}
occurences("hello")