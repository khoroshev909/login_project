import axios from '../pluguns/axios'

export async function getNews() {
  try {
    const response = await axios.get('/news')
    return response
  } catch (err) {
    console.error(err)
    Promise.reject(err)
  }
}
