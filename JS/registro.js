window.onload = function () {
    console.log("cargado...");
 }
let Datos = [];
const URLregistro = "Json\Datos.json"
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


let titulo = document.createElement("h5")
             titulo.innerHTML= "  ¡Has registrado un perfil!" 
             titulo.classList.add('blancoNegro');
             $("#animacion").prepend(titulo).hide()

$('#form').on('submit', function (e) {
            e.preventDefault();
             let inputs = e.target.querySelectorAll('input, select, radio, checkbox');
             
             Datos.push(new Data(  inputs[0].value,  inputs[1].value, inputs[2].value,  inputs[3].value, inputs[4].value,  inputs[5].value,  inputs[6].value,  inputs[7].value, inputs[8].value,  inputs[9].value,  inputs[10].value,  inputs[11].value,  inputs[12].value, inputs[13].value));
             $("form").fadeOut("fast")
             
             
             $("#animacion").fadeIn(3000)
              
             
         
             $.post(URLregistro, Datos,(response, state) => {
                if(state === "succes"){
                    alert("Se han enviado los datos del usuario a la base de datos");
                }
            })
             let json= JSON.stringify(Datos)
             sessionStorage.setItem("formulario", json)
             console.log("formulario enviado")
         
            $("form").fadeIn("slow")  
         })  

        
