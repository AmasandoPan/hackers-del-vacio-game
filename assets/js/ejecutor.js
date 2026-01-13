console.group("Registro y Duplicados");
console.log(reclutarMercenario("Neox", "Infiltración"));
console.log(reclutarMercenario("Cipher", "Cifrado"));
console.log(reclutarMercenario("NEOX", "Hackeo"));
consultarEquipo();
console.groupEnd();

console.group("Verificación y Cálculos");
verificarRango("Cipher");  
verificarRango("Ghost-99");  
console.log("Pago dificultad 5 (esperado 5500):", calcularRecompensas(5));
console.log("Pago dificultad 2 + bono 100 (esperado 2100):", calcularRecompensas(2, 100));
console.groupEnd();

console.group("Ejecución de Contratos");
ejecutarContrato("NEOX", "Mision 3", 7);

ejecutarContrato("Desconocido", "Mision 1", 3);

nivelSeguridad = 2; 
ejecutarContrato("CIPHER", "Mision 2", 5);
nivelSeguridad = 10;
console.groupEnd();