// bitwise operator

let a = 4;
let b = 2;
console.log(a&b);// here using single and operator.
console.log(a|b);// here using single or operator.
console.log(a^b);// here using xor operator.
console.log(~a);//here using negation.
console.log(4>>1);// here we use right shift operator;
console.log(6<<2);//here we use left shift operator.


let abc = [30,40,55,50]

console.log(abc instanceof Array);//it check the value of a datatype.
console.log(abc instanceof Object);

// ternary operator .

console.log(a>b?a:b);// when condition will true it returns a rather it give b.


fname = prompt("Enter your full name: ");
document.write("welcome!",fname); 

alert("invalid syntax");

status = confirm ("are you sure to submit details");
document.write(status);


// condition 

number = prompt ("enter a number");
if((number % 2) === 0 ){
    document.write("number is even");
}
else{
    document.write("number is odd");
}