/*Данная функция выбирает все символы, которые не являются
числами, массив с оставшимися значениями преобразуется к строке*/
const mapArrToString = (arr) =>{
  return arr
    .filter(item=>Number.isInteger(item))
    .map(String)
}

module.exports = mapArrToString;