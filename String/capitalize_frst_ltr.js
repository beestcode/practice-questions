// Capitalize the first letter by for loop

function capitalize(){  
    let letters = ("hey capitalize us by for loop only!");
    let words = letters.split(" ");
    let capital = []
    
    for (i=0; i < words.length; i++){
        capital.push(words[i][0].toUpperCase() + words[i].slice(1))
    }
    let result = capital.join(" ");
    console.log(result);
    
}
capitalize();

//capitalize by for of loop

let capital=()=> {
    let letters = ("capitalize us by for of loop with an arrow function")
    let words = letters.split(" ")
    let capital_words = []

    for(let word of words){
        capital_words.push(word[0].toUpperCase() + word.slice(1));
    }
    let result = capital_words.join(" ");
    console.log(result)
}
capital()


// capitalizeing using map method

let sentence = "capitalize us using map method";

let result = sentence.split(" ").map(words => words[0].toUpperCase() + words.slice(1)).join(" ");
console.log(result)