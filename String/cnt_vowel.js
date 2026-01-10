function vowel1(word){
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
vowel1("hnhgbyhnuhjkmki,ijmhybgfcsz")

//for loop
const vowel2 = function(word){
    let vowels = 'aeiou'
    let count = 0

    for (i=0; i<word.length; i++){
        if (vowels.includes(word[i])){
            count++
        }
    }
    console.log(`we have ${count} vowels in this word`)
}

vowel2("hello")