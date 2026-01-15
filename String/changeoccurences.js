function change(sentence){
    let oldword= "ball";
    let newword = "football";
    let replaced = sentence.replaceAll(oldword,newword);

    console.log(replaced)
}
change("the ball was so wet")