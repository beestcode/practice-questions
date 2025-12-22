// normal palindrome
function palindrome(){
    let words = "racecar"
    let reversed = words.split("").reverse().join("")
    if (words === reversed) return true;
    if (words !== reversed) return false;
}
console.log(palindrome())


//using arguments
function palindrome(words){
    let reversed = words.split("").reverse().join("")
    if (words === reversed){
        console.log("its a palindrome")
    }
    else{
        console.log("its not a palindrome")
    }
}
palindrome("racecar")
palindrome("hello")


//using prompt
function palindrome(){
    let words = prompt("write a word to check if its a palindrome")
    let reversed = words.split("").reverse().join("")
    
    return words === reversed
}
console.log(palindrome())



// palindrome using for loop and ignoring commas,spaces, numbers etc
function isPalindromeForLoop(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let reversedStr = '';

    for (let i = cleanedStr.length - 1; i >= 0; i--) {
        reversedStr += cleanedStr[i];
    }

    return cleanedStr === reversedStr;
}
console.log(isPalindromeForLoop("A  man, a plan, a canal: Panama")); // true
console.log (isPalindromeForLoop("hello")); // false