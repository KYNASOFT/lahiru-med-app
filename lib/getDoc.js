export async function getDoc(email){
    try{
        let docReq = await fetch('http://localhost:3000/api/userExcist',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                email
            })
        }) 
        if(docReq.ok)
        {
            console.log("From get doc funbction",docReq);
            let docFromUserRes = await docReq.json();
            console.log(docFromUserRes.user);
            return docFromUserRes.user;

        }
        else{
            console.error("From get doc function unsuccess!!")
            return null;
        }
    }
    catch(error){

        console.error(error)
        return null;
    }
}