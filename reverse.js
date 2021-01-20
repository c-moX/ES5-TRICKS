// Reverse of the word/string numbers:
function reverseString(str){
    var reverse = "";

    for(var i = 0; i<str.length; i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}

var statement = "Hello alien i'm here";
var forAlien = reverseString(statement);

console.log(forAlien);
