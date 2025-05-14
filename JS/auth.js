// js/auth.js

function verificarAcceso(rolPermitido) {
    const usuarioActual = JSON.parse(localStorage.getItem('usuarioActual'));
  
    if (!usuarioActual) {
      alert('Debes iniciar sesión.');
      window.location.href = 'login.html';
      return;
    }
  
    if (usuarioActual.role !== rolPermitido) {
      alert('No tienes permiso para acceder aquí.');
      window.location.href = 'login.html';
    }
  } 