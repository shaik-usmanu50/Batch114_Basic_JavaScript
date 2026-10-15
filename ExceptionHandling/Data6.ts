

let a : number = 50;
let b : number = 40;

try
{
    let c : string[] = new Array(-6)
    console.log("THE NUMBER ELEMENTS STORED IN NEW ARRAY IS :  " +c.length)  // invalid array length shows
}
catch(myerrmsg)
{
    console.log(myerrmsg)
}
console.log("THE SUM OF A AND B IS : "+(a+b))  // this will be prints