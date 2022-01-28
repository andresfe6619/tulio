
const URLenvios= "C:\Users\Andres\Documents\desarrollo web\meowsculuos-vasquez\JS\Json\Datos.json"


let perfiles1 = [];

class Perfil { 
    constructor(nombre, apellido, NombreDeusuario, ciudad, estado, especifica, direccion) {
        
        this.id = perfiles1.length;
        this.nombre = nombre;
        this.apellido = apellido;
        this.NombreDeusuario = NombreDeusuario;
        this.ciudad = ciudad;
        this.estado = estado;
        this.especifica= especifica;
        this.direccion = direccion;
    
    }
}

let formulario = document.createElement('form');
formulario.innerHTML = `

<section id="forma"> </section>
<fieldset id="animacion">
<input placeholder='ingresa tu nombre' type='text'></input>
    <input placeholder='ingresa tu apellido' type='text'></input>
    <input placeholder='ingresa tu nombre de usuario' type='text'></input>
    <input placeholder='ingresa tu ciudad' type='text'></input>
    <select> 
    <option>Antioquia</option>
    <option >Caldas</option>
    <option >Tolima</option>
    <option >Chocó</option>
    <option >Cauca</option>  
    <option> otro </option> 
    </select>
    <input placeholder='Especifica estado' type='text'></input>
    <input placeholder='ingresa tu direccion' type='text'></input>
    <button class='blancoNegro' type='submit'>Enviar</button>
    </fieldset>`;
document.body.appendChild(formulario);
let titulo = document.createElement("h5")
    titulo.innerHTML= "¡Has registrado tu direccion!"; 
    titulo.classList.add('blancoNegro');
    $("#forma").append(titulo).hide()

formulario.onsubmit = function(event){
    event.preventDefault();
     const inputs = event.target.querySelectorAll('input');
    const options = event.target.querySelectorAll('option')
    $("#animacion").fadeOut("fast");
   perfiles1.push(new Perfil(   inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value,  inputs[4].value,  options[5].value));
    let json= JSON.stringify(perfiles1)
    localStorage.setItem("perfiles", json)
    $.post(URLenvios, perfiles1,(response, state) => {
        if(state === "succes"){
            alert("su direccion se ha enviado a la base de datos")
        }
    })
    $("#forma").fadeIn(1000)

    console.log(inputs[0].value);
        }

        $.get(URLenvios, function(response, state) {
                 console.log(response)
             })