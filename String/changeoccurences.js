function change(sentence){
    let oldword= "ball";
    let newword = "football";
    let replaced = sentence.replaceAll(oldword,newword);

    console.log(replaced)
}
change("the ball was so wet")


//without hardcoding the words
const change2 = function(sentence,oldword,newword){
    let replaced = sentence.replaceAll(oldword,newword);
    
    console.log(replaced)
}
change2("the cat is so big", "cat","bat")