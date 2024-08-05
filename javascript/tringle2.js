let n =prompt("enter number of raws: ");

function pro(n){
    for (let i = n ; i>=1; i--) {
        for (let j=i;j>=1;j--) {
            document.write("*");
        }
        document.write("<br>");
    }

}
pro(n);