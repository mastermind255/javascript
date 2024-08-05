// let n = prompt("enter n: ");
// let square = "";

// for (let i=1;i<=n;i++) {
//     for (let j=1; j<=n; j++) {
//         square+="*";  
//     }
//     square+="\n";
// }
// console.log(square);


// -----------tringle-----------
// let n = prompt("enter n: ");
// let square = "";

// for (let i=1;i<=n;i++) {
//     for (let j=1; j<=i; j++) {
//         square+="*";  
//     }
//     square+="\n";
// }
// console.log(square);

let n = prompt("Enter the number of rows for the pyramid: ");
let pyramid = "";

for (let i = 1; i <= n; i++) {
    // Add spaces before the asterisks
    for (let j = 1; j <= n - i; j++) {
        pyramid += "_"; 
    }
    // Add asterisks
    for (let k = 1; k <= (2 * i - 1); k++) {
        pyramid += "*";
    }
    // Move to the next line
    pyramid += "\n";
}

console.log(pyramid);