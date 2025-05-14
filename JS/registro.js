// js/registro.js

const registroForm = document.getElementById('registroForm');

registroForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const role = document.getElementById('role').value;

  if (!username || !email || !password || !role) {
    alert('Por favor, completa todos los campos.');
    return;
  }

  const nuevoUsuario = { username, email, password, role };

  // Guardar en localStorage
  let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  usuarios.push(nuevoUsuario);
  localStorage.setItem('usuarios', JSON.stringify(usuarios));

  alert('Registro exitoso. Ahora puedes iniciar sesión.');

  // Redireccionar al login
  window.location.href = "login.html";
}); 