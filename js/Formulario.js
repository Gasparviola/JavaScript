const focoEnCampos = ()=> {
    const campos = document.querySelectorAll("input")
    for (let campo of campos) {
        if (campo.type != "submit") {
            campo.addEventListener("focus", ()=> campo.className = "fondo-inputs")
            campo.addEventListener("blur", ()=> campo.className = "")
        }
    }
}
focoEnCampos()

btnSubmit.addEventListener("mousemove", ()=> {
    btnSubmit.title = "Complete los datos antes de ENVIAR"
})

document.addEventListener("submit", (e)=> {
    e.preventDefault()
    guardarDatosUsr()
    formSwa(` Gracias por su compra 😃`)
})


function guardarDatosUsr() {
    debugger
    const datosDeUsr = {
        nombre: inputNombre.value,
        telefono: inputTelefono.value,
        email: inputEmail.value
    }
    let str = JSON.stringify(datosDeUsr)
    localStorage.setItem("datosDeUsr", str)
}

function recuperarDatosDeUsr() {
    if (localStorage.getItem("datosDeUsr")) {
        const datosDeUsr = JSON.parse(localStorage.getItem("datosDeUsr"))
        inputNombre.value = datosDeUsr.nombre
        inputTelefono.value = datosDeUsr.telefono
        inputEmail.value = datosDeUsr.email
    }
}

recuperarDatosDeUsr()


const formSwa = (mensaje)=> {
    Swal.fire({
        icon:'success',
        title:mensaje,
        position:'top',
        showConfirmButton: false,
        toast: true,
        timer:2000,
        timerProgressBar: true,
    })
}