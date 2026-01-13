// Hackers del Vacío
// feature personaje
//  Base de Datos
let listaMercenarios = [];
let nivelSeguridad = 10;

//  Registro
function reclutarMercenario(nombre, habilidad) {
  let nombreMayus = nombre.toUpperCase();

  // verificamos si ya existe el nombre
  const existe = listaMercenarios.some(
    (mercenario) => mercenario.nombre === nombreMayus
  );

  // usamos if para decidir si agregamos o denegamos al mercenario duplicado
  if (existe) {
    return `[ERROR]: El Hacker ${nombreMayus} ya está en la base de datos. No se permiten registros duplicados.`;
  } else {
    // si no existe se agrega al arreglo listaMercenarios
    listaMercenarios.push({ nombre: nombreMayus, habilidad: habilidad });
    return `[ACCESO CONCEDIDO] ÉXITO: El Hacker ${nombreMayus} ha sido integrado al Vacío.`;
  }
}

// funcion para verificar al equipo
function consultarEquipo() {
  console.log("--- LISTA DE HACKERS DEL VACÍO ---");
  // recorremos por todos los nombres en listaMercenarios
  for (const mercenario of listaMercenarios) {
    console.log(
      `Hacker: ${mercenario.nombre} | Habilidad: ${mercenario.habilidad}`
    );
  }
}

function verificarRango(nombreBuscar) {
  let i = 0;
  let existeRango = false;
  let nombreBusqueda = nombreBuscar.toUpperCase();

  while (i < listaMercenarios.length) {
    if (listaMercenarios[i].nombre === nombreBusqueda) {
      existeRango = true;
      break;
    }
    i++;
  }
  // Comprobamos si  el hacker no este duplicado en nuestra lista
  if (existeRango) {
    console.log(
      `EL SISTEMA CONFIRMA: ${nombreBusqueda} está en rango y activo.`
    );
  } else {
    console.log(
      "ALERTA: El mercenario no se encuentra en la base de datos del Vacío."
    );
  }
}

let misionesDisponibles = ["Mision 1", "Mision 2", "Mision 3"];

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
  let misionesIlegales = ["Mision 1", "Mision 2"];

  if (misionesIlegales.includes(nombreMision)) {
    return "Mision Ilegal para los hackers del vacío";
  } else {
    return "Mision legal para los hackers del vacío";
  }
}

// integracion final

function ejecutarContrato(nombreMerc, nombreMision, dificultad) {
  function validarAcceso() {
    // Verificamos si el mercenario existe usando la lógica de Persona A
    const mercenarioExiste = listaMercenarios.some(
      (m) => m.nombre === nombreMerc.toUpperCase()
    );

    // Verificamos el nivel de seguridad
    if (mercenarioExiste && nivelSeguridad >= 5) {
      return true;
    }
    return false;
  }

  console.log(`--- INICIANDO OPERACIÓN: ${nombreMision} ---`);

  if (validarAcceso()) {
    console.log(`Acceso verificado para ${nombreMerc}.`);
    const tipoMision = validarMision(nombreMision);
    console.log(`Estado legal: ${tipoMision}`);
    console.log("Iniciando protocolos de hackeo...");
    const intentosEfectuados = simuladorPeligro();
    const pago = calcularRecompensas(dificultad);
    console.log(`[OPERACIÓN FINALIZADA]`);
    console.log(
      `El Hacker ${nombreMerc} completó la misión en ${intentosEfectuados} intentos.`
    );
    console.log(`Créditos transferidos: ${pago} bits.`);
  } else {
    console.log(
      "[ERROR CRÍTICO]: Acceso denegado. Mercenario no autorizado o nivel de seguridad insuficiente."
    );
  }
}
