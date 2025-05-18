const container = document.getElementById('container');
const registerBtn = document.getElementById('registerBtn');
const loginBtn = document.getElementById('loginBtn');

const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

registerBtn.addEventListener('click', () => {
  container.classList.add('right-panel-active');
  clearErrors();
});

loginBtn.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
  clearErrors();
});

// Función para limpiar mensajes de error
function clearErrors() {
  const errors = document.querySelectorAll('.error-message');
  errors.forEach(err => err.remove());
}

// Función para mostrar error
function showError(input, message) {
  // Si ya tiene mensaje, no agrega otro
  if (input.nextElementSibling && input.nextElementSibling.classList.contains('error-message')) {
    return;
  }
  const error = document.createElement('div');
  error.className = 'error-message';
  error.textContent = message;
  input.parentNode.insertBefore(error, input.nextSibling);
}

// Validación formulario login
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  clearErrors();

  const email = loginForm.querySelector('input[type="email"]');
  const password = loginForm.querySelector('input[type="password"]');

  let valid = true;

  if (email.value.trim() === '') {
    showError(email, 'El correo es obligatorio');
    valid = false;
  }

  if (password.value.trim() === '') {
    showError(password, 'La contraseña es obligatoria');
    valid = false;
  }

  if (valid) {
    alert('Inicio de sesión válido (aquí integrar lógica)');
    loginForm.reset();
  }
});

// Validación formulario registro
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  clearErrors();

  const username = registerForm.querySelector('input[type="text"]');
  const email = registerForm.querySelector('input[type="email"]');
  const password = registerForm.querySelectorAll('input[type="password"]')[0];
  const confirmPassword = registerForm.querySelectorAll('input[type="password"]')[1];

  let valid = true;

  if (username.value.trim() === '') {
    showError(username, 'El nombre de usuario es obligatorio');
    valid = false;
  }

  if (email.value.trim() === '') {
    showError(email, 'El correo es obligatorio');
    valid = false;
  }

  if (password.value.trim() === '') {
    showError(password, 'La contraseña es obligatoria');
    valid = false;
  }

  if (confirmPassword.value.trim() === '') {
    showError(confirmPassword, 'Debes confirmar la contraseña');
    valid = false;
  }

  if (password.value !== confirmPassword.value) {
    showError(confirmPassword, 'Las contraseñas no coinciden');
    valid = false;
  }

  if (valid) {
    alert('Registro válido (aquí integrar lógica)');
    registerForm.reset();
  }
});
