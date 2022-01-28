window.onload = function () {
    alert("cargado...");
 }
let Datos = [];
const URLregistro = "C:\Users\Andres\Documents\desarrollo web\meowsculuos-vasquez\JS\Json\Datos.json"
class Data { 
    constructor(nombre,segundoNombre,apellido,segundoApellido,direccion,numeroDeTelefono,correoElectronico,contraseña,comentarios,edad,sexo,especifica,acepta) {
        
        this.id = Datos.length;
        this.nombre = nombre;
        this.segundoNombre = segundoNombre;
        this.apellido = apellido;
        this.segundoApellido = segundoApellido;
        this.direccion = direccion;
        this.numeroDeTelefono = numeroDeTelefono;
        this.correoElectronico = correoElectronico;
        this.contraseña = contraseña;
        this.comentarios = comentarios;
        this.edad = edad;
        this.sexo = sexo;
        this.especifica= especifica;
        this.acepta= acepta;
    }
}

//let formulario = document.getElementById('form');

//formulario.addEventListener("submit", formularioenviado)

//function formularioenviado(e){
  /*   e.preventDefault();
   
    const inputs = e.target.children;
    Datos.push(new Data({ nombre: inputs[0].value, segundoNombre: inputs[1].value, apellido: inputs[2].value, segundoApellido: inputs[3].value, direccion: inputs[4].value, numeroDeTelefono: inputs[5].value, correoElectronico: inputs[6].value, contraseña: inputs[7].value, comentarios: inputs[8].value, edad: inputs[9].value, sexo: inputs[10].value, Especifica: inputs[11].value, acepta: inputs[12].value,}));
    
    let json= JSON.stringify(formulario,)
    sessionStorage.setItem("formulario", json)
    console.log("formulario enviado")

}
 */
let titulo = document.createElement("h5")
             titulo.innerHTML= "  ¡Has registrado un perfil!" 
             titulo.classList.add('blancoNegro');
             $("#animacion").prepend(titulo).hide()

$('#form').on('submit', function (e) {
            e.preventDefault();
             let inputs = e.target.querySelectorAll('input');
             
             Datos.push(new Data(  inputs[0].value,  inputs[1].value, inputs[2].value,  inputs[3].value, inputs[4].value,  inputs[5].value,  inputs[6].value,  inputs[7].value, inputs[8].value,  inputs[9].value,  inputs[10].value,  inputs[11].value,  inputs[12].value));
             $("form").fadeOut("fast")
             
             
             $("#animacion").fadeIn(3000)
              
             
              /* let titulo = document.createElement("h5")
             titulo.innerHTML= " ¡Has registrado un perfil!" 
             titulo.classList.add('blancoNegro');
             $("#form").append(titulo) */
             $.post(URLregistro, Datos,(response, state) => {
                if(state === "succes"){
                    alert("Se han enviado los datos del usuario a la base de datos");
                }
            })
             let json= JSON.stringify(Datos)
             sessionStorage.setItem("formulario", json)
             console.log("formulario enviado")
         
             
         })  

         