const clock = document.querySelector('#clock');


setInterval(()=>{
  let date = new Date() // Predefined object in js
  clock.innerHTML = date.toLocaleTimeString();
},1000)