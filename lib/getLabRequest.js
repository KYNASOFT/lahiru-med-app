export async function getLabRequests(){
    try{
        let name = "Req";

        let res = await fetch('http://localhost:3000/api/labrequestrec',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                name
            })
        })
        if(res.ok){
            let document = await res.json();
            console.log(document.labR);
            return document.labR;        
 
        }else{
            return null;
        }
        
    }catch(error){
        console.error(error);
        return null;
    }
}