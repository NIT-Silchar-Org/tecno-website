import axios from 'axios'
import { toast } from 'react-toastify'

export const teamRegister = async (id, body, token) => {
  let url = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/team/event/${id}/add`
  let resp

  let headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }

  try {
    resp = await axios.post(url, body, { headers })
    if (resp.data.status === 200) toast.success(resp.data.msg)
    else toast.error(resp.data.msg)
  } catch (err) {
    toast.error(err.response.data.msg)
    resp = {
      error: err,
    }
  }
  return resp
}
