

const cabecera = document.getElementById("cabecera")
const inicio = document.getElementById("inicio")

cabecera.innerText = "www.WorldPadel.com"
inicio.innerText = "Mundo Paleta"

const imagen = document.querySelector("img")
    imagen.addEventListener("click", ()=> {
        alert("Una eleccion genial, ¡agregala al carrito!")
    })
