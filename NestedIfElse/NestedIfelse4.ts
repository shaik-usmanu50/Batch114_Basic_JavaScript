

let marks : number = 80;
if(marks > 35 && marks <50)
{
    console.log("MAUSAM IS JUST PASSED")

}
 else if(marks > 50 || marks < 60) // true so this condition will execute and the remaining will not execute, coz if condition is true than its going for else condition
       {
        console.log("MAUSAMI GOT SECOND CLASS")
       }
       else if(marks > 60 || marks < 75)
             {
                console.log("MAUSAI GOT FIRST CLASS") 
             }
             else if(marks > 80) 
                  {
                    console.log("MAUSAMI GOT DISTINCTION")
                  }
                  else 
                  {
                    console.log("MAUSAMI GOT FAILED")                 
                  }
                  
