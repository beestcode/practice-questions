// reverse a string

function reverse(){
    let text = "hello world"

    let reversed = text.split('').reverse().join('')
    console.log(reversed)
}

reverse()