import { productos } from "./productos.js"

const carritoCompras = []

export const carritoPaletas = (productoId) => {
    const contenedorCarrito = document.getElementById('carrito-contenedor')
    
    const renderProductoCarrito = () =>{
    let producto = productos.find(producto => producto.id == productoId)
    carritoCompras.push(producto)
    guardoCarrito()

    let div = document.createElement ('div')
        div.classList.add('productoEnCarrito')
        div.innerHTML = `<p>${producto.nombre}</p>
                        <p>Precio: ${producto.precio}</p>   
                        <p id="cantidad${producto.id}">Cantidad:  ${producto.cantidad}</p>
                        <button id="eliminar${producto.id}" class="boton-eliminar"><img src="img/archive-fill.svg"></button>
        `
        contenedorCarrito.appendChild(div)

            const btnDel = document.getElementById(`eliminar${producto.id}`) 
            btnDel.addEventListener('click', () =>{
            eliminarDelCarrito(`${producto.id}`)
            })
        

                
    }
    renderProductoCarrito()
}

const eliminarDelCarrito = (productoEliminado) => {
    
    console.log(carritoCompras);

    
    const contCarrito = carritoCompras.find( producto => producto.id == productoEliminado) 


    const indice = carritoCompras.indexOf(contCarrito)

    console.log(indice,contCarrito);
    
    carritoCompras.splice(indice, 1)
    console.log(carritoCompras);
    guardoCarrito()
    location.reload();
    }



function guardoCarrito() {
    if (carritoCompras.length > 0) {
        localStorage.setItem("carrito", JSON.stringify(carritoCompras))
    }
    else if(carritoCompras.length < 1)
        localStorage.clear();
    }



const recuperarCarrito = () => {
    
    const contenedorCarrito = document.getElementById('carrito-contenedor')
        if (localStorage.getItem("carrito")) {
        let carrito = JSON.parse(localStorage.getItem("carrito"))

            carrito.forEach(producto => {
            carritoCompras.push(producto)
            let div = document.createElement ('div')
            div.classList.add('productoEnCarrito')
            div.innerHTML = `<p>${producto.nombre}</p>
                                <p>Precio: ${producto.precio}</p>   
                                <p id="cantidad${producto.id}">Cantidad:  ${producto.cantidad}</p>
                                <button id="eliminar${producto.id}" class="boton-eliminar"><img src="img/archive-fill.svg"></button>
                            `
        contenedorCarrito.appendChild(div)

            const btnDel = document.getElementById(`eliminar${producto.id}`) 
            btnDel.addEventListener('click', () =>{
            eliminarDelCarrito(`${producto.id}`)
            })

        }
        )
    }
}
recuperarCarrito()





export {carritoCompras};