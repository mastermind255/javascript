// let char = prompt("enter a char: ");

// if (char == 'a' || char == 'e' || char == 'i' || char == 'o'|| char == 'u'||char == 'A' || char == 'E' || char == 'I' || char == 'O'|| char == 'U') {
//     document.write(char+' '+ "char is vowel");   
// }else{
//     document.write(char+' '+"char is not a vowel");  
// }

let char = prompt("Enter the character").toLowerCase();

switch (char) {
    case 'a':
        document.write('vowel');
        break;
    case 'e':
        document.write('vowel');
        break;
    case 'i':
        document.write('vowel');
        break;
    case 'o':
        document.write('vowel');
        break;
    case 'u':
        document.write('vowel');
        break;

    default:
        document.write('consonent');
        break;
}