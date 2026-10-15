

let myvillagenames : Map<number, string> = new Map

myvillagenames.set(123, "true" )
myvillagenames.set(123456, "three")
myvillagenames.set( 1525,"INK")
myvillagenames.set(564241, "tuni")
myvillagenames.set(15255251, "tanuku")
myvillagenames.set( 2515,"DAY")
myvillagenames.set( 1215,"HELLO")
myvillagenames.set(2003, "NO")
myvillagenames.set(2002, "INK")

 for(let M of myvillagenames.keys()) // it prints only the keys 
 {
    console.log(M)
 }
 