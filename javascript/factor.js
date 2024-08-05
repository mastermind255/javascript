let num = parseInt(prompt("Enter the number to find factor: "));
let n = [];

for (let i = 0; i <= num; i++) {
    if (num%i===0) {
        n.push(i);
    }
}
console.log(n);