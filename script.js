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
  
  
  let images =[
    `https://images3.alphacoders.com/132/1322308.jpeg`,
    `https://www.pixground.com/wp-content/uploads/2023/04/Clouds-Meet-The-Sea-AI-Generated-4K-Wallpaper.jpg`,
    `https://a-static.besthdwallpaper.com/amazing-spiderman-logo-wallpaper-2800x2100-106853_28.jpg`,
    `https://cdn.wallpapersafari.com/55/83/Pl6QHc.jpg`,
    `https://wow.zamimg.com/uploads/blog/images/20516-afterlives-ardenweald-4k-desktop-wallpapers.jpg` 
    ]
    window.onload = function() {
    let SetBackGround= Math.floor(Math.random() * images.length);
    document.body.style.backgroundImage = `url(${images[SetBackGround]})`;
    }
 