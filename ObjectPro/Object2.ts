

interface empinfo 

{
    empid : number,
    empname : string,
    empsalary : number,
    empdesignation : string,
    isActive : true,
    empaddress : 
    {
        empstreet : string,
        emparea : string,
        empcity : string,
        empstate : string,
        empin : number
    }
}

let empdata : empinfo = 

{
    empid : 1525,
    empname : "Mausami",
    empsalary : 1300000,
    empdesignation : "Finance",
    empaddress : 
               {
                 empstreet : "Road No : 1",
                 emparea : "T Hub",
                 empcity : "Hyderabad",
                 empstate : "Telanagana",
                 empin : 500059
               }
}
  console.log(empdata.empdesignation)
