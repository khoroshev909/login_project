import 'bootstrap/dist/css/bootstrap.css'
import '../style.css'
import UI from './config/config.ui'
import validate from './helpers/validate'

const { form, inputEmail, inputPassword } = UI
const inputs = [inputEmail, inputPassword]

// Listeners
form.addEventListener('submit', (e) => {
  e.preventDefault()
  onSubmit()
})

// handlers
function onSubmit() {
  const isValidForm = inputs.every((input) => {
    const isValidInput = validate(input)

    return isValidInput
  })

  if (!isValidForm) return

  const formData = {
    email: inputEmail.value.trim(),
    password: inputPassword.value.trim(),
  }
}
