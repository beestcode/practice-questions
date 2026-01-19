function truncate(val){
    if(val.length > 10){
        console.log(val.slice(0,4) + "...")
    }
}
truncate("hey i was just testing if this works")