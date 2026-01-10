function vowel(word){
    let vowels = "aioue"
    //we wont split it because strings are already itereble
    // let letters = word.split("")
    let count = 0

    for (let i of word){
        if(vowels.includes(i)){
            count++
        }
    }
    console.log(`we have ${count} vowels in this word`)
}
vowel("hnhgbyhnuhjkmki,ijmhybgfcsz")