import axios from 'axios'
import { toast } from 'react-toastify'

export const teamsFetch = async (token) => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user/me/my_teams`
  let resp

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }

  try {
    resp = await axios.get(url, { headers })
  } catch (err) {
    toast.error(err.response.data.msg)

    resp = {
      error: err,
    }
  }
  return resp
}

export const teamRespond = async (token, status, teamID) => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/team/${teamID}/respond`
  let resp

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }

  try {
    resp = await axios.patch(url, { status }, { headers })
  } catch (err) {
    console.log(err)

    resp = {
      error: err,
    }
  }
  return resp
}
