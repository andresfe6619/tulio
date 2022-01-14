
let Datos = [];

class Data { 
    constructor(profile) {
        
        this.id = perfiles1.length;
        this.nombre = profile.nombre;
        this.segundoNombre = profile.segundoNombre;
        this.apellido = profile.apellido;
        this.segundoApellido = profile.segundoApellido;
        this.direccion = profile.direccion;
        this.numeroDeTelefono = profile.numeroDeTelefono;
        this.correoElectronico = profile.correoElectronico;
        this.contraseña = profile.contraseña;
        this.comentarios = profile.comentarios;
        this.edad = profile.edad;
        this.sexo = profile.sexo;
        this.especifica= profile.especifica;
        this.acepta= profile.acepta;
    }
}

let formulario = document.getElementById('form');

formulario.addEventListener("submit", formularioenviado)

function formularioenviado(e){
    e.preventDefault();
   
    const inputs = e.target.children;
    Datos.push(new Data({ nombre: inputs[0].value, segundoNombre: inputs[1].value, apellido: inputs[2].value, segundoApellido: inputs[3].value, direccion: inputs[4].value, numeroDeTelefono: inputs[5].value, correoElectronico: inputs[6].value, contraseña: inputs[7].value, comentarios: inputs[8].value, edad: inputs[9].value, sexo: inputs[10].value, Especifica: inputs[11].value, acepta: inputs[12].value,}));
    
    let json= JSON.stringify(formulario,)
    sessionStorage.setItem("formulario", json)
    console.log("formulario enviado")

}