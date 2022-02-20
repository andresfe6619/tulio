

 

const URLenvioencuesta = "Json\Datos.json"
// contructor
const interes = [];
class deportes{
constructor(deporte1, deporte2, deporte3, deporte4){

this.deporte1= deporte1
this.deporte2= deporte2
this.deporte3= deporte3
this.deporte4= deporte4

 }


}
// Funcion formulario
function aparecerFormulario(){
let formulario1 = document.createElement('form');

formulario1.innerHTML = `
<fieldset>

<ul id="animacion2">
<legend class="colorBlanco" > Deportes  </legend>
              <h6> ingrese 4 deportes que usted practique</h6>
      
    
              <input type="text" class="colorBlanco" placeholder="footbal" > </input required>
             
              <input type="text" class="colorBlanco"  placeholder="basketball" > </input required>
            
              <input type="text" class="colorBlanco" placeholder="rugby" > </input required>
             
              <input type="text" class="colorBlanco" placeholder="golf"> </input required>
                <button type="submit" >Enviar</button>
              </ul>  
    
</fieldset>  `;


$("#encuesta3").append(formulario1);

}


//evento click
$('#encuesta2').on('click', function (e) {
    e.preventDefault();
  aparecerFormulario()
  
     $("#encuesta").fadeOut("fast");
     setTimeout(function() {
        $("#encuesta2").remove();
           },100);  
           

  })

  
// evento submit 
  $('#encuesta1').on('submit', function (event) {
        event.preventDefault();
        const inputs = event.target.querySelectorAll("input");
        interes.push(new deportes( inputs[0].value, inputs[1].value,inputs[2].value,inputs[3].value)); 
        $("#encuesta1").fadeOut("fast")
        
    
       
        
       
      
          
             setTimeout(function() {
       $("#encuesta3").remove();
          },2000);  
          
    
          $.post(URLenvioencuesta, interes,(response, state) => {
            if(state === "succes"){
                alert("Se ha enviado tu inicio de sesion");
            }
        })
        let json= JSON.stringify(interes)
        sessionStorage.setItem("deportesInteres", json)
        console.log(interes);
     
      
        
      
  //  tomando del storage para imprimir en un li 
     let items= JSON.parse(sessionStorage.getItem("deportesInteres"))
       console.log(items)
       
    items.forEach(Element=> {
    

        let li= document.createElement("li")

        li.innerHTML ="¡Encuesta enviada! , tus deportes son : "+ Element.deporte1+ ", "+ Element.deporte2+", "+ Element.deporte3+", "+ Element.deporte4 

      
      
      
      
        $("#animacion").append(li).fadeIn(150)


    }

        )
       
     
    });   