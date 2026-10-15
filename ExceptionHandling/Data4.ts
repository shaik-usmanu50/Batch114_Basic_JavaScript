

let a : number = 68;
let b : number = 44;


try
{
    let c : string[] = new Array(-5);
    console.log("THE NUMER STORED IN NEW ARRAY IS : " +c.length)
}
catch(myerrmsg)
{
    console.log(" array length should be POSITIVE INTEGERS")
}
console.log("THE SUM OF A AND B IS : " +(a+b))