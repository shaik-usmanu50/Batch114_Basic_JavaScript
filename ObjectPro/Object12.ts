

interface king
{
    kname : string,
    kstae : string,
    kage : number
}

interface qeen
{
    qname : string,
    qstate : string,
    qage : number
}
 

 let kingdata : king = 
 {
    kname : "SHAIK USMAN",
    kstate : "ANDHRAPRADESH",
    kage : 24
 }

  let queendata : qeen = 
   {
    qname : "MAUSAMI PAIK",
    qstate : "PALASA",
    qage : 23
   }

     let kingqueen = {...kingdata , ...queendata}
      console.log(kingqueen)