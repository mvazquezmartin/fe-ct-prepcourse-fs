/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  // 1
  // return Object.entries(objeto);
  const newArray = [];
  for (const i in objeto) {
    const claveValor = [i, objeto[i]];
    newArray.push(claveValor);
  }
  return newArray;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:

  // const obj = {};
  // for (const char of string) {
  //   obj[char] = obj[char] ? obj[char] + 1 : 1;
  // }
  // return obj;

  // return string.split('').reduce((obj, char) => {
  //   obj[char] = obj[char] ? obj[char] + 1 : 1;
  //   return obj;
  // }, {});

  const obj = {};
  string.split("").forEach((char) => {
    obj[char] = obj[char] ? obj[char] + 1 : 1;
  });
  return obj;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  // 1
  // const sortedString = string.split('').sort((a, b) => a === a.toUpperCase() ? -1 : 1).join('');
  // return sortedString;
  // 2
  // let uppercaseChars = '';
  // let lowercaseChars = '';
  // for (const char of string) {
  //   if (char === char.toUpperCase()) {
  //     uppercaseChars += char;
  //   } else {
  //     lowercaseChars += char;
  //   }
  // }
  // return uppercaseChars + lowercaseChars;
  // 3
  // let uppercaseChars = "";
  // let lowercaseChars = "";
  // for (let i = 0; i < string.length; i++) {
  //   string[i] === string[i].toUpperCase()
  //     ? (uppercaseChars += string[i])
  //     : (lowercaseChars += string[i]);
  // }
  // return uppercaseChars + lowercaseChars;
  // const uppercaseChars = string
  //   .split("")
  //   .filter((char) => char === char.toUpperCase())
  //   .join("");
  // const lowercaseChars = string
  //   .split("")
  //   .filter((char) => char === char.toLowerCase())
  //   .join("");
  // return uppercaseChars + lowercaseChars;
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  // 1
  // return frase.split(' ').map(palabra => palabra.split('').reverse().join('')).join(' ');
  // 2
  // const palabras = frase.split(" ");
  // const resultado = palabras
  //   .map((palabra) => palabra.split("").reverse().join(""))
  //   .join(" ");
  // return resultado;
  const palabras = frase.split(" ");
  let stringReturn = "";

  for (let i = 0; i < palabras.length; i++) {
    let palabraInvertida = "";
    for (let j = palabras[i].length - 1; j >= 0; j--) {
      palabraInvertida += palabras[i][j];
    }
    stringReturn += palabraInvertida + " ";
  }
  return stringReturn.trim();
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  const numeroComoString = numero.toString(); // Convertir el número a cadena
  const numeroInvertido = numeroComoString.split("").reverse().join(""); // Invertir el número como cadena

  if (numeroComoString === numeroInvertido) return "Es capicua";
  return "No es capicua";
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  // 1
  // const arr = string.split("")
  // const str = arr.filter((char)=>{if(char !="a" && char !="b" && char!="c"){return char}})
  // return str.join("")
  // 2
  // return string.replace(/[abc]/g, '');
  // 3
  // let result = '';
  // for (const char of string) {
  //   if (char !== 'a' && char !== 'b' && char !== 'c') {
  //     result += char;
  //   }
  // }
  // return result;

  return string
    .split("")
    .filter((char) => char !== "a" && char !== "b" && char !== "c")
    .join("");
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  // 1
  // return arrayOfStrings.map(str => str).sort((a, b) => a.length - b.length);
  return arrayOfStrings.sort((a, b) => a.length - b.length);
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  // 1
  // const interseccion = array1.reduce((resultado, elemento) => {
  //   if (array2.includes(elemento) && !resultado.includes(elemento)) {
  //     resultado.push(elemento);
  //   }
  //   return resultado;
  // }, []);
  // return interseccion;
  return array1.filter((elemento) => array2.includes(elemento));
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
