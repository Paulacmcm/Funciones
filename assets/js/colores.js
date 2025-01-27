
const divs = ['blue', 'red', 'green', 'yellow'];

divs.forEach(id => {
  const div = document.getElementById(id);
  div.addEventListener("click", function() {
    div.style.backgroundColor = 'black';
  });
});


let colorGuardado = '';


document.addEventListener('keydown', function (event) {
  if (event.key === 'a') {
    colorGuardado = 'pink'; 
    document.getElementById('key').style.backgroundColor = colorGuardado;
  } else if (event.key === 's') {
    colorGuardado = 'orange'; 
    document.getElementById('key').style.backgroundColor = colorGuardado;
  } else if (event.key === 'd') {
    colorGuardado = 'cyan'; 
    document.getElementById('key').style.backgroundColor = colorGuardado;
  } else if (event.key === 'q') {
    const newDiv = document.createElement('div');
    newDiv.style.width = '200px';
    newDiv.style.height = '200px';
    newDiv.style.backgroundColor = 'purple'; 
    newDiv.style.border = '2px solid black';
    document.body.appendChild(newDiv);
  } else if (event.key === 'w') {
    const newDiv = document.createElement('div');
    newDiv.style.width = '200px';
    newDiv.style.height = '200px';
    newDiv.style.backgroundColor = 'gray'; 
    newDiv.style.border = '2px solid black';
    document.body.appendChild(newDiv);
  } else if (event.key === 'e') {
    const newDiv = document.createElement('div');
    newDiv.style.width = '200px';
    newDiv.style.height = '200px';
    newDiv.style.backgroundColor = 'brown'; 
    newDiv.style.border = '2px solid black';
    document.body.appendChild(newDiv);
  }
});