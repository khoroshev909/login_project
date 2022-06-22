import 'bootstrap/dist/css/bootstrap.css'
import '../style.css'
import UI from './config/config.ui'
import validate from './helpers/validate'
import { login } from './services/auth.service'
import { notify } from './views/notifications'
import { getNews } from './services/news.service'

const { form, inputEmail, inputPassword } = UI
const inputs = [inputEmail, inputPassword]

// Listeners
form.addEventListener('submit', (e) => {
  e.preventDefault()
  onSubmit()
})

// handlers
async function onSubmit() {
  const isValidForm = inputs.every((input) => {
    const isValidInput = validate(input)

    return isValidInput
  })

  if (!isValidForm) return
  try {
    const response = await login(inputEmail.value, inputPassword.value)

    if (response.error === true) {
      notify({ msg: 'Login faild', className: 'alert-danger' })
      return
    }

    form.reset()
    notify({ msg: 'Login success', className: 'alert-success' })
    await getNews()
  } catch (err) {
    notify({ msg: 'Login faild', className: 'alert-danger' })
  }
}

// denis.m.pcspace@gmail.com
// dmgame12345
