//querySelector (p,ul, #id)

const contenidor =document.querySelector('.contenidor');
const seients =  document.querySelectorAll('.fila .seient:not(.ocupat)');
const contador =  document.getElementById('contador');
const total =  document.getElementById('total');
const peliculaSelect = document.getElementById('pelicula');

let preuTicket = +peliculaSelect.value;