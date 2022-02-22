
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let newArr = [];

  if (typeof matrix == "undefined" || matrix.length < 1) {
    return [];
  }
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            newArr = newArr.concat(matrix[i]);
        } else {
            newArr = newArr.concat(matrix[i].reverse());
        }
    }
    return newArr;
};
