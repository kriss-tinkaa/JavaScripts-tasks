/** TASK 3.1
  * Описание задачи: Напишите функцию, которая делает поверхностную проверку объекта на пустоту.
  * Ожидаемый результат: ({}) => true,
      ({ a: undefined }) => true,
      ({ a: 1 }) => false
  * Пустые значения: '', null, NaN, undefined
  * Сложность задачи: 2 of 5
  * @param {Object} object - объект с примитивами
  * @returns {boolean}
*/

function isArrayEmpty(arr){
    if (typeof arr != "undefined") {
        return true
    } else {
        return false
    }
}

console.log(isArrayEmpty({}))
console.log(isArrayEmpty({ a: undefined }))
console.log(isArrayEmpty({ a: 1 }))