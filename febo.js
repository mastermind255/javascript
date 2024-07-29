let n= parseInt(prompt("enter a limit: "));
let a=0 ;
let b=1 ;
document.write(a,'\t');
document.write(b,'\t');
for (let i=0;i<n;i++) {
    let c=a+b;
    document.write(c,'\t');
    if(n===c){
        break;
    }
    a=b;
    b=c;
}
