// Hackers del Vacío
// feature personaje
//  Base de Dato
let listaMercenarios = [];
let nivelSeguridad = 10; 

//  Registro
function reclutarMercenario(nombre, habilidad) {
  let nombreMayus = nombre.toUpperCase();
// Guardamos un objeto con la info del hacker
  listaMercenarios.push({ nombre: nombreMayus, habilidad: habilidad });
  return `[ACCESO CONCEDIDO] ÉXITO: El Hacker ${nombreMayus} ha sido integrado al Vacío.`;
}

// Consulta de Equipo
function consultarEquipo() {
  console.log("--- LISTA DE HACKERS DEL VACÍO ---");
  for (const mercenario of listaMercenarios) {
    console.log(`Hacker: ${mercenario.nombre} | Habilidad: ${mercenario.habilidad}`);
  }
}

function verificarRango(nombreABuscar) {
  let i = 0;
  let existe = false;
  let nombreBusqueda = nombreABuscar.toUpperCase();

  while (i < listaMercenarios.length) {
    if (listaMercenarios[i].nombre === nombreBusqueda) {
      existe = true;
      break; 
    }
    i++; 
  }
// Comprobamos si que el hacker no este duplicado en nuestra lista
  if (existe) {
    console.log(`EL SISTEMA CONFIRMA: ${nombreBusqueda} está en rango y activo.`);
  } else {
    console.log("ALERTA: El mercenario no se encuentra en la base de datos del Vacío.");
  }
}

