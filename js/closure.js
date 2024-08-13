function parentFunction(){
    let parentScope="I am in parent function"
    function childFunction(){
        let childScope="I am in child function"
        console.log("Called from child fn",parentScope)// Parent fn variables are placed in a closure environment, so it can be invoked 
                                                        // within the child function
        console.log("Called from child fn",childScope)
    }
    childFunction()
    // console.log(childScope)//Parent fn or outside fn doesn't have access to it child function variables
}
parentFunction()

function makeProduct(x){
    return function (y){
        return x*y
    }
}

let prod2=makeProduct(5) // x=5 passed in makeProduct fn which returns a fn prod2

console.log(prod2(2))//10 y=2 passed into returning function from makeProduct and x is accessible in returning child function 

let prod6=makeProduct(10)

console.log(prod6(6))//60