
//function Monto () {  prompt ("ingrese el monto") }
let Dolares= prompt ("Ingresa la divisa de tu pais").toLowerCase;
if (Dolares== "pesos colombianos"){
  result = 4018
  alert(`Un dolar en su pais es ${result} pesos colombianos` )
}

 else if (Dolares== "pesos mexicanos"){
    result = 20
    alert(`Un dolar en su pais es ${result} pesos mexicanos` )
  }

 else {
   alert("aun no llegamos a tu pais :(")
   
 }

//const COTIZACION_DOLAR= Dolares



//let ResultadoFinal = (value) =>  value / COTIZACION_DOLAR;

//alert (ResultadoFinal)

//parte 1 


let Dato1= prompt("ingrese su numero de telefono")
    
    
    let Dato2= prompt("ingrese el numero indicativo de su pais")
    
    if (Dato2== +57){
       alert("Usted es colombiano ")
    }
    
     else if (Dato2== +52){
       alert("Usted es mexicano ")
    }
    
     else if (Dato2== +54){
       alert("Usted es argentino ")
    }
    
     else if (Dato2== +503){
       alert("Usted es de el salvador")
    }
    
     else {
       alert("aun no llegamos a tu pais o introdujiste texto")
    }

    
