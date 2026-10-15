

let myinfo = new Date()
console.log(myinfo)

 console.log(myinfo.getFullYear())
 console.log(myinfo.getMonth())
 console.log(myinfo.getDate())
 console.log(myinfo.getDay())
 console.log(myinfo.getHours())
 console.log(myinfo.getMinutes())
 console.log(myinfo.getSeconds())
 console.log(myinfo.getMilliseconds())


 myinfo.toISOString().split("T")[0]

 let currentdata = myinfo.toISOString().split("T")[0]
 console.log(currentdata)