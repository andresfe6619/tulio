let productos = [
    {id: 1, Tipo: "Pequeña",largo: 25 , peso: 15, precio: 30, cantidad: 2},
    {id: 2, Tipo: "Adaptable",largo: 30, peso: 30, precio: 40, cantidad: 2},
    {id: 3, Tipo: "Barra", largo: 150, peso: 45, precio: 60, cantidad: 1},
    
     ];
    let peso= []
    let tipo= prompt("escribe peso para ordenar de las mas pequeñas a las mas grandes CM, Kilogramos y Dolares")
     if (tipo=peso) {
      alert(productos.sort(product =>(function(a, b) {
      return a - b;
    })));     }
    
    
    
    