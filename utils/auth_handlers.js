import axios from 'axios'

export const userBackendRegister = async ({
  firstName,
  secondName,
  phone,
  email,
  collegeName,
  regID,
  userName,
  imageUrl,
  token,
}) => {
//   console.log({ name })
  let url = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/signup`
  let body = {
    firstName:firstName,
    lastName:secondName,
    phoneNumber:phone,
    email: email,
    collegeName: collegeName,
    registrationId: regID,
    username: userName,
    imageUrl: imageUrl,
  }

  let headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }

  let resp

  try {
    resp = await axios.post(url, body, { headers })
  
  } catch (err) {
    console.log(err)
    resp = {
      error:err
    }
  }
  console.log({ resp })
  return resp;
}
