let cargar = document.querySelector("#cargar")
let mezclar = document.querySelector("#mezclar")
let sortear = document.querySelector("#sortear")
let divParticipantes = document.querySelector(".participantes")
let participantes

function cargarDatos() {  
    let nombreIngresado = prompt("Ingrese su nombre")
    let apellidoIngresado = prompt("Ingrese su apellido")
    if (nombreIngresado === "" || apellidoIngresado === "") {
        alert("Por favor complete los campos")
    } else {
        let participante = document.createElement("div")
        let nombre = document.createElement("h3")
        let apellido = document.createElement("h3")
        let eliminar = document.createElement("img")

        eliminar.setAttribute("src", "remove.png")
        eliminar.classList.add("eliminar")
        participante.classList.add("participante")
        divParticipantes.appendChild(participante)
        participante.appendChild(nombre)
        participante.appendChild(apellido)
        participante.appendChild(eliminar)
        nombre.textContent =  nombreIngresado
        apellido.textContent =  apellidoIngresado
        participantes = document.querySelectorAll(".participante")
        let participantesobj = {}
        for (let i = 0; i < participantes.length; i++) {
            participantesobj.nombre = participantes.textContent
        }
        
        eliminar.addEventListener("click", () => {
            participante.remove()
        })
        
    }
}

function mezcla() {
    let random = Math.floor(Math.random()*participantes.length)
    for (let i = 0; i < participantes.length; i++) {
        participantes[random].style.order = Math.floor(Math.random()*participantes.length)
    }
}

function sorteo() {
    let random = Math.floor(Math.random() * participantes.length)
    alert("El ganador del sorteo es " + participantes[random].children[0].textContent+ " " + participantes[random].children[1].textContent)
    participantes[random].style.border = "10px solid red"
    participantes[random].style.backgroundColor = "yellow"
}

cargar.addEventListener("click", cargarDatos)
mezclar.addEventListener("click", mezcla)
sortear.addEventListener("click", sorteo)

// Hacer la reaccion para el ganador
// Dar estilos
// Usar setInterval setTimeout

