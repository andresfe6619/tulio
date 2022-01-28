


const URLinicioSesion = "C:\Users\Andres\Documents\desarrollo web\meowsculuos-vasquez\JS\Json\Datos.json"
let perfiles1 = [];

class Perfil { 
    constructor(email, password) {
        
        this.id = perfiles1.length;
        this.email = email;
        this.password = password;
       
    }
}

let formulario = document.createElement('form');
formulario.innerHTML = `
<fieldset>
<section id="forma"></section>
<ul id="animacion2">
<section id="forma"></section>
<legend class="colorBlanco"> iniciar sesion </legend>
<label for="Correo" > Correo electronico  :</label>
<input type="text"  placeholder="alguien@gmail.com"> <br>
<label for="Contraseña"> Contraseña :</label>
<input type="password"  placeholder="noselasabe123">
</ul> 
<button class="bloquesito"> <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi73sr0jpTzAhUAQzABHYITDvkQFnoECBAQAQ&url=https%3A%2F%2Fwww.google.com%2Fintl%2Fes-419%2Fgmail%2Fabout%2F&usg=AOvVaw1ZcvroawN822BcNxGNIMXA">continuar con google 
</a></button>  
</fieldset>  `;
formulario.classList.add('setentavh');
document.body.appendChild(formulario);
let titulo = document.createElement("h5")
    titulo.innerHTML= "¡Has iniciado sesion!"; 
    titulo.classList.add('blancoNegro');
    $("#forma").append(titulo).hide()
formulario.onsubmit = function(event){
    event.preventDefault();
    const inputs = event.target.querySelectorAll("input");
    perfiles1.push(new Perfil( inputs[0].value, inputs[1].value,)); 
    $("#animacion2").fadeOut("fast")
    $("#forma").fadeIn("fast")
    $.post(URLinicioSesion, perfiles1,(response, state) => {
        if(state === "succes"){
            alert("Se ha enviado tu inicio de sesion");
        }
    })
    let json= JSON.stringify(perfiles1)
    sessionStorage.setItem("sesion", json)
    console.log(perfiles1);
        }