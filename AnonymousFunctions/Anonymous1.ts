

 function playername(name : string) : void
 {
     console.log(name)
 }
  playername("MAUSAMI")

   function playerplay(game : (name : string) => void) : void
   {
     game("CRICKET")
   }
    playerplay(playername) 