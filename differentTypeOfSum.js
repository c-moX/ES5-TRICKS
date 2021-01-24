//
//Step: 01
function add(firstNum, secondNum, thirdNum){ //Direct array input
    var sum = firstNum + secondNum + thirdNum;
    return sum;
}
//Step: 02
function add2(numbers){ //Array index number input
    var sum = numbers[0] + numbers[1] + numbers[2];
    return sum;
}
//Step: 03
function add3(numbers){ //Any kind of array number input
    var sum = 0;
    for(var i = 0; i < numbers.length; i++){ //loop
        if(numbers[i] > 0){ //condition in loop
            sum = sum + numbers[i];
        }
    }
    return sum;
}

var result = add3(1,2,3,4,5);
console.log(result);
