//normal fizzbuzz

function fizzbuzz(){
    for (let i=1; i<=100; i++){
        if (i % 3===0 && i % 5===0){
            console.log("fizzbuzz")
        }
        else if (i % 3===0) {
            console.log("fizz")
        }
        else if (i % 5===0) {
            console.log("buzz")
        }
        else {
            console.log(i)
        }
    }
}
fizzbuzz()


// fizzbuzz by concatination and also showing which number is divisible

for (let i=1; i<=100; i++) {
    let output = '';

    if (i % 3===0) output +="fizz";
    if (i % 5===0) output +="buzz";
    
    console.log(i + " " + (output||i));
}


// fizzbuzz using ternary

for (let i=1; i<=100; i++) {
    console.log((i % 3 === 0 ? 'Fizz' : '') + (i % 5 === 0 ? 'Buzz' : '') || i);
}