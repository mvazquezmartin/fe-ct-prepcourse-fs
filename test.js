var ok = [
  "Marzo",
  "Diciembre",
  "Abril",
  "Junio",
  "Julio",
  "Noviembre",
  "Enero",
  "Mayo",
  "Febrero",
];
var notOk = ["Marzo", "Diciembre", "Julio", "Noviembre"];
function mesesDelAño(array) {
  // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  const filter = array.filter(
    (elemento) =>
      elemento === "Enero" || elemento === "Marzo" || elemento === "Noviembre"
  );
  if (filter.length === 3) {
    return filter;
  }
  return "No se encontraron los meses pedidos";
}

console.log(mesesDelAño(ok));
console.log(mesesDelAño(notOk))
