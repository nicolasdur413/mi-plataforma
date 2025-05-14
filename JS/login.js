// js/login.js

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;

  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  const usuarioEncontrado = usuarios.find(user => user.username === username && user.password === password);

  if (usuarioEncontrado) {
    // Guardar usuario actual en localStorage
    localStorage.setItem('usuarioActual', JSON.stringify(usuarioEncontrado));

    alert(`Bienvenido ${usuarioEncontrado.username}!`);

    // Redireccionar según el rol
    if (usuarioEncontrado.role === 'admin') {
      window.location.href = "admin-dashboard.html";
    } else {
      window.location.href = "usuario-dashboard.html";
    }
  } else {
    alert('Usuario o contraseña incorrectos.');
  }
}); 