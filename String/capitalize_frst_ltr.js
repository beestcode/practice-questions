// Capitalize the first letter of each word in a string

// function capitalize(){  
//     let letters = ("hey capitalize first letter of each one word !");
//     let words = letters.split(" ");
//     let capital = []
    
//     for (i=0; i < words.length; i++){
//         capital.push(words[i][0].toUpperCase() + words[i].slice(1))
//     }
//     let result = capital.join(" ");
//     console.log(result);
    
// }

// capitalize();


// capitalizeing using map method

let sentence = "capitalize us using map method";

let result = sentence.split(" ").map(words => words[0].toUpperCase() + words.slice(1)).join(" ");
console.log(result)