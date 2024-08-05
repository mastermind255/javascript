let arr=[10,20,30,40,50,60];
console.log(arr);
console.log(arr.push(70));
console.log(arr);
console.log(arr.pop(70));
console.log(arr);
console.log(arr.toString());
console.log(arr);
console.log(arr.unshift(70));
console.log(arr);
console.log(arr.shift(70));
console.log(arr);
console.log(arr.slice(3,5));
console.log(arr);
console.log(arr.splice(1,0,68));//add operation by splice.
console.log(arr);
console.log(arr.splice(1,0,68,40,30));//add multiple items.
console.log(arr);
console.log(arr.splice(0,1,-10));//replace operation.
console.log(arr);
console.log(arr.splice(0,3,100));// it delete 3 elements from 0 index and print 100.
console.log(arr);
console.log(arr.splice(2,1));//it delete the element from 2 index.
console.log(arr);
console.log(arr.splice(4));// delete 4 index value.
console.log(arr);
console.log(arr.indexOf(20));
console.log(arr.lastIndexOf(30));
console.log(arr.includes(20));
console.log(arr.sort())//it will sort in desc.
console.log(arr.reverse());
let dict={
    "brand":"uv",
    "top":"25kmph",
}
console.log(dict);
console.log(dict.price = 700000);
console.log(dict);
console.log(delete dict.price);
console.log(dict);

