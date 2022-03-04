// Seletores

const buttonLogin = document.querySelector('.buttonLogin');
const checkBoxAgreement = document.querySelector('#agreement');
const buttonSubmit = document.querySelector('#submit-btn');
const textarea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const form = document.querySelector('#evaluation-form');

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

const countCaracteres = () => {
  counter.innerText = `Caracteres restantes: ${500 - textarea.value.length}`;
};

const submitName = () => {
  const nameInput = document.querySelector('#input-name');
  const lastNameInput = document.querySelector('#input-lastname');
  const name = nameInput.value;
  const lastName = lastNameInput.value;
  const nameText = document.createElement('h3');
  nameText.innerHTML = `Nome: ${name} ${lastName}`;
  form.appendChild(nameText);
};

const submitEmail = () => {
  const emailInput = document.querySelector('#input-email');
  const email = emailInput.value;
  const emailOption = document.createElement('h3');
  emailOption.innerHTML = `Email: ${email}`;
  form.appendChild(emailOption);
};

const submitCasa = () => {
  const houseInput = document.querySelector('#house');
  const house = houseInput.options[houseInput.selectedIndex];
  const houseOption = document.createElement('h3');
  houseOption.innerHTML = `Casa: ${house.value}`;
  form.appendChild(houseOption);
};

const submitFamilia = () => {
  const familyInput = document.querySelector('input[name="family"]:checked').value;
  const familyOption = document.createElement('h3');
  familyOption.innerHTML = `Família: ${familyInput}`;
  form.appendChild(familyOption);
};

const getChosenSubject = (materias) => {
  const chosenSubjects = [];
  for (let i = 0; i < materias.length; i += 1) {
    if (materias[i].checked) {
      chosenSubjects.push(` ${materias[i].value}`);
    }
  }

  return chosenSubjects;
};

const submitMaterias = () => {
  const materias = document.querySelectorAll('.subject');
  const materiasEscolhidas = getChosenSubject(materias);
  const subjects = document.createElement('h3');
  subjects.innerHTML = `Matérias: ${materiasEscolhidas}`;
  form.appendChild(subjects);
};

const submitAvaliacao = () => {
  const avaliationInput = document.querySelector('input[name="rate"]:checked').value;
  const avaliationOption = document.createElement('h3');
  avaliationOption.innerHTML = `Avaliação: ${avaliationInput}`;
  form.appendChild(avaliationOption);
};

const submitObservacoes = () => {
  const observation = textarea.value;
  const observationHeader = document.createElement('h3');
  observationHeader.innerHTML = `Observações: ${observation}`;
  form.appendChild(observationHeader);
};

const submitForm = (event) => {
  event.preventDefault();
  submitName();
  submitEmail();
  submitCasa();
  submitFamilia();
  submitMaterias();
  submitAvaliacao();
  submitObservacoes();
};

// Escutadores de Eventos
buttonLogin.addEventListener('click', checkLogin);
checkBoxAgreement.addEventListener('change', checkButton);
textarea.addEventListener('keydown', countCaracteres);
textarea.addEventListener('keyup', countCaracteres);
buttonSubmit.addEventListener('click', submitForm);
