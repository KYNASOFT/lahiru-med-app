
export async function getDocBySpecs(spec){
    
    
    try{
        let specialty = spec;
        let  res = await fetch('http://localhost:3000/api/getdoctormain',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                specialty
            })

        })
        if(res.ok){
            let document = await res.json();
            return document.docBySpec;
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