//camelCase
const sentence = (val)=>{
    return val
    .toLowerCase()
    .split(" ")
    .map((word , i) => i === 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join("");
}
console.log(sentence("hello world this is javascript"))

//snake_case
const sentence2 = (val)=>{
    return val
    .toLowerCase()
    .split(" ")
    .join("_");
}
console.log(sentence2("hello world this is javascript"))