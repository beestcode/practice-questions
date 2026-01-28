function occurences(val){
    let count = {}
    for(let char of val){
        if(count[char]){
            count[char]++
        }
        else{
            count[char]=1
        }
    }
    console.log(count)
}
occurences("hellooo")