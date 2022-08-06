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