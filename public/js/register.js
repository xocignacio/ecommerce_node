const form = document.getElementById('registerForm');

form.addEventListener('submit',evt=>{
    evt.preventDefault();
    let data = new FormData(form);
    let obj = {};
    data.forEach((value,key)=>obj[key]=value);
    fetch('/api/sessions/register',{
        method:'POST',
        body:JSON.stringify(obj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(result=>result.json()).then(json=>window.location.replace('/login'));
   
    
})

form.addEventListener("submit", e=> {
  e.preventDefault()
  let warnings = ""
  let entrarEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  let entrar = false
  parrafo.innerHTML = ""
  if(nombre.value.length <2) {
   warnings += `  el nombre no es valido <div></div>`
   entrar = true
  }
  
  if(!entrarEmail.test(email.value)){
    warnings += `el email no es valido <div></div>`
    entrar = true
  }
  if(password.value.length <4) {
    warnings += `la contraseña no es valida<div></div>`
    entrar = true
   }

  if(entrar) {
    parrafo.innerHTML = warnings
  }
  else {
    alert('Muchas gracias, ya sos parte de coffeeCLUB') 
     
    }
})

