const onlyNumbers = (array) => {
  return array.filter((e) => {
    return typeof e === "number";
  });
};

const nArray = ["Hola", 1, "dos", 3, "4", "String", 5, 6, 7];

console.log(onlyNumbers(nArray));
