

let A : string = ""
for(let r : number = 1; r <= 5; r++)
{
    for(let c : number = 1; c <= 9; c++)
    {
        A += c 
    }
     A += "\n"  // this moves to next line
}
console.log(A)