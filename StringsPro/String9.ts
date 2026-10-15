

 let myinfo : string = "MY CAR NAME IS : I20 MY CAR ENGINE NO : 1525@@%1525"
 let removespecial : string = myinfo.replace(/[^A-Za-z0-9]/g, "")
 console.log(removespecial)