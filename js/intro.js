// Variables and data types
// Primitive Types-number,strings,boolean

//Global scope-All variables are global scope, as they are directly called in the file
let x=5;//number 
const y=10;// number
let name="Hashi"; //string
var lastName="Haris"; //String

console.log(x,y,name,lastName);

function fullName(){
    let bestFriend="Elena";
    console.log(bestFriend);  /* variables defined with let/ const have block scope, ie, they will be accessible only within 
    a particular block (for eg: block of an if condition or any block surrounded by {}), here we can access the bestFriend value since it is defined
    within the function, but if we call it inside another nested block or outside function it will show reference error */
    if(lastName){
       var name="John";
       let friend="Emily";
       const age="20";
    }
   /* console.log(name);  we can access value of name as John outside of the if-block, 
                          because var is always functional scope - variables declared with var can be accessed anywhere 
                          inside a function*/
    
  /*  console.log(friend);  as we mentioned above, let/const is block scoped, so the value of friend will be accessed 
    only within the if block and not outside it */
   
    /*console.log(age);  block scoped-not accessible outside the if block */
}

fullName();

// Operators

let a=2;
console.log("Post-increment",a++)  // post-increment
console.log("After Post-increment",a) // a logs 3, it first prints a and then increments the value of a 

let b=4;
console.log("Pre-increment",++b) //pre-increment , first increments b and logs 5.

let c=5;
console.log("Post-decrement",b--)// c logs 5, it first logs 5 and then decrements value of b
console.log("After Post-decrement",b)

let d=7;
console.log("Pre-decrement",--d) // first decrements the value of d and logs it.

let e=5;
let f=10;

console.log("5%10=",e%f) //Modulus
console.log("5**10=",e**f) //Exponential
console.log("5+10=",e+f)  //Addition
console.log("5-10=",e-f) //Subtraction
console.log("5/10=",e/f)// Division
console.log("5*10=",e*f)//Multipilcation


var num1=10;
var num2="10";

console.log(" equal to", num1==num2);
console.log("double equality,checks the type also",num1===num2)

console.log("Not equal to",num1!=num2);
console.log("Not strict equal to",num1!==num2);


var num4=5;
var num5=15;

console.log(num4>num5);
console.log(num5>num4);
console.log(num4<num5);

var num6=6;
var num7=6;
if(num6>=num7){
 console.log("Executes if block");
}
else{
  console.log("Executes else block");
}

var num8=6;
var num9=3;

if(num8<=num9){
  console.log("Executes if block");
}
else{
  console.log("Executes else block");
}

var num=5;

var num3=20;

console.log("Will increment num by 5, ans is",num+=5);

console.log("Will decrement num by 5 ans is",num3-=5);

console.log("Will multiply num by 5 ans is",num*=5);

console.log("Will divide by 5 ans is",num/=5);

console.log("will give modulus of 5 ans is",num%=5);




