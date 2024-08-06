
function add(num1,num2,callbackfn){
    let sum=num1+num2;
    callbackfn(sum);
}


function print(output){
    console.log(output);
}

add(2,4,print)


function subtract(num1,num2,callbackfn){
    let diff=num2-num1;
    callbackfn(diff)
}

subtract(3,6,print)

function multiply(num1,num2,callbackfn){
    let product=num1*num2;
    callbackfn(product)
}

multiply(5,3,print)

function division(num1,num2,callbackfn){
    let divide=num1/num2;
    callbackfn(divide);
}

division(10,5,print)

function square(num,callbackfn){
    let squarenum=num*num
    callbackfn(squarenum)
}

square(6,print)

function cube(num,callbackfn){
    let cubenum=num*num*num
    callbackfn(cubenum)
}

cube(4,print)