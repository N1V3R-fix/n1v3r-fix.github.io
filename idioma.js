// Español o inglés: se recuerda la elección; la primera vez se usa el idioma del navegador.
(function () {
  var guardado = null;
  try { guardado = localStorage.getItem('draftlab-idioma'); } catch (e) {}
  var idioma = guardado || ((navigator.language || 'es').toLowerCase().indexOf('es') === 0 ? 'es' : 'en');
  document.documentElement.setAttribute('data-idioma', idioma);
  document.documentElement.lang = idioma;
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-cambiar-idioma]');
    if (!b) return;
    idioma = idioma === 'es' ? 'en' : 'es';
    document.documentElement.setAttribute('data-idioma', idioma);
    document.documentElement.lang = idioma;
    try { localStorage.setItem('draftlab-idioma', idioma); } catch (e) {}
  });
})();
