import axios from "axios";


export const userBackendRegister = async ({name, email, collegeName, regID, userName, imageUrl, token}) =>{

    console.log({name});
    let url = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/signup`
    let body = {
        name:name,
        email: email,
        collegeName:collegeName,
        regID:regID,
        userName:userName,
        imageUrl:imageUrl
    }
    

    let config ={
        headers:{
            
                Authorization:`Bearer ${token}`
            
        }
    }

    let resp;

    try{

        resp = await axios.post()

    }catch(err){

    }



}