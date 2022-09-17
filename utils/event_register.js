import axios from "axios";

export const team_register = async (id, body, token) => {

    let url = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/event/${id}/team/add`

    let resp ;
    
    
      let headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }

    try{

        resp = await axios.post(url,body, {headers})

    }catch(err){
        console.log(err);

        resp = {
            error:err
        }
        
    }
    return resp;

}