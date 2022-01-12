let perfiles1 = [];

class Perfil { 
    constructor(profile) {
        
        this.id = perfiles1.length;
        this.nombre = profile.nombre;
        this.apellido = profile.apellido;
        this.NombreDeusuario = profile.NombreDeusuario;
        this.ciudad = profile.ciudad;
        this.estado = profile.estado;
        this.especifica= profile.especifica;
        this.direccion = profile.direccion;
    
    }
}

let formulario = document.createElement('form');
formulario.innerHTML = `
    <input placeholder='ingresa tu nombre' type='text'></input>
    <input placeholder='ingresa tu apellido' type='text'></input>
    <input placeholder='ingresa tu nombre de usuario' type='text'></input>
    <input placeholder='ingresa tu ciudad' type='text'></input>
    <select placeholder> <option>Antioquia</option>
    <option >Caldas</option>
    <option >Tolima</option>
    <option >Chocó</option>
    <option >Cauca</option>  
    <option> otro </option> type='text'></select>
    <input placeholder='Especifica estado' type='text'></input>
    <input placeholder='ingresa tu direccion' type='text'></input>
    <button class='blancoNegro' type='submit'>Enviar</button>
    `;
document.body.appendChild(formulario);

formulario.onsubmit = function(event){
    event.preventDefault();
    const inputs = event.target.children;
    perfiles1.push(new Perfil({ nombre: inputs[0].value, apellido: inputs[1].value, NombreDeusuario: inputs[2].value, Ciudad: inputs[3].value, Estado: inputs[4].value, Especifica: inputs[5].value, Direccion: inputs[6].value}));
    let titulo = document.createElement("h5")
    titulo.innerHTML= "Has registrado un perfil" 
    titulo.classList.add('blancoNegro');
    document.body.append(titulo)
    console.log(perfiles1);
   
        }
