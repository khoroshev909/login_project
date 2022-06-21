import 'bootstrap/dist/css/bootstrap.css'
import '../style.css'
import UI from './config/config.ui'
import validate from './helpers/validate'
import { login } from './services/auth.service'

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
    await login(inputEmail.value, inputPassword.value)
  } catch (err) {}
}

// denis.m.pcspace@gmail.com
// dmgame12345
