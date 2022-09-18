import axios from 'axios'

export const teamsFetch = async (token) => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user/me/my_teams`
  // console.log(body)
  let resp

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }

  try {
    resp = await axios.get(url, { headers })
  } catch (err) {
    console.log(err)

    resp = {
      error: err,
    }
  }
  return resp
}

export const teamRespond = async (token, status, teamID) => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/team/${teamID}/respond`
  console.log(body)
  let resp

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }

  try {
    resp = await axios.post(url, { status }, { headers })
  } catch (err) {
    console.log(err)

    resp = {
      error: err,
    }
  }
  return resp
}
