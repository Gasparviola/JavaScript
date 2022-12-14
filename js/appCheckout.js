
const carritoCompras = [];


const toastCarroVacio = (mensaje) => {
    Swal.fire({
        icon: 'warning',
        position: 'center',
        title: mensaje,
        showConfirmButton: true,
        timerProgressBar: true,
        background: '#d87a2d',
        color: '#ffffff', 
    }).then(function() {
        window.location.href = "../index.html";
    })
}





const recuperarCarrito = () => {
    const contenedorCarrito = document.getElementById('carrito-contenedor')
        if (localStorage.getItem("carrito")) {
        let carrito = JSON.parse(localStorage.getItem("carrito"))

            carrito.forEach(producto => {
            carritoCompras.push(producto)
            let div = document.createElement('div')
            div.classList.add('productoEnCarrito')
            div.innerHTML += `  <div><p class="productoEnCarrito">${producto.nombre}</p></div>
                                <div class="precioEnCarrito"><p class="productoEnCarrito">Precio: ${producto.precio}</p></div>
                                <div><p id="cantidad${producto.id}" class="productoEnCarrito">Cantidad: ${producto.cant}</p></div>
                            `
            contenedorCarrito.appendChild(div)
        
        }
        )
    }
    else
    toastCarroVacio ("El carrito esta vacio")
    




}
recuperarCarrito ()


