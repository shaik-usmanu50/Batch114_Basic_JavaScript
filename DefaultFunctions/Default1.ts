

function ticketbook( username : string, age : number, discount : string ="50% concession")
{
    if(age<60)
    {
        console.log("pay full amount as per ticket cost")
    }
    else
    {
        console.log("fare amount should be "  +discount)
    }
}
 ticketbook("RAJU", 61)