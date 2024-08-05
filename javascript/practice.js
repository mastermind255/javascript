let str = "Hello World";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
console.log(str.length);
console.log(str.search("World"));//it gives starting index number if the string word is present it gives -1 if the word is not present .
console.log(str.includes("Hello"));//it gives the true if the word is present it gives false if it is not present. 
console.log(str.match("World"));
// word="World"
console.log(str.indexOf("W"));
console.log(str.lastIndexOf("l"));
console.log(str.charAt(6));
console.log(str.charAt(str.length-1));
console.log(str.charAt(-4));// it returns only a space' '.
console.log(str.at(8));
console.log(str.at(-5));//at take negative index.
console.log(str[4]);
console.log(str[str.length-1]);
console.log(str.slice(0,4));
console.log(str.slice(0,str.length));
console.log(str.slice(-4));//it give the charcters till _4.
console.log(str.substring(2,5)); 
console.log(str.substring(-2));//it not working it returns full value of variable.because slice not support negetive index.
console.log(str.substr(1,4));
console.log(str.substr(-3,2));//here the right value means how much step it go if there is a negative value in left value.
console.log(str.substr(-3,-2));//it only giv the space not working.
console.log(str.charCodeAt(1));
console.log(str.charCodeAt(0));
let str1="Good Morning";
console.log(str.concat(" ",str1));
console.log(str1.replace("Morning","afternoon"));
console.log(str1.replace('o','*'));
console.log(str1.replaceAll('o','*'));
str2="       hello      ";
console.log(str2);
console.log(str2.trim());
console.log(str1.split(" "));
console.log("Hello\nWorld");
console.log("Hello\tWorld");
console.log("Hello\bWorld");
