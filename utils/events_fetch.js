import { async } from '@firebase/util'
import axios from 'axios'

const BASE_URL = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}`

export const fetchEventsAll = async () => {
  const url = `${BASE_URL}/event`
  let resp

  try {
    resp = await axios.get(url)
  } catch (err) {
    console.log({ err })
  }

  return resp
}

export const fetchEventById = async (id) => {
  let url = `${BASE_URL}/event/${id}`
  let resp

  try {
    resp = await axios.get(url)
  } catch (err) {
    console.log({ err })
  }
  return resp
}

export const fetch_module_events = async (id) => {
  let url = `${BASE_URL}/module/${id}/event`
  let resp

  try {
    resp = await axios.get(url)
  } catch (err) {
    console.log({ err })
  }

  return resp
}

export const fetchModule = async () => {
  let url = `${BASE_URL}/module`
  let resp

  try {
    resp = await axios.get(url)
    // resp = resp.data
  } catch (err) {
    console.log({ err })
  }

  return resp
}
