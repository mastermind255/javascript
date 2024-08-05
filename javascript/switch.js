let opr=prompt("enter operator");
a=30;
b=4;

switch (opr) {
    case "+":{
        result=a+b;
        document.write(result);
        break;
    }
    case "-":{
        result=a-b;
        document.write(result);
        break;
    }
    case "*":{
        result=a*b;
        document.write(result);
        break;
    }case "/":{
        result=a/b;
        document.write(result);
        break;
    }default:{
        result = "invalid operator";
        document.write(result);
    }   
}
