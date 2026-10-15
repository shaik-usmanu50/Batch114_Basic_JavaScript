

let A : string = ""
for(let r : number = 5; r >= 1; r--)
{
    for(let c : number = 1; c <= r; c++)
    {
        A += c;
    }
    A += "\n"
}
console.log(A)