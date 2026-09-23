// Manejo del formulario de inicio de sesión (index.html)
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      if (email) {
        alert(`¡Bienvenido a NutriChef, ${email}!`);
        // Redirección al plan semanal tras iniciar sesión
        window.location.href = 'plan-semanal.html';
      }
    });
  }

  // Guardar Plan (plan-semanal.html)
  const btnGuardar = document.getElementById('btnGuardarPlan');
  if (btnGuardar) {
    btnGuardar.addEventListener('click', () => {
      alert('¡Tu plan semanal se ha guardado con éxito!');
    });
  }

  // Contador de lista de compras (lista-compras.html)
  const checkboxes = document.querySelectorAll('.item-check');
  const progressCounter = document.getElementById('progressCounter');

  function updateProgress() {
    if (!progressCounter) return;
    const total = document.querySelectorAll('.item-check').length;
    const checked = document.querySelectorAll('.item-check:checked').length;
    progressCounter.textContent = `${checked}/${total} Items comprados`;
  }

  if (checkboxes.length > 0) {
    checkboxes.forEach(chk => {
      chk.addEventListener('change', updateProgress);
    });
    updateProgress(); // Estado inicial
  }

  // Formulario para añadir ítem a la lista de compras
  const addItemForm = document.getElementById('addItemForm');
  if (addItemForm) {
    addItemForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('newItemInput');
      const val = input.value.trim();
      
      if (val) {
        alert(`El item "${val}" ha sido añadido temporalmente.`);
        input.value = '';
      }
    });
  }
});