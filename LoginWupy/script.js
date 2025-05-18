const toggleBtn = document.getElementById('toggleBtn');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const titleText = document.getElementById('titleText');
const descText = document.getElementById('descText');
const togglePanel = document.getElementById('togglePanel');

let showingRegister = false;

toggleBtn.addEventListener('click', () => {
  showingRegister = !showingRegister;

  if (showingRegister) {
    loginForm.classList.remove('active');
    registerForm.classList.add('active');
    togglePanel.classList.add('move-right');
    titleText.textContent = '¡Hola!';
    descText.textContent = 'Regístrese con sus datos personales para usar todas las funciones del sitio';
    toggleBtn.textContent = 'Iniciar sesión';
  } else {
    registerForm.classList.remove('active');
    loginForm.classList.add('active');
    togglePanel.classList.remove('move-right');
    titleText.textContent = '¡Bienvenido!';
    descText.textContent = 'Ingrese sus datos personales para usar todas las funciones del sitio';
    toggleBtn.textContent = 'Crear cuenta';
  }
});
