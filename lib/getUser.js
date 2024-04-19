
export async function getUser(email,url)
{
   try{
      //connect to the database
      const user = await fetch(url,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            email
        })
      }) 

      if(user.ok){

        const res = await user.json();
        return res;
      }
      else{
        return null;
      }
   }catch(error)
   {
        console.error(error);
        return null;
   }
}