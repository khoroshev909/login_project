export function showErrorMessage(input) {
  const message = input.dataset.invalidMessage || 'invalid input'
  const formControl = input.parentElement

  if (!input.classList.contains('is-invalid')) {
    const errorHTML = getErrorHTML(message)
    input.classList.add('is-invalid')
    formControl.insertAdjacentHTML('beforeend', errorHTML)
  }
}

function getErrorHTML(message) {
  return `<div class="invalid-feedback">${message}</div>`
}
