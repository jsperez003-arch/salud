document.addEventListener('DOMContentLoaded', () => {

  // Formulario de Inicio de Sesión
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      if (email) {
        alert(`¡Bienvenido a NutriChef, ${email}!`);
        window.location.href = 'plan-semanal.html';
      }
    });
  }

  // Formulario de Registro (Modal)
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('¡Cuenta creada exitosamente! Ahora puedes iniciar sesión.');
      const modalEl = document.getElementById('registerModal');
      const modal = bootstrap.Modal.getInstance(modalEl);
      if (modal) modal.hide();
    });
  }

  // Botón de Usuario (plan-semanal.html)
  const btnUser = document.getElementById('btnUser');
  if (btnUser) {
    btnUser.addEventListener('click', () => {
      alert('Perfil de Usuario:\n- Nombre: Ana Salud\n- Plan Activo: Pérdida de peso\n- Estado: Conectado');
    });
  }

  // Funcionalidad de los botones "Detalles" en Plan Semanal
  const detailButtons = document.querySelectorAll('.btn-detalles');
  const recipeModalEl = document.getElementById('recipeModal');

  if (detailButtons.length > 0 && recipeModalEl) {
    const recipeModal = new bootstrap.Modal(recipeModalEl);

    detailButtons.forEach(button => {
      button.addEventListener('click', () => {
        const title = button.getAttribute('data-recipe');
        const cal = button.getAttribute('data-cal');
        const prot = button.getAttribute('data-prot');

        document.getElementById('recipeModalTitle').textContent = title;
        document.getElementById('modalCal').textContent = cal;
        document.getElementById('modalProt').textContent = prot;

        recipeModal.show();
      });
    });
  }

  // Guardar Plan
  const btnGuardar = document.getElementById('btnGuardarPlan');
  if (btnGuardar) {
    btnGuardar.addEventListener('click', () => {
      alert('¡Tu plan semanal se ha guardado con éxito!');
    });
  }

  // Contador de la Lista de Compras
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
    updateProgress();
  }

  // Añadir nuevos ítems en la Lista de Compras
  const addItemForm = document.getElementById('addItemForm');
  if (addItemForm) {
    addItemForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('newItemInput');
      if (input.value.trim()) {
        alert(`El item "${input.value.trim()}" ha sido añadido.`);
        input.value = '';
      }
    });
  }
});
