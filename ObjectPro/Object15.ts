

interface stdinfo

{
    stdname : string,
    stdid : number,
    stdcourse : string,
    isActive : true,
    stdlocation : 
           {
            stdstreet : string,
            stdarea : string,
            stdcity : string,
            stdstate : string
            
           }
}

 let stddata : stdinfo = 
  {
    stdname : "MAUSAMI",
    stdid : 1525,
    stdcourse : "B.COM CA",
    isActive : true,
    stdlocation : 
            {
                stdstreet : "ROAD NO : 2",
                stdarea : "KOLLUR PHASE 2",
                stdcity :"HYDERABAD",
                stdstate : "ANDHRAPRADESH"
            }
  } 
    
   console.log(Object.entries(stddata))
