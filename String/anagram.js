function anagram(str1, str2){
    let frst_wrd = str1.toLowerCase().replace(/\s/g,"").split("").sort().join("")
    let scnd_wrd = str2.toLowerCase().replace(/\s/g,"").split("").sort().join("")
    if(frst_wrd === scnd_wrd){
        console.log("they are anagram")
    }
    else{
        console.log("they are not anagram")
    }
}
anagram("hello", "world");
anagram("hello", "olleh");
anagram("Listen", "Silent");
anagram("Dormitory", "Dirty Room");