Array.prototype.Change = function () {
  const arrReturn = [];
  for (let i = 0; i < this.length; i++) {
    if (this[i] > 3) {
      arrReturn.push(false);
    } else {
      arrReturn.push(true)
    }
  }
  return arrReturn
};

const elements = [1,3,4,33,55,2,-1]

console.log(elements.Change())