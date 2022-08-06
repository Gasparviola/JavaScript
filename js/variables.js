

const paletasImportadas = ['odea','babolat','adidas','bullpadel']
const paletasNacionales = ['sane','royal','steel custom']

const todasLasPaletas = paletasImportadas.concat(paletasNacionales)

const paletas = ['odea' , 'babolat' , 'adidas' , 'bullpadel' , 'sane' , 'royal' , 'stell custom'];
const importadas = paletas.slice(0,4)
const nacionales = paletas.slice(4,7)

const productos = [
    {nombre:'sane' , precio: 9000},
    {nombre:'steel custom' , precio: 21000},
    {nombre:'babolat' , precio: 18000},
    {nombre:'royal' , precio: 20000},
    {nombre:'odea' , precio: 8500},
    {nombre:'bullpadel' , precio: 12000},
    {nombre:'adidas' , precio: 15000}
]

function buscarProducto() {
    let aBuscar = buscarPaleta("Ingrese el nombre de la paleta que busca:")
        debugger
        let resultado = productos.find((el)=> el.nombre === aBuscar)
        console.table(resultado)
}

const buscarPaleta = (mensaje)=> {
    Swal.fire({
        title: mensaje,
        input: 'text',
        showCancelButton: true,
        confirmButtonText: 'Listo',
        showLoaderOnConfirm: true,
    })
}


const contenidoDOM = document.querySelector("#producto-contenedor")



const URL = 'js/productos.json'
//const URL = 'http://localhost:3050/trailerflix/'