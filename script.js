// Seletores
const buttonLogin = document.querySelector('.buttonLogin')

//Escutadores de Eventos
buttonLogin.addEventListener('click', checkLogin)

// Funções 
function checkLogin(event){
 event.preventDefault()
let email = document.querySelector('#email').value
let senha = document.querySelector('#senha').value
checkUserInput(email, senha)
}

function checkUserInput(email,senha) {
  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!')
  } else {
    alert('Email ou senha inválidos.')
  }
}