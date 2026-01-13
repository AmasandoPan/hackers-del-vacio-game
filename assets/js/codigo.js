let misionesDisponibles = [
    "Mision 1",
    "Mision 2",
    "Mision 3"
]

function calcularRecompensas(dificultad, bono = 500) {
    let recompensaBase = dificultad * 1000;
    let recompensaTotal = recompensaBase + bono;
    return recompensaTotal;
}

function simuladorPeligro() {
    let intentos = 0;
    let riesgo;

    do {
        riesgo = Math.floor(Math.random() * 10) + 1;
        intentos++;
        console.log(`Hackeo ${intentos} | Riesgo: ${riesgo}`);
    } while (riesgo <= 8 && intentos < 5);

    return intentos;
}

function validarMision(nombreMision) {
    let misionesIlegales = [
        "Mision 1",
        "Mision 2"
    ];

    if (misionesIlegales.includes(nombreMision)) {
        return "Mision Ilegal para los hackers del vacío";
    } else {
        return "Mision legal para los hackers del vacío";
    }
}