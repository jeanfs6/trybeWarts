// Seletores
const buttonLogin = document.querySelector('.buttonLogin');

function checkUserInput(email, senha) {
  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function checkLogin(event) {
  event.preventDefault();
  const email = document.querySelector('#email').value;
  const senha = document.querySelector('#senha').value;
  checkUserInput(email, senha);
}

// Escutadores de Eventos
buttonLogin.addEventListener('click', checkLogin);
