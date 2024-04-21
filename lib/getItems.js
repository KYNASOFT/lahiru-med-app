export async function getItems()
{
    const name = "req";
    try{
        const res = await fetch('http://localhost:3000/api/itemreciever',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
               name
            })
        })
        if(res){
            let document = await res.json();
            console.log("From getItems - ",document.items);
            return document.items;
        }
        else{
            return null;
        }

    }catch(error){
        console.error(error);
        return null;
    }
}