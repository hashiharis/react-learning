// 1. Write a simple JavaScript function that takes two numbers as arguments and returns their
// sum.

const addNum=(x,y)=> x+y 

let sumNum=addNum(5,5)

console.log(`Sum is : ${sumNum}`)

// 2. Find Positive or Negative or Zero
// Write a program that takes a number as input and prints whether it's positive, negative, or
// zero.

let input=document.getElementById("numInput")

input.addEventListener('change',function(e){
 let num=e.target.value;
if(num<0)
    document.write (`${num} is negative`)
else if(num>0)
    document.write(`${num} is positive`)
else
   document.write(`${num} is zero`)

})

// 3. Check Palindrome
// Write a JavaScript function that accepts a string and check its palindrome or not

const checkPalindrome=(str)=>{
    
    let re=/[\W_]/g
    // Converting str to lowercase
   let value=str.toLowerCase().replace(re,"");

  let  is_Pal=value.split('').reverse().join('')

   if(is_Pal===value)
     console.log("Is palindrome")
   else
   console.log("Not a palindrome")

}

checkPalindrome("how are you")

// 4. Reverse String:
// Write a function that takes a string as input and returns the reversed version of the string.
// For example, if the input is "hello," the output should be "olleh."

const reverseString=(val)=>{
   val=val.split("").reverse().join("")

   return val
}

console.log(reverseString("how are you"))

// 5. Uppercase First Letter:
// Write a function that takes a string and capitalizes the first letter. For example, if the input is "apple,"
// the output should be "Apple."

const capitalizeFirstLetter=(word)=>{

    firstChar=word.charAt(0).toUpperCase()
    
    remainingWords=word.slice(1)

    capitalizedWord=firstChar+remainingWords

    return capitalizedWord

}

console.log(capitalizeFirstLetter("apple"))

// 6. Largest among Three Numbers:
// Write a program that takes three numbers as input and prints the largest one

const largestAmongThree=(x,y,z)=>{
      return Math.max(x,y,z)
}

console.log("Largest number is:", largestAmongThree(6,2,9))

// 7. Vowel Count:
// Write a function that takes a string as input and returns the count of vowels in the string.

const vowelCount=(checkStr)=>{
    let c=0
   vowels=["a","e","i","o","u"]
   for (let char of checkStr){
     if(vowels.includes(char)){
        c++;
     }

   }
   return c;
}

console.log("Vowel Count is:",vowelCount("hello"));

// 8.Array Sum:
// Write a function that takes an array of numbers as input and returns the sum of all the numbers.

const sumArray=(arr)=>{
 let sum=0;
    for (element of arr){
        sum+=element
    }

    return sum
}

console.log("Sum of elements in the array:",sumArray([2,4,6,4]))

// 9. Factorial:
// Write a function that calculates the factorial of a given number.

const factorial=(factNum)=>{
    
    if(factNum<0){
        return -1;
    }
    else if(factNum===0){
        return 1;
    }
    else{
        return (factNum*factorial(factNum-1))
    }
    
}

console.log(`Factorial => ${factorial(5)}`)

// 10. Longest Word:
// Write a function that takes a sentence as input and returns the longest word in the sentence.

const sentenceLength=(sentence)=>{
    let count=[];
    sentence=sentence.split(" ");
    count=sentence.map(word=>({word,length:word.length}));
    // console.log(count)
    longestWord=count.reduce((prev,current)=>{
        return (prev.length>current.length?prev:current)
    })

   return longestWord.word
}

console.log(sentenceLength("Today is a good day"))

// 11. Reverse Words in a Sentence:
// Write a function that takes a sentence as input and returns a new sentence with the words reversed.
// Example: input: Hello World output: World Hello

const reverseSentence=(normalSentence)=>{
  
    splitSent=normalSentence.split(" ");
    reverseSent=splitSent.reverse().join(" ");
    console.log(reverseSent)
}

reverseSentence("Today is holiday")

// 12. Prime Number Check:
// Write a function that checks if a given number is a prime number or not.
// Example: input 7 return true, input 9 return false

const findPrime=(primeNum)=>{

let isPrime=true;
 if(primeNum===1){
  console.log("Neither prime nor composite")
 }
 else if(primeNum>1){
    for(i=2;i<primeNum-1;i++){
        if(primeNum%i===0){
          isPrime= false;
          break;
        }
    }
    if(isPrime)
        console.log(`${primeNum} is a prime number`)
    else
    console.log(`${primeNum} is not a prime number`)
    
 }
 else{
    console.log("The number is not prime")
 }

}

findPrime(13)

// 13. Fibonacci Sequence:
// Write a function that generates the Fibonacci sequence up to a certain number of terms.
// Input 5 , output: 0, 1, 1, 2, 3

const fibonacci=(fibNum)=>{
   
    let n1=0,n2=1,nextTerm
console.log("Fibonacci Series:")
    for(let i=1;i<=fibNum;i++){
        console.log(n1)
        nextTerm=n1+n2
        n1=n2
        n2=nextTerm
    }
}

fibonacci(5)

// 14. Do these Array Operations
// • Create an array
// • Push 5 elements to the array
// • Pop 2 elements from the array
// • Print rest of the array

const myFruits=new Array("Apple","Orange","Grapes","Mango","Strawberry","Blueberry","Raspberry","Pineapple","Pomengranate","GreenApple")

myFruits.push("Dragon Fruit","Mosambi","Plums","Lichy","Banana")
console.log(myFruits)

myFruits.pop()
myFruits.pop()
console.log(myFruits)


// 15. Search item on an array
// Write a function that accepts 2 arguments, an array of strings and a search Item. If search item exists
// on the array return index of the particular item else return -1

const searchArray=(searchArr,searchItem)=>{

 if(searchArr.includes(searchItem)){
    return searchArr.indexOf(searchItem)
 }
 else{
    return -1
 }
}

console.log(searchArray(myFruits,"Strawberry"))

// 16. Reverse array
// Write a function that accepts an array and return a reversed array.
// Example Input: [1, 2, 3] Output: [3, 2, 1]

const reverseArray=(arr)=>{
  const reversedArr=arr.reverse();
  return reversedArr
}

console.log(reverseArray([1,2,3,4,5]))

// 17. Concat array
// Write a function that accepts 2 array as arguments and return a new array combined with 2
// arrays.
// Example
// Inputs [1, 2, 3], [4, 5, 6] output: [1, 2, 3, 4, 5, 6]

const joinArray=(arr1,arr2)=>{
   
    return arr1.concat(arr2)
}

console.log(joinArray([1,2,3],[4,5,6]))

// 18. Convert to Uppercase
// Write a function that accepts a string return a new string convert to uppercase.
// Input “Abc”, Output: “ABC”

const caps=(text)=>{
   return text.toUpperCase()
}

console.log(caps("Hello How are you"))

// 20. Find the largest Number
// Write a function that accepts an array, return the largest number from the array

const largestNum=(largeArr)=>{
   
    largeValue=largeArr.reduce((prev,curr)=>{
       return (curr> prev? curr: prev)
    })
    
    return largeValue
}

console.log("Largest among the array is",largestNum([1,10,20,4,5]))

// 21. Remove duplicates from array
// Write a function that accepts an array as arugment, remove duplicate from the array and return a
// new array

const dupArr=[1,2,3,4,2,3,5,3,5]
const removeDuplicates=(nonUniqueArr)=>{
    
    const uniqueArr=[...new Set(nonUniqueArr)]
    console.log("Unique Array=>",uniqueArr)

}

removeDuplicates(dupArr)

// 22. Leap Year Check:
// Write a JavaScript function isLeapYear(year) that takes a year as an argument and returns true if it's a
// leap year and false otherwise. A leap year is either:
// Divisible by 4, but not divisible by 100, or
// Divisible by 400.
// You can use the following steps:
// Check if the year is divisible by 4.
// If it is divisible by 4, check if it's not divisible by 100.
// If it is divisible by 100, check if it's also divisible by 400.
// Use the logical AND operator (&&) in your conditions.

// For example:


// function isLeapYear(year) {
    // Your code here
//    }
//    // Test cases
//    console.log(isLeapYear(2000)); // Should return true
//    console.log(isLeapYear(2021)); // Should return false
//    console.log(isLeapYear(2024)); // Should return true
//    console.log(isLeapYear(2100)); // Should return false
//    Ensure that your function handles these test cases correctly and follows the rules for leap years.

const isLeapYear=(year)=>{
    if((year%4===0 && year%100!==0) ||(year%400===0)) {
        return true
    }
    else{
        return false
    }
}

console.log(isLeapYear(2024))

// 23. Remove Specific Element:
// Write a function that accepts an array and a value, and removes all occurrences of that value from
// the array.

const myFlowers=["Rose","Orchid","Cherry Blossom","Jasmine","Rose","Hibiscus","Sunflower","Rapsol"]
const removeValue=(testArr,removeVal)=>{
     removedValueFromArr=testArr.filter(val=> val!==removeVal)
     console.log(removedValueFromArr)
}

removeValue(myFlowers,"Rose")

// 24. Smallest among Three Numbers:
// Write a program that takes three numbers as input and prints the smallest one.

const smallestAmongThree=(num1,num2,num3)=>{
    
    return Math.min(num1,num2,num3)

}

console.log(smallestAmongThree(100,10000,500000))