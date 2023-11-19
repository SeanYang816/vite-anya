import axios from 'axios'

const axiosWithDefaults = axios.create({
  headers: {
  }
})
export const getToken = async (email: string, password: string) => {
}