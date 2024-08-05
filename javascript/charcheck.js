let arr = [30,10,20,4,5,12];
let num1=parseInt(prompt("enter a number"));

let char=false;
 for (let i of arr){
    if (i===num1){
        char = true;
    }
 }
 if (char) {
    console.log(`${num1}is found`);
 }else{
    console.log("notfound");
 }