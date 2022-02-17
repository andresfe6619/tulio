window.onload = function () {
    console.log("cargado...");
 }

const URLregistro = "Json\Datos.json"


const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

/* const campos = {
	usuario: false,
	nombre: false,
	password: false,
	correo: false,
	telefono: false
} */

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
	
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = campos;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		;
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

let campos = [];
class Data { 
  constructor(usuario, nombre,password,password2, correo, telefono, acepta ) {
      
      this.id = campos.length;
        this.usuario = usuario; 
        this.nombre= nombre; 
        this.password = password;
      this.password2= password2;
      this.correo = correo;
      this.telefono = telefono; 
      this.acepta= acepta;
  

 }

 }



formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	if( campos['password'] == true){
		
 let inputs = e.target.querySelectorAll("input");
	  campos.push(new Data(  inputs[0].value,  inputs[1].value, inputs[2].value,  inputs[3].value, inputs[4].value,  inputs[5].value,  inputs[6].value));
      $("form").fadeOut("fast")	
      
       let json= JSON.stringify(campos)
      sessionStorage.setItem("formulario", json)
      console.log("formulario enviado")
      $("form").fadeIn(3000)	
      document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		
     
             
    
      
      
   
      
      
 formulario.reset();
     })
     
  
  }
    
    
    
    
	 else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
		}, 5000);

  }
})  ;













































/* class Data { 
    constructor(nombre,segundoNombre,apellido,segundoApellido,direccion,numeroDeTelefono,correoElectronico,contraseña,contraseña2, edad,sexo,especifica,acepta) {
        
        this.id = Datos.length;
        this.nombre = nombre;
        this.segundoNombre = segundoNombre;
        this.apellido = apellido;
        this.segundoApellido = segundoApellido;
        this.direccion = direccion;
        this.numeroDeTelefono = numeroDeTelefono;
        this.correoElectronico = correoElectronico;
        this.contraseña = contraseña;
        this.contraseña2= contraseña2;
        this.edad = edad;
        this.sexo = sexo;
        this.especifica= especifica;
        this.acepta= acepta;
    
        if (contraseña2 ==! contraseña) {
            let titulo = document.createElement("h5")
            titulo.innerHTML= "las contraseñas no coinciden" 
            titulo.classList.add('blancoNegro');
            $("#contraseñas").prepend(titulo).hide
            $("#contraseñas").fadeIn(2000)
          throw new Error("error"); 
        }
 
      else{
     
      }
    }
}


let titulo = document.createElement("h5")
             titulo.innerHTML= "  ¡Has registrado un perfil!" 
             titulo.classList.add('blancoNegro');
             $("#animacion").prepend(titulo).hide()

$('#form').on('submit', function (e) {
            e.preventDefault();
             let inputs = e.target.querySelectorAll("input, select");
             
             Datos.push(new Data(  inputs[0].value,  inputs[1].value, inputs[2].value,  inputs[3].value, inputs[4].value,  inputs[5].value,  inputs[6].value,  inputs[7].value, inputs[8].value,  inputs[9].value,  inputs[10].value,  inputs[11].value));
             $("form").fadeOut("fast")
             
             
             $("#animacion").fadeIn(3000)
              
             form.reset()
             $("#animacion").fadeOut(4000)
        
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

        
 */