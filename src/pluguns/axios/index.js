import axios from 'axios'
import interceptors from './interceptors'
import API_ENV from '../../config/api.config'

const instance = axios.create({
  baseURL: API_ENV.apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
})

interceptors(instance)

export default instance
