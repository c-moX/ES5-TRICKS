//1,1,2,3,5,8,13,21,34,55 = 10;
//For fibonacci = call to the out of function// forLoop/whileLoop// 01
function fibonacciIterative(num){
    var fibo = [1, 1];
    for(var i = 2; i<= num; i++){
        var nextfibo = fibo[i-1] + fibo[i-2];
        fibo.push(nextfibo);
    }
    return fibo;
}

//1,1,2,3,5,8,13,21,34,55 = 10;
//For recursion = call to in own function// 02
function fibonacciRecursive(num){
    //Stopping condition
    if (num == 0) {
        return [1];
    }
    if (num == 1) {
        return [1, 1];
    }
    //Recursive call
    var fibo = fibonacciRecursive(num -1);
    var nextfibo = fibo[num-1] + fibo[num-2];
    fibo.push(nextfibo);
    return fibo;
}

//Fibonacci
var result = fibonacciIterative(10); // Enter your fibonacci value
console.log(result);
//Recursion
var result2 = fibonacciRecursive(10);
console.log(result2);
