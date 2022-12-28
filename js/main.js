document.querySelectorAll('.btn-modal').forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = document.querySelector(btn.getAttribute('data-modal'));
    //modal.style.display = 'block';
    modal.classList.add('modal--show');
  });
});

  // JavaScript para abrir y cerrar los modales
// Función para cerrar todos los modales
function closeModals() {
  // Obtener todos los modales en la página
  var modals = document.querySelectorAll('.modal');
  // Recorrer todos los modales y cerrarlos
  modals.forEach(function(modal) {
    modal.classList.remove('modal--show');
  });
}

// Obtener todos los botones para cerrar
document.querySelectorAll('.modal__close').forEach(btn_close_modal => {
  btn_close_modal.addEventListener('click',()=>{
    closeModals();
  });
});