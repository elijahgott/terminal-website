const form = document.getElementById('inputForm')
const input = document.getElementById('terminalInput')

// focus on text input regardles of where is clicked
document.getElementById('page').addEventListener('click', () => {
  input.focus()
})

const log = document.getElementById('log')

// create green user text on log
const createUserElement = () => {
  const user = document.createElement('p')
  user.classList.add('user')
  user.textContent = 'user:'

  return user
}

// create element for user input text in log
const createInputElement = (input) => {
  const userInput = document.createElement('p')
  userInput.textContent = input.value

  return userInput
}

// add text to log
const submitText = (event) => {
  event.preventDefault()
  const newLog = document.createElement('div')
  newLog.classList.add('logItem')

  const user = createUserElement()
  const userInput = createInputElement(input)

  newLog.appendChild(user)
  newLog.appendChild(userInput)

  input.value = ''
  log.appendChild(newLog)
}

form.addEventListener('submit', submitText)

const commands = [
  'help',
  'hello',
]