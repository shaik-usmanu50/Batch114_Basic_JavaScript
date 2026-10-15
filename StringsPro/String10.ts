

 let myinfo : string = "MY CAR NAME IS : I20 MY CAR ENGINE NO : 1525@@%1525"
let mycount : number = myinfo.length;
console.log(mycount)


let newarray : string[] = myinfo.split(" ")
console.log("THE NUMBER OF WORDS IN THE GIVEN STRING IS : " +newarray.length)


console.log(newarray[2])