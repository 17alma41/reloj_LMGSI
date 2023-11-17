function select(tag){
    const val = document.querySelector(tag)
    return val
  }
  function updateTag(tag, contenido){
    const mi_tag = select(tag)
    mi_tag.innerHTML = contenido
  }
  
  function updateHour(){
  // const fecha = new Date()
  // const horas = fecha.getHours()
  // const minutos = fecha.getMinutes()
  // const segundos = fecha.getSeconds()
  const now = new Date();
  const options = { hour: '2-digit', minute: '2-digit', second:'2-digit', hour12: false };
  const horaEnFormato24Horas = now.toLocaleTimeString('es-ES', options);
  const [horas, minutos, segundos] = horaEnFormato24Horas.split(":")
  updateTag("#horas", horas)
  updateTag("#minutos", minutos)
  updateTag("#segundos", segundos)
  }
  setInterval(updateHour,500)
  
  function copyHour(){
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second:'2-digit', hour12: false };
    const horaEnFormato24Horas = now.toLocaleTimeString('es-ES', options);
    navigator.clipboard.writeText(horaEnFormato24Horas)
  }
  
  // function randomImages(){
  //   const images = ["https://images.unsplash.com/photo-1696185570507-2d1283399560?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDAxNzg3NzF8&ixlib=rb-4.0.3&q=85",
  //    "https://images.unsplash.com/photo-1697384334092-32e3c879d1ff?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDAxNzg3NzF8&ixlib=rb-4.0.3&q=85",
  //   "https://images.unsplash.com/photo-1698813455987-4c79e1a8a366?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDAxNzg3NzF8&ixlib=rb-4.0.3&q=85",
  //   "https://images.unsplash.com/photo-1693491010962-83b026fc742e?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDAxNzg4Njh8&ixlib=rb-4.0.3&q=85"]
  
  //   const randomNumber = Math.floor(Math.random() * images.length);
  //   const imagenes_aleatorias = images[randomNumber];
  //   let element = document.getElementById('background');
  //   let elementStyle = window.getComputedStyle(element);
  //   let elementUrl = elementStyle.getPropertyValue('imagenes_aleatorias');
  //   console.log("intentando acceder a la imagen aleatoria");
  // }