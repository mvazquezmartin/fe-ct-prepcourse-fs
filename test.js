function tradicionalFunction() {
  console.log("Function:",this);
}

const obj1 = { key: 'value' };

obj1.tradicionalMethod = tradicionalFunction;
obj1.tradicionalMethod(); // 'this' se refiere a 'obj'

tradicionalFunction(); // 'this' se refiere al objeto global (por ejemplo, 'window' en el navegador)

const arrowFunction = () => {
  console.log("Arrow:",this);
}

const obj = { key: 'value' };

obj.arrowMethod = arrowFunction;
obj.arrowMethod(); // 'this' se refiere al valor de 'this' en el ámbito circundante, que puede ser 'undefined'

arrowFunction(); 