function truncate(val, limit){
    if(val.length > limit){
        console.log(val.split(" ").slice(0,3).join(" ") + "...")
    }
}
truncate("hey i was just testing if this works", 10)