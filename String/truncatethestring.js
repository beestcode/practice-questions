function truncate(val){
    if(val.length > 10){
        console.log(val.split(" ").slice(0,3).join(" ") + "...")
    }
}
truncate("hey i was just testing if this works")