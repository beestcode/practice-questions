function longest(sentence){
    let words = sentence.split(" ")
    let longest = words[0]
    let all_words = []

    for(let w of words){
        if(w.length > longest.length){
            longest = w
        }
    }

    for(let w of words){
        if(w.length === longest.length){
            all_words.push(w)
        }
    }
    
    
    if(all_words.length > 1){
        console.log(`"${all_words}" are your longest words.`)
    }
    else{
        console.log(`"${longest}" is your longest word`)
    }

}

longest("hey i was just checking that which words are the longest in this sentence")
longest("sun bat row bowl")

// using reduce method

function larger(sentence){
    return sentence.split(" ").reduce((acc, word)=>{
      if(acc.longest<word.length){
        acc.longest = word.length
        acc.longestwords = [word]
      }else if(acc.longest===word.length){
        acc.longestwords.push(word)
      }
      return acc
    },{longest:0, longestwords:[]})
}
console.log(larger("sun bat row bowl cool")); 