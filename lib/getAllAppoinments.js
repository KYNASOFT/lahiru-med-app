
export async function getAllAppoinments(){

    const name = "req";
    try{
        const res = await fetch('http://localhost:3000/api/allapts',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
               name
            })
        })
        if(res.ok){
            let document = await res.json();
            console.log("From getAllAppoinments- ",document.apts);
            return document.apts;
        }
        else{
            return null;
        }

    }catch(error){
        console.error(error);
        return null;
    }
}