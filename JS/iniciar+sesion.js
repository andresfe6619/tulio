


const URLinicioSesion = "Json\Datos.json"
let formulario = document.createElement('form');
formulario.innerHTML = `
<fieldset>
<section id="forma"></section>
<ul id="animacion2">
<section id="forma"></section>
<legend class="colorBlanco" required> iniciar sesion </legend>
<label for="Correo" > Correo electronico  :</label>
<input type="text"  placeholder="alguien@gmail.com" required> <br>
<label for="Contraseña" > Contraseña :</label>
<input type="password"  placeholder="noselasabe123">
</ul> 
<button class="bloquesito"> <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi73sr0jpTzAhUAQzABHYITDvkQFnoECBAQAQ&url=https%3A%2F%2Fwww.google.com%2Fintl%2Fes-419%2Fgmail%2Fabout%2F&usg=AOvVaw1ZcvroawN822BcNxGNIMXA">continuar con google 
</a></button>  
</fieldset>  `;
formulario.classList.add('setentavh');
document.body.appendChild(formulario);



let perfiles1 = [];

class Perfil { 
    constructor(email, password) {
        
        this.id = perfiles1.length;
        this.email = email;
        this.password = password;
       
        if (email== "andresfe6619@gmail.com"){
            let titulo = document.createElement("h5")
    titulo.innerHTML= "¡bienvenido Andres!"; 
    titulo.classList.add('blancoNegro');
    $("#forma").append(titulo).hide()

         }
         
          else if (email== "cesarProfesor@gmail.com"){
            let titulo = document.createElement("h5")
    titulo.innerHTML= "¡Bienvenido profe!"; 
    titulo.classList.add('blancoNegro');
    $("#forma").append(titulo).hide()

         }
         
          else { 
          let titulo = document.createElement("h5")
          titulo.innerHTML= "no has podido inicar sesion :("; 
          titulo.classList.add('blancoNegro');
          $("#forma").append(titulo)
                }
    
     }
      }
  


 /* let titulo = document.createElement("h5")
    titulo.innerHTML= "¡Has iniciado sesion!"; 
    titulo.classList.add('blancoNegro');
    $("#forma").append(titulo).hide() */
formulario.onsubmit = function(event){
    event.preventDefault();
    const inputs = event.target.querySelectorAll("input");
    perfiles1.push(new Perfil( inputs[0].value, inputs[1].value,)); 
    $("#animacion2").fadeOut("fast")
    $("#forma").fadeIn("fast")
    formulario.reset()
    $("#forma").delete()
    $.post(URLinicioSesion, perfiles1,(response, state) => {
        if(state === "succes"){
            alert("Se ha enviado tu inicio de sesion");
        }
    })
    let json= JSON.stringify(perfiles1)
    sessionStorage.setItem("sesion", json)
    console.log(perfiles1);
    $("#animacion2").fadeIn(4000)  
} 