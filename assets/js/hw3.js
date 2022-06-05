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
    const newArr = Object.values(obj);
    if (!newArr.length) {
        return true;
    } 
    return newArr.every((value) => value === '' ||  value === null || isNaN(value) || value === undefined)
}

// console.log(isArrayEmpty({ }))
// console.log(isArrayEmpty({ a: undefined }))
// console.log(isArrayEmpty({ a: '' }))
// console.log(isArrayEmpty({ a: NaN }))
// console.log(isArrayEmpty({ a: 1 }))
// console.log(isArrayEmpty({ a: 1, b: undefined}))


/** TASK 3.2
  * Описание задачи: Напишите функцию, которая делает глубокое сравнение объектов.
  * Ожидаемый результат: True если объекты идентичны ({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) => true
  * @param {Object} firstObj - Объект с любыми значениями
  * @param {Object} secondObj - Объект с любыми значениями
  * @returns {boolean}
*/
    const isEqual= (firstObj, secondObj) => {
        const firstObjName = Object.keys(firstObj);
        const secondObjName = Object.keys(secondObj);
        const isObject = v => v && typeof v === 'object';

        if(firstObjName.length !== secondObjName.length){
            return false;
        }
        for (const key in firstObj){
            
            if(isObject(firstObj[key]) && isObject(secondObj[key])){
                if(!isEqual(firstObj[key], secondObj[key])){
                    return false;
                }
                
            } else if(firstObj[key] !== secondObj[key]){
                return false;
            }      
        }

        return true;
        
   };

   const data = { a: 1, b: { c: 1 } };
   const data2 = { a: 1, b: { c: 1  }};
   const data3 = { a: 1, b: { c: 2 } };
   const data4 = { a: 1, b: { c: { d: 1 } }, e: 1 };
   const data5 = { a: 1, b: { c: { d: 1 } }, e: 2 };
   //console.log(isEqual(data4, data5)); 
   //console.log(isEqual(data, data3));

   /**
  * Описание задачи: Напишите функцию, которая поверхностно находит пересечения объектов и возвращает объект пересечений.
  * Ожидаемый результат: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }
  * @param {Object<string | number>} firstObj - объект с примитивными значениями
  * @param {Object<string | number>} secondObj - объект с примитивными значениями
  * @returns {Object}
*/

    const intersection = (firstObject, secondObject) => {
        const firstObjKeys = Object.keys(firstObject);
        const acc = {}

        firstObjKeys.forEach(function(key) {
            if (firstObject[key] === secondObject[key]){
                return acc[key] = firstObject[key];
            }
          });

          return acc;
        
    };
    
  const data6 = { a: 1, b: 2 };
  const data7 = { c: 1, b: 2 };
  //console.log(intersection(data6, data7)); // { b: 2 }
  
  