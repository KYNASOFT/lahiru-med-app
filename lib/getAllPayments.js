export async function getAllPayments(){

    try{

        let req = await fetch('http://localhost:3000/api/retrievepayments');

        if(req.ok){
            let res = await req.json();
            if(res){
                console.log("get All payments",res.details);
                return res.details;
            }
            else{
                return null
            }
        }
        else{
            return null;
        }

    }
    catch(error){
        console.error(error);
    }
}