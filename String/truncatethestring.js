//word based
function truncate(val, limit){
    if(val.length > limit){
        console.log(val.split(" ").slice(0,limit).join(" ") + "...")
    }
}
truncate("hey i was just testing if this works", 3)

//char based
function truncate1(val, limit){
    if(val.length >= limit){
        return val.slice(0,limit) + "...";
    }
    return val
}
console.log(truncate1("hey i was just testing if this works", 10))

//char based without space at the end
function smartTruncate(val, limit){
    if(val.length <= limit) return val;

    let cut = val.slice(0, limit);

    // Avoid cutting inside a word
    if(val[limit] !== " "){
        cut = cut.split(" ").slice(0, -1).join(" ");
    }

    return cut + "...";
}

console.log(smartTruncate("hey i was just testing if this works", 12));
