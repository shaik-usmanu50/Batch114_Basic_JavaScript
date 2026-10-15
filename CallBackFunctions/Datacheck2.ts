

let m : number = 15;
let u : number = 25;

function addingcount()
{
    let j : number = 0;
    for(let d : number = 1; d <= 4; d++)
    {
        j += d;
    }
    console.log("THE SUM OF ALL NUMBERS : " +j)
}
  setTimeout(() : void => { addingcount();})  // making the function to call later because its taking time to print if we give 
  // d <= 555555555544644545  like this numbers thats why we have given setTimeout()........
 addingcount();
 console.log("THE SUM OF M AND U IS : " +(m+u))