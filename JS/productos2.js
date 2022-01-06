const interes = []; 


for (let index = 0;  index < 4; index++) { 
    interes.push(prompt("Ingrese deportes que practica como levantamiento de pesas, baseball, footbal, boxing etc...."))
 
}

let ul = document.createElement("ul")
let inner= ""


for(area of interes ) {
    inner+= `<li>${interes}</li>` 
    break
}

ul.innerHTML = inner

document.body.appendChild(ul)
