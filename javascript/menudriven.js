do{
    option=parseInt(prompt("menu:\n1.lengthof string\t2.no of words \t3.exit \n enter your choice"));

    switch (option) {
        case 1:{
            let str=prompt("enter sting");
            console.log(`the length of ${str} is: ${str.length}`);
            break;
        }
        case 1:{
            let str=prompt("enter sting");
            console.log(`the no of words in  ${str} is: ${str.split(" ").length}`);
            break;
        }
        case 1:{
            console.log("exiting...");
            break;
        }
        default:alert("invalid choice");
            break;
    }
}while (Option!==3)