import axios from '../pluguns/axios'

/**
 * @param {String} email
 * @param {String} password
 */
export async function login(email, password) {
  try {
    const response = await axios.post(
      `auth/login`,
      JSON.stringify({ email, password })
    )
    return response
  } catch (err) {
    console.error(err)
    Promise.reject(err)
  }
}
