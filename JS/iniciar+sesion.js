


const URLinicioSesion = "Json\Datos.json"

let formulario1 = document.createElement('form');

formulario1.innerHTML = `
<fieldset>

<ul id="animacion2">
<legend class="colorBlanco" > iniciar sesion </legend>
				<label for="correo" >Correo Electrónico</label>
				
					<input type="email" class="colorBlanco bloquesito" name="correo" id="correo" placeholder="correo@correo.com" required>
				

     
      <label for="password">Contraseña</label>
        <input type="password" class="colorBlanco bloquesito" name="password" id="password" placeholder="noselasabe123" required>     
  
</ul> 
<section id="forma"></section> <br>
				<button type="submit" class="bloquesito">Enviar</button>
	
<button class="bloquesito"> <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi73sr0jpTzAhUAQzABHYITDvkQFnoECBAQAQ&url=https%3A%2F%2Fwww.google.com%2Fintl%2Fes-419%2Fgmail%2Fabout%2F&usg=AOvVaw1ZcvroawN822BcNxGNIMXA">continuar con google 
</a></button>  
</fieldset>  `;

formulario1.classList.add('setentavh');
document.body.appendChild(formulario1);
const formulario = formulario1
let perfiles1 = [
];

class campos { 
    constructor(correo , password) {
        
        this.id = perfiles1.length;
        this.correo = correo ;
        this.password = password;
       
     
        
       


        
          if (correo== "andresfe6619@gmail.com" && password =="noselasabe123" ){
            let titulo = document.createElement("h5")
    titulo.innerHTML= "¡bienvenido Andres!"; 
    titulo.classList.add('blancoNegro');
    $("#forma").append(titulo).hide()

   
        } 

          else if (correo== "cesarProfesor@gmail.com" && password=="123456"){
            let titulo = document.createElement("h5")
    titulo.innerHTML= "¡Bienvenido profe!"; 
    titulo.classList.add('blancoNegro');
    $("#forma").append(titulo).hide()

         }
         
          else { 
          let titulo = document.createElement("h5")
          titulo.innerHTML= "el correo o la contraseña son incorrectos"; 
          titulo.classList.add('blancoNegro');
          $("#forma").append(titulo).hide()
                }
    
     }
      } 
       




 

formulario.onsubmit = function(event){
  event.preventDefault();

  const inputs = event.target.querySelectorAll("input");
  perfiles1.push(new campos( inputs[0].value, inputs[1].value,)); 
  $("#animacion2").fadeOut("fast")
   $("#forma").fadeIn("fast")
  formulario.reset()
    $("#forma").fadeOut(4000)
  setTimeout(function() {
 $("#forma").empty();
    },5000);  
    
    
  
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

       
	
;




























































 





