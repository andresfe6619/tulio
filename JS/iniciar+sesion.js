



let perfiles1 = [];

class Perfil { 
    constructor(profile) {
        
        this.id = perfiles1.length;
        this.email = profile.email;
        this.password = profile.password;
       
    }
}

let formulario = document.createElement('form');
formulario.innerHTML = `
<fieldset>
<ul>
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

formulario.onsubmit = function(event){
    event.preventDefault();
    const inputs = event.target.children;
    perfiles1.push(new Perfil({ email: inputs[0].value, password: inputs[1].value,})); 
    let titulo = document.createElement("h5")
    titulo.innerHTML= "Has iniciado sesion."; 
    titulo.classList.add('blancoNegro');
    document.body.append(titulo)
    let json= JSON.stringify(perfiles1)
    sessionStorage.setItem("sesion", json)
    console.log(perfiles1);
        }