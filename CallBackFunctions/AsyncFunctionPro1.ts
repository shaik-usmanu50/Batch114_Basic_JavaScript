

function agevalidate()
{
    return new Promise((resolve, reject) =>
    {
        let age : number = 15;
        if(age < 18)
        {
            resolve("PERSON IS A TEANAGER")
        }
        else
        {
            reject("PERSON IS AN ADULT")
        }
    })
}

 async function agecheck() : Promise<void>
 {
    const eli : any = await agevalidate();
    console.log(eli)
 }
  agecheck();