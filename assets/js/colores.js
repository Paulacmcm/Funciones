// Evento para cambiar de color a negro al hacer click en los divs con colores iniciales
const divs = ['blue', 'red', 'green', 'yellow'];

divs.forEach(id => {
  const div = document.getElementById(id);
  div.addEventListener("click", function() {
    div.style.backgroundColor = 'black';
  });
});

// Variable global para guardar el color basado en la tecla presionada
let colorGuardado = '';

// Evento para cambiar el color del div 'key' según la tecla presionada
document.addEventListener('keydown', function (event) {
  if (event.key === 'a') {
    colorGuardado = 'pink'; // Rosado
    document.getElementById('key').style.backgroundColor = colorGuardado;
  } else if (event.key === 's') {
    colorGuardado = 'orange'; // Naranjo
    document.getElementById('key').style.backgroundColor = colorGuardado;
  } else if (event.key === 'd') {
    colorGuardado = 'cyan'; // Celeste
    document.getElementById('key').style.backgroundColor = colorGuardado;
  } else if (event.key === 'q') {
    const newDiv = document.createElement('div');
    newDiv.style.width = '200px';
    newDiv.style.height = '200px';
    newDiv.style.backgroundColor = 'purple'; // Morado
    newDiv.style.border = '2px solid black';
    document.body.appendChild(newDiv);
  } else if (event.key === 'w') {
    const newDiv = document.createElement('div');
    newDiv.style.width = '200px';
    newDiv.style.height = '200px';
    newDiv.style.backgroundColor = 'gray'; // Gris
    newDiv.style.border = '2px solid black';
    document.body.appendChild(newDiv);
  } else if (event.key === 'e') {
    const newDiv = document.createElement('div');
    newDiv.style.width = '200px';
    newDiv.style.height = '200px';
    newDiv.style.backgroundColor = 'brown'; // Café
    newDiv.style.border = '2px solid black';
    document.body.appendChild(newDiv);
  }
});