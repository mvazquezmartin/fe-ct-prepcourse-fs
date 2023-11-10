/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
  // Retornar el primer elemento del arreglo recibido por parámetro.
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido por parámetro.
  // Tu código:
  return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
  // Retornar la longitud del arreglo recibido por parámetro.
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // El arreglo recibido por parámetro contiene números.
  // Retornar un arreglo con los elementos incrementados en +1.
  // Tu código:
  // 1
  // let resultado = [];
  // for (let i = 0; i < array.length; i++) {
  //   resultado.push(array[i] + 1);
  // }
  // return resultado;
  // 2
  // return array.map((elemento) => {
  //   return elemento + 1;
  // });
  const plusOne = [];
  array.forEach((num) => {
    plusOne.push(num + 1);
  });
  return plusOne;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retornar un string donde todas las palabras estén concatenadas
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  return palabras.join(" ");
}

function arrayContiene(array, elemento) {
  // Verifica si el elemento existe dentro del arreglo recibido.
  // Retornar true si está, o false si no está.
  // Tu código:
  return array.includes(elemento);
}

function agregarNumeros(arrayOfNums) {
  // El parámetro "arrayOfNums" debe ser un arreglo de números.
  // Suma todos los elementos y retorna el resultado.
  // Tu código:
  const suma = arrayOfNums.reduce((acumulador, num) => acumulador + num, 0);

  return suma;
}

function promedioResultadosTest(resultadosTest) {
  // El parámetro "resultadosTest" es un arreglo de números.
  // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
  // Tu código:
  const suma = resultadosTest.reduce((acumulador, num) => acumulador + num, 0);
  const promedio = suma / resultadosTest.length;
  return promedio;
}

function numeroMasGrande(arrayOfNums) {
  // El parámetro "arrayOfNums" es un arreglo de números.
  // Retornar el número más grande.
  // Tu código:
  //1
  // let maxNum = arrayOfNums[0];
  // for (let i = 1; i < arrayOfNums.length; i++) {
  //   if (arrayOfNums[i] > maxNum) {
  //     maxNum = arrayOfNums[i];
  //   }
  // }
  // return maxNum;
  // 2
  // return arrayOfNums.reduce(function (max, num) {
  //   return num > max ? num : max;
  // }, arrayOfNums[0]);
  // 3
  // arrayOfNums.sort(function(a, b) {
  //   return b - a;
  // });
  // return arrayOfNums[0];
  return Math.max(...arrayOfNums);
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  if (arguments.length === 0) return 0;
  let result = 1;
  for (let i = 0; i < arguments.length; i++) {
    result *= arguments[i];
  }
  return result;
}

function cuentoElementos(array) {
  // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
  // Tu código:
  // 1
  // return array.filter((element) => element > 18).length;
  // 2
  // const resultArr = []
  // array.forEach((element)=>{if(element > 18) resultArr.push(array[element])})
  // return resultArr
  // const resultArr = [];
  // for (let i = 0; i < array.length; i++) {
  //   if (array[i] > 18) resultArr.push(array[i]);
  // }
  // return resultArr.length;
  const elementos = array.filter(function (n) {
    return n > 18;
  });
  console.log(elementos);
  return elementos.length;
}

function diaDeLaSemana(numeroDeDia) {
  // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
  // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
  // Tu código:
  if (numeroDeDia === 1 || numeroDeDia === 7) return "Es fin de semana";
  return "Es dia laboral";
}

function empiezaConNueve(num) {
  // Esta función recibe por parámetro un número.
  // Debe retornar true si el entero inicia con 9 y false en otro caso.
  // Tu código:
  const toString = num.toString();
  return toString[0] === "9";
  // return toString.substring(0,1) === "9"
}

function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario retornar false.
  // Tu código:
  // return array.every((e) => e === array[0]);
  for (let i = 0; i < array.length; i++) {
    if (array[0] !== array[i]) return false;
  }
  return true;
}

function mesesDelAño(array) {
  // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  // 1
  // const arrayReturn = [];
  // for (let i = 0; i < array.length; i++) {
  //   if (
  //     array[i] === "Enero" ||
  //     array[i] === "Marzo" ||
  //     array[i] === "Noviembre"
  //   ) {
  //     arrayReturn.push(array[i]);
  //   }
  // }
  // if (arrayReturn.length !== 3) return "No se encontraron los meses pedidos";
  // return arrayReturn;
  // 2
  // const mesesPedidos = array.filter(
  //   (mes) => mes === "Enero" || mes === "Marzo" || mes === "Noviembre"
  // );

  // if (mesesPedidos.length === 3) {
  //   return mesesPedidos;
  // } else {
  //   return "No se encontraron los meses pedidos";
  // }
  // 3
  // const mesencontrado = [];
  // const mesbuscado = ["Marzo", "Noviembre", "Marzo"];
  // for (let i = 0; i < array.length; i++) {
  //   if (array.includes(mesbuscado[i])) {
  //     mesencontrado.push(mesbuscado[i]);
  //   }
  // }
  // if (mesencontrado.length === mesbuscado.length) {
  //   console.log(mesencontrado);
  //   return mesencontrado;
  // } else {
  //   return "No se encontraron los meses pedidos";
  // }
  // 4
  const mesesBuscados = ["Enero", "Marzo", "Noviembre"];
  const mesesEncontrados = array.filter((elemento) =>
    mesesBuscados.includes(elemento)
  );
  console.log(mesesEncontrados);
  if (mesesEncontrados.length === 3) {
    return mesesEncontrados;
  }
  return "No se encontraron los meses pedidos";
}

function tablaDelSeis() {
  // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Tu código:
  const sixMulti = [];
  for (let i = 0; i <= 10; i++) {
    sixMulti.push(6 * i);
  }
  return sixMulti;
}

function mayorACien(array) {
  // La función recibe un arreglo con enteros entre 0 y 200.
  // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
  // Tu código:
  // 1
  // const arrayReturn = [];
  // for (let i = 0; i < array.length; i++) {
  //   if (array[i] > 100 ) arrayReturn.push(array[i]);
  // }
  // return arrayReturn;
  return array.filter((num) => num > 100);
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retornarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // [PISTA]: utiliza el statement 'break'.
  // Tu código:
  // const newArray = [];

  // for (let i = 0; i < 10; i++) {
  //   num += 2
  //   newArray.push((num));
  //   if (num === i) break;
  // }

  // if (newArray.length < 10) return "Se interrumpió la ejecución";
  // return newArray;
  // const newArray = [];
  // for (let i = 1; i <= 10; i++) {
  //   newArray.push((num += 2));
  //   if (num === i) return "Se interrumpió la ejecución";
  // }
  // return newArray;
  const newArray = [];
  let iterations = 0;

  do {
    num += 2;
    newArray.push(num);
    iterations++;

    if (num === iterations) {
      return "Se interrumpió la ejecución";
    }
  } while (iterations < 10);

  return newArray;
}

function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continua con la siguiente iteración.
  // [PISTA]: utiliza el statement 'continue'.
  // Tu código:
  // 1
  const newArray = [];
  for (let i = 0; i < 10; i++) {
    if (i === 5) continue;
    num += 2;
    newArray.push(num);
  }
  return newArray;
  // 2
  // let conteo = 0;
  // const arr = [];
  // do {
  //   conteo++;
  //   if (conteo === 5) continue;
  //   num += 2;
  //   arr.push(num);
  // } while (conteo < 10);
  // return arr;
  // const arr = [];
  // let i = 0;
  // while (i < 10) {
  //   i++;
  //   if (i === 5) continue;
  //   num += 2;
  //   arr.push(num);
  // }
  // return arr;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  tablaDelSeis,
  mayorACien,
  breakStatement,
  continueStatement,
};
