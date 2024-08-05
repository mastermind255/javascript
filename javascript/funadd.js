// let a=parseInt(prompt("enter the value for a: "));
// let b=parseInt(prompt("enter the value for b: "));

// function add(a,b){
//     return a+b;
// }
// let result = a+b;
// document.write(result);

function add (x,y=5){   // defult parameter
    return x+y;   //when we give one value in argument it will directerlu store in left side parameter some time it gives nan when left parameter is already aasigned. 
}
let result=add(5);
document.write(result);