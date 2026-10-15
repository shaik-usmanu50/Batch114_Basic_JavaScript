

let A : string = ""
for(let r : number = 5; r >= 1; r--)
{
    for(let c : number = 1; c <= 8; c++)
    {
        A += r;
    }
    A += "\n"
}
console.log(A)