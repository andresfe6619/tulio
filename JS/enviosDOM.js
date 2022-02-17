
const URLenvios= "Json\Datos.json"
    
   

    








let perfiles1 = [];

class Perfil { 
    constructor(nombre, apellido, NombreDeusuario, ciudad, estado, direccion,  Dato2, acepta) {
        
        this.id = perfiles1.length;
        this.nombre = nombre;
        this.apellido = apellido;
        this.NombreDeusuario = NombreDeusuario;
        this.ciudad = ciudad;
        this.estado = estado;
        this.direccion = direccion;
        this.pais= Dato2;
        this.acepta= acepta;
       
 
    
if (Dato2== +57){
   this.pais= "colombia "
}

 else if (Dato2== +52){
   this.pais= "mexico "
}

 else if (Dato2== +54){
    this.pais= "argentina "
}

 else if (Dato2== +503){
    this.pais= "Salvador"
}

 else {
    this.pais= "no registrado"
}
}
 }


let titulo = document.createElement("h5")
             titulo.innerHTML= "  ¡Has registrado un perfil de envios!" 
             titulo.classList.add('blancoNegro');
             $("#animacion").prepend(titulo).hide()

$('#form').on('submit', function (e) {
            e.preventDefault();
             let inputs = e.target.querySelectorAll('input, select');
             
             perfiles1.push(new Perfil(  inputs[0].value,  inputs[1].value, inputs[2].value,  inputs[3].value, inputs[4].value,  inputs[5].value,  inputs[6].value,  inputs[7].value));
             $("form").fadeOut("fast")
             form.reset()
             
             $("#animacion").fadeIn(3000)
              
             setTimeout(function() {
  
                $("#animacion").fadeOut(2000);
                   },5000);  
         
             $.post(URLenvios, perfiles1,(response, state) => {
                if(state === "succes"){
                    alert("Se han enviado los datos del usuario a la base de datos");
                }
            })
             let json= JSON.stringify(perfiles1)
             sessionStorage.setItem("Perfil", json)
             console.log("formulario enviado")
            
            $("form").fadeIn(4000) 
            
        })  

        
        