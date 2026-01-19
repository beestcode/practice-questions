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
                                                                                                                                                                                                                                            
//with regex
const hange3=(sentence,oldword,newword)=>{
    let regex= RegExp(oldword, "gi");
    let replaced= sentence.replace(regex,newword)
    console.log(replaced)
}
change3("I am checking this regex", "checking","testing")