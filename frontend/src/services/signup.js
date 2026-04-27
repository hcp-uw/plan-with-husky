import axios from 'axios'

const baseUrl = 'http://localhost:8080/api/users'

const emailSignup = async (email) => {
  const response = await axios.post(`${baseUrl}/email-signup`, { email })
  return response.data
}

export { emailSignup }