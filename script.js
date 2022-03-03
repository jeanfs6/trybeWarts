// Seletores
const buttonLogin = document.querySelector('.buttonLogin');
const checkBoxAgreement = document.querySelector('#agreement');
const buttonSubmit = document.querySelector('#submit-btn');

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

function checkButton() {
  if (checkBoxAgreement.checked === true) {
    buttonSubmit.disabled = false;
  } else {
    buttonSubmit.disabled = true;
  }
}

// Escutadores de Eventos
buttonLogin.addEventListener('click', checkLogin);
checkBoxAgreement.addEventListener('change', checkButton);
