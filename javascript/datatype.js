// in two type of datattypes there one is primitive and another is nonprimitive.

// primitve

let a=5;//datatype number.
let b=33.333//datatype number.
console.log(typeof b); // typeof is use to show the data type of a variable.

let name="soumitra";//datatype string.
console.log(typeof name);

let abc=null;// datatype object 
console.log(typeof abc);
// when we store the null value in a variable it mean the variable take the empty storage in memory without anything.

let ram;// datatype undefind.
console.log(typeof ram);
// when we cannot store any value in then that contain undefind datattype;

let phone=BigInt("2337477377373737") // data type BigInt.
console.log(typeof phone);// for print anything in js we use console.log.

let sym=Symbol("3433#jshhhdh");//datatype symbol
console.log(typeof sym);
// in symbol datatype we use print what we want to be print.

//non-primitive

let car ={
    "brand":"furtuner",
    "color":"black",
    "price":2000000,
    "miledge":"40kmph"
}

console.log(typeof car);
console.log(car.brand);// we can also print the value like this.
console.log(car ["price"]);//we can also print the value like this.

let fruits=["apple","banana","guava","mango"]
console.log(fruits);
console.log(typeof fruits);

