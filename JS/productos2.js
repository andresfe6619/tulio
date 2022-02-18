const interes = []; 

const URLenvioencuesta = "Json\Datos.json"
class deportes{
constructor(deporte1, deporte2, deporte3, deporte4){

this.deporte1= deporte1
this.deporte2= deporte2
this.deporte3= deporte3
this.deporte4= deporte4

 }


}


$('#encuesta2').on('click', function (e) {
    e.preventDefault();
  
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
     $("#encuesta").fadeOut("fast");
     setTimeout(function() {
        $("#encuesta2").remove();
           },100);  
           

  })

  

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
        sessionStorage.setItem("deportesitos", json)
        console.log(interes);
     
      
        
      
             
     let items= JSON.parse(sessionStorage.getItem("deportesitos"))
       console.log(items)
       
    items.forEach(Element=> {
    

        let div= document.createElement("li")

        div.innerHTML ="Has practicado:  "+ Element.deporte1+ ", "+ Element.deporte2+", "+ Element.deporte3+", "+ Element.deporte4 

      
      
      
      
        $("#animacion").append(div).fadeIn(150)


    }

        )
       
     
    });   