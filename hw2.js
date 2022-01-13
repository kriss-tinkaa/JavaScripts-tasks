/**  Task1 **/

let arr = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
//console.log(arr.join(' | '))

/**  Task2 **/

let str = 'Вася;Петя;Вова;Олег';
const newArr = str.split(';');
//console.log(newArr)


/**  Task3 **/

function hello2(name = 'гость') {
  //console.log(`Привет, ${name}!`);
}

hello2('ddd');

/**  HW4: **/

let newArr2 = ['яблоко', 'ананас', 'груша'];
const fruitsInUpperCase = newArr.map(function (item, i, newArr2) {
  return item.toUpperCase();
});

//console.log(fruitsInUpperCase)

/**  Task4 **/

function addOneForAll(...numbers) {
  let newArr = [];
  for (let i = 0; i < arguments.length; i++) {
    newArr.push(arguments[i] + 1);
  }
  return newArr
}

const val2 = addOneForAll(1, 2, 3, 4);
console.log(val2);


/**  Task6 **/

 function getSum(...numbers){
   let sum = 0;
   for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
 }

const val = getSum(1, 2, 3, 4);
console.log(val); // 10

/**  Task7 **/

 const arrFilt = [1, 'hello', 2, 3, 4, '5', '6', 7, null];

 function isNumber(arr){
   
 }