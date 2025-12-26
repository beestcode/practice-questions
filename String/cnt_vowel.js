function vowel(word){
    let vowels = "aioue"
    let letters = word.split("")
    let count = 0

    for (let i of letters){
        if(vowels.includes(i)){
            count++

        }
    }
    console.log(`we have ${count} vowels in this word`)
}
vowel("hnhgbyhnuhjkmki,ijmhybgfcsz")