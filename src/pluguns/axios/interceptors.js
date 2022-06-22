const tokenKey = 'my_app_token'

export default async function (axios) {
  axios.interceptors.request.use(setAccessToken)
  axios.interceptors.response.use(setTokenOnLogin)

  // Должен быть последним, возвращает не объект response а только данные
  // В случае ошибки вызовется onError
  axios.interceptors.response.use(getResponseData, onError)
}

function setTokenOnLogin(response) {
  const isLoginRoute = response.config.url.includes('login')

  if (isLoginRoute) {
    const token = response.data.token
    localStorage.setItem(tokenKey, token)
  }

  return response
}

function setAccessToken(request) {
  const isAuthRoute = request.url.includes('auth')

  if (!isAuthRoute) {
    const token = localStorage.getItem(tokenKey)
    request.headers['x-access-token'] = token
  }

  return request
}

// Обработчик ошибок - вешается на последний интерсептор вторым аргументом
// Обязательно вызывать Promise.reject
function onError(err) {
  return Promise.reject(err)
}

function getResponseData(response) {
  return response.data
}
