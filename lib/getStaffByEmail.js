import { errorToJSON } from "next/dist/server/render";


export async function getStaffByEmail(mail){

    try{
        let email = mail;
        let  res = await fetch('http://localhost:3000/api/getstaffmain',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                email
            })

        })
        if(res.ok){
            let document = await res.json();
            return document.staff;
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