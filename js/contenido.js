
import { carritoPaletas } from "./carritoPaletas.js";

const contenedorProductos = document.getElementById('producto-contenedor');

const retornoCardError = () => {
    return `<div class="center white-text"> 
                <br><br><br><br> 
                <h4>La paleta parece no estar disponible. Intente nuevamente en unos minutos.</h4> 
                <br><br>       
            </div>`
}

const obtenerContenido = (URL) => {
    //debugger
    fetch(URL)
        .then((respuesta) => respuesta.json())
        .then((datos) => {
            datos.forEach(paletas => {
                const div = document.createElement('div')
                div.classList.add('col')
                div.innerHTML += `
                                <div class="producto">
                                <div class="card-body">
                                    <div class="card-img-actions">
                                        <img src="${paletas.img}" class="card-img img-fluid" width="96" height="350" alt="">
                                    </div>
                                </div>
        
                                <div class="card-body bg-light text-center">
                                    <div class="mb-2">
                                        <h4 class="font-weight-semibold mb-2">${paletas.nombre}</h4>
                                    </div>
                                    <h3 class="mb-0 font-weight-semibold">$ ${paletas.precio}</h3>
                                    <button type="button" class="btn btn-primary" id=boton${paletas.id}><i class="fa fa-cart-plus mr-2"></i> Agregar al carrito</button>
                                </div>
                                </div>
                                    `
                contenedorProductos.appendChild(div)
                const botonCarrito = document.querySelector(`#boton${paletas.id}`)
                botonCarrito.addEventListener('click', () => {
                    carritoPaletas(paletas.id)
                    toastSwa(`Se agrego ${paletas.nombre} al carrito`)

                })

            })


        })
        .catch((error)=> contenidoDOM.innerHTML = retornoCardError())
        
}


document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        obtenerContenido(URL)
    }, 1500);
})



const toastSwa = (mensaje) => {
    Swal.fire({
        icon: 'success',
        title: mensaje,
        position: 'top-end',
        showConfirmButton: false,
        toast: true,
        timer: 1500,
        timerProgressBar: true,
    })
}

