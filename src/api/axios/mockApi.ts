import { sleep } from 'utils/sleep'

export const getToken = async (email: string, password: string) => {
  const secretKey = 'your_secret_key'
  const payload = secretKey + email + password
  await sleep(1000)
  return payload
}
