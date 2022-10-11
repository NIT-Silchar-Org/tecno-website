import axios from 'axios'


export const getTransactions = async (token) => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/transaction`
  let resp

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }

  try {
    resp = await axios.get(url, { headers })
  } catch (err) {
    console.log({ err })
  }

  return resp
}