// list of available commands
const commands = [
  'help',
  'why',
  'hello',
]

// responses that go with each command
const commandText = [
  'i dont help people like you',
  'cuz ur so ugly',
  'yo waddup'
]

const form = document.getElementById('inputForm')
const input = document.getElementById('terminalInput')
let inputText = ''

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
const createTextElement = (text) => {
  const textElement = document.createElement('p')
  textElement.textContent = text

  return textElement
}

// add text to log
const submitText = (event) => {
  event.preventDefault()
  
  const newLog = document.createElement('div')
  newLog.classList.add('logItem')

  const user = createUserElement()
  const textElement = createTextElement(input.value)
  inputText = input.value

  newLog.appendChild(user)
  newLog.appendChild(textElement)

  // display input in log
  log.appendChild(newLog)

  let commandIndex = checkInputForCommand(inputText)
  if(commandIndex !== 999){
    executeCommand(commandIndex);
  }
  else{
    console.log('nope')
  }

  // clear input field
  input.value = ''
}

form.addEventListener('submit', submitText)

const checkInputForCommand = (input) => {
  for(i = 0; i < commands.length; i++){
    if(commands[i] === input.trim().toLowerCase()){
      return i
    }
  }
  return 999
}

const executeCommand = (commandNum) => {
  const newLog = document.createElement('div')
  newLog.classList.add('logItem')

  const textElement = createTextElement(commandText[commandNum])
  newLog.appendChild(textElement)

  // display input in log
  log.appendChild(newLog)
}