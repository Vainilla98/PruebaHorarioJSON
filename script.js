let tabla = document.getElementById("tabla")
let xhttp = new XMLHttpRequest();
let respuesta, respuestaObj;
let fila, celda, texto

const mostarJSON = (Obj) => {
    // Horas
    fila = tabla.insertRow(0)
    celda = fila.insertCell(0)
    celda.innerHTML = 'Horas'
    celda.style.background = 'rgba(112, 115, 153, 0.928)'

    // Dia Semanas
    Obj.forEach((element, i) => {
        fila.insertCell(i+1).innerHTML = element.dia
    });

    // Crea la filas
    Obj[0].modulos.forEach((element, i) => {
        console.log(element)
        fila = tabla.insertRow(i+1)
        fila.insertCell().innerHTML = element.hora
        for (let j = 1; j <= 5; j++) {
            texto = Obj[j-1].modulos[i].nombre
            celda = fila.insertCell(j)
            celda.innerHTML = texto
            rellenarCelda(texto)
        }
    });
}
const rellenarCelda = (texto) => {
    switch (texto) {
        case "SSII":
            celda.style.background = 'rgba(243, 158, 0, 0.928)'
            break;
        case "LMSGI":
            celda.style.background = 'rgba(100, 180, 239)'
            break;
        case "PROG":
            celda.style.background = 'rgba(240, 171, 254)'
            break;
        case "ING":
            celda.style.background = 'rgba( 129, 255, 129)'
            break;
        case "FOL":
            celda.style.background = 'green'
            break;
        case "ENDES":
            celda.style.background = 'rgba( 129, 255, 129)'
            break;
        case "BDD":
            celda.style.background = 'rgba(210, 210, 112)'
            break;
        default:
            break;
    }
}

fetch(`horario.json`)
.then(respuesta => respuesta.json())
.then(respuestaObj => {
    console.log(respuestaObj.horario)
    mostarJSON(respuestaObj.horario)
})

