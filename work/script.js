const form = document.querySelector('.form');
const inputs = form.querySelectorAll('input');

// сыохраняем значения в localStorage
function saveToLocalStorage() {
  inputs.forEach((input) => {
    localStorage.setItem(input.name, input.value);
  });
}

// получаем данные в localStorage
function loadFromLocalStorage() {
  inputs.forEach((input) => {
    input.value = localStorage.getItem(input.name) || '';
  });
}

function clearLocalStorage() {
  localStorage.clear();
}

// Валидация формы
function validateForm(event) {
  let isValid = true;

  const gosNum = document.getElementById('gos-num');
  if (!gosNum.checkValidity()) {
    isValid = false;
  }

  const car = document.getElementById('car');
  if (!car.value) {
    isValid = false;
  }

  const arrivalDate = document.getElementById('arrival-date');
  if (!arrivalDate.value) {
    isValid = false;
  }

  const driverName = document.getElementById('driver-name');
  if (!driverName.value) {
    isValid = false;
  }

  const passport = document.getElementById('passport');
  if (!passport.checkValidity()) {
    isValid = false;
  }

  const issuedByWhom = document.getElementById('issued-by-whom');
  if (!issuedByWhom.checkValidity()) {
    isValid = false;
  }

  const whenIssued = document.getElementById('when-issued');
  if (!whenIssued.checkValidity()) {
    isValid = false;
  }

  if (isValid) {
    clearLocalStorage();
    alert('Форма успешно отправлена!');
  } else {
    event.preventDefault();
  }

  return isValid;
}
//конпка reset
function reset() {
  form.reset();
}

// Загружаем данные из localStorage при загрузке страницы
window.onload = loadFromLocalStorage;

// Сохраняем данные перед отправкой
form.addEventListener('change', saveToLocalStorage);
