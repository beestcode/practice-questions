function capitalize(){  
    let letters = ("hey capitalize first letter of each one word !");
    let words = letters.split(" ");
    let capital = []
    
    for (i=0; i < words.length; i++){
        capital.push(words[i].charAt(0).toUpperCase() + words[i].slice(1))
    }
    let result = capital.join(" ");
    console.log(result);
    
}

capitalize();
