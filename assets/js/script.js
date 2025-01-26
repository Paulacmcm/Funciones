//function pintar(){
    //ele.style.backgroundColor = 'yellow'
   // }
   // const ele = document.getElementById("ele1")
  //  ele.addEventListener("click", pintar);
    

    // Función para cambiar el color de fondo de cualquier elemento
function pintar(elemento, color = 'green') {
    elemento.style.backgroundColor = color;
  }
  
  // Obtener el elemento y agregarle el evento click
  const ele = document.getElementById("ele1");
  ele.addEventListener("click", function() {
    pintar(ele, 'yellow'); // Al hacer clic, el color será amarillo
  });
  