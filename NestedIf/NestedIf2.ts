

let m : number = 25
let u : number = 40
let j : number = 30
if(m > j) // false so if 1st condition is False than the remaining conditions are not going to execute and the output will be nothing
{
    console.log("M IS LESS THAN J")
    if(u > j)
    {
        console.log("J IS LESS THAN M")
         if(m < u)
         {
            console.log("U SI MORE THAN M")
         }
    }
}