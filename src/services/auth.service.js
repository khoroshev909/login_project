import axios from 'axios'
import API_ENV from '../config/api.config'

/**
 * @param {String} email
 * @param {String} password
 */
export async function login(email, password) {
  try {
    const response = axios.post(
      `${API_ENV.apiUrl}/auth/login`,
      JSON.stringify({ email, password }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    console.log(response.data)
    return response.data
  } catch (err) {
    console.error(err)
    Promise.reject(err)
  }
}
