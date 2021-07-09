const expresionesReg = {
    "nombre": /^[a-zA-Z]{3,15}$/,
    "email": /^[a-zA-Z0-9\.-_]{3,30}@+[a-zA-Z0-9\.-_]{3,15}\.+[a-zA-Z]+$/,
    "mensaje": /^[a-zA-Z0-9\.-_]{3,160}$/
}
const sendFormu = {
    "nombre": false,
    "email": false,
    "mensaje": false
}
const inputs = document.querySelectorAll("#formulario input");
const areaMensaje = document.querySelector("#formulario textarea");
const buttonSend = document.getElementById("button-send")

const validacion = (e) => {
    if (e.target.name === "nombre") {
        validacionNow(e.target.value , e.target.name, expresionesReg.nombre);
    } else if (e.target.name === "email") {
        validacionNow(e.target.value, e.target.name, expresionesReg.email);
    } else if (e.target.name === "mensaje"){
        validacionNow(e.target.value, e.target.name, expresionesReg.mensaje);
    }
}

const validacionNow = (input_valor, input_name, expReg) => {
    if (expReg.test(input_valor)){
        document.querySelector(`#formulario--${input_name} i`).classList.replace('fa-times-circle', 'fa-check-circle');
        document.querySelector(`#formulario--${input_name} i`).classList.replace('icon--error-activado', 'icon--check-activado');
        document.querySelector(`#formulario--${input_name} p`).classList.replace('formulario--msj-error-activado', 'formulario--msj-error-desactivado');
        sendFormu[input_name] = true;
    } else {
        document.querySelector(`#formulario--${input_name} i`).classList.remove('fa-check-circle');
        document.querySelector(`#formulario--${input_name} i`).classList.remove('icon--check-activado');
        document.querySelector(`#formulario--${input_name} p`).classList.remove('formulario--msj-error-desactivado');
        document.querySelector(`#formulario--${input_name} i`).classList.add('fa-times-circle');
        document.querySelector(`#formulario--${input_name} i`).classList.add('icon--error-activado');
        document.querySelector(`#formulario--${input_name} p`).classList.add('formulario--msj-error-activado');
        sendFormu[input_name] = false;
    }
}
inputs.forEach((input) => {
    input.addEventListener("keyup", validacion);
    input.addEventListener("blur", validacion);
})

areaMensaje.addEventListener("keyup", validacion);
areaMensaje.addEventListener("blur", validacion);


buttonSend.addEventListener('click', (e) => {
    console.log(sendFormu.nombre)
    console.log(sendFormu.email)
    console.log(sendFormu.mensaje)
    console.log(buttonSend)
    if (sendFormu.nombre && sendFormu.email && sendFormu.mensaje) {
        buttonSend.type = "submit";
    } else {
        document.getElementById("error-formulario").classList.remove("formulario--error")
        document.getElementById("error-formulario").classList.add("formulario--bien")
        e.preventDefault()
    }
})