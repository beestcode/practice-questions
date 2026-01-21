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