// Función para agregar un cómic al carrito
function agregarAlCarrito(nombre, precio) {
    // Crea una nueva fila en la tabla del carrito
    var newRow = document.createElement("tr");
    newRow.innerHTML = `<td>${nombre}</td><td>${precio}</td><td><button class="btn btn-danger" onclick="eliminarDelCarrito(this)">Eliminar</button></td>`;
    document.getElementById("cartItems").appendChild(newRow);
}


// Función para eliminar un cómic del carrito
function eliminarDelCarrito(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

// Función para realizar la compra (mostrar ventana emergente)
function comprar() {
    alert("¡Compra realizada desde la página del carrito!");
    // Puedes agregar aquí la lógica adicional para enviar la información de la compra al servidor, etc.
    // Limpia el carrito después de la compra si es necesario.
    document.getElementById("cartItems").innerHTML = "";
}
