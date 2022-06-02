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

function isArrayEmpty(obj){
    var newArr = Object.keys(obj);
    if (!Object.keys(newArr).length) {
        return true;
    } 
    return !newArr.map((key) => newArr[key] || newArr[key] === 0 || newArr[key] === false).length
}

//console.log(isArrayEmpty({}))
//console.log(isArrayEmpty({ a: undefined }))
//console.log(isArrayEmpty({ a: 1 }))


/** TASK 3.2
  * Описание задачи: Напишите функцию, которая делает глубокое сравнение объектов.
  * Ожидаемый результат: True если объекты идентичны ({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) => true
  * @param {Object} firstObj - Объект с любыми значениями
  * @param {Object} secondObj - Объект с любыми значениями
  * @returns {boolean}
*/
    const isEqual= (firstObj, secondObj) => {
        const firstObjName = Object.getOwnPropertyNames(firstObj);
        const secondObjName = Object.getOwnPropertyNames(secondObj);
        //console.log(firstObj, secondObj)

        if(firstObjName.length !== secondObjName.length){
            return false;
        }
        for (let i = 0; i < firstObjName.length; i += 1) {
            const prop = firstObjName[i];
            const bothAreObjects = typeof(firstObjName[prop]) === 'object' && typeof(secondObjName[prop]) === 'object';

            if ((!bothAreObjects && (firstObjName[prop] !== secondObjName[prop])) 
            || (bothAreObjects && !isEqual(firstObjName[prop], secondObjName[prop]))) {
              return false;
            }
          }
          return true;
        
   };

   const data = { a: 1, b: { c: 1 } };
   const data2 = { a: 1, b: { c: 1 } };
   const data3 = { a: 1, b: { c: 2 } };
   console.log(isEqual(data, data2)); // true
   console.log(isEqual(data, data3)); // false
  