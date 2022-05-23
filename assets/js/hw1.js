'use strick'

let arr = ['a', 'b', 'c'];

/**  Task 1 **/
// ДанІ два массива: ['a', 'b', 'c'] и [1, 2, 3]. Об’єднати їх разом.


let arr2 = [1, 2];

const children = arr.concat(arr2); 
//console.log(children)


/**  Task 2 **/
// Дано массив ['a', 'b', 'c']. Добавте йому в кінець елеменети 1, 2, 3.


const arrEnd = arr.push( 1, 2, 3);
//console.log(arr)



/**  Task 3 **/
//Дан массив [3, 4, 1, 2, 7]. Відсортуйте його.

let arrSort = [3, 4, 1, 2, 7];
arrSort.sort((number1, number2) => number1 - number2);
//console.log(arrSort)

/**  Task 4 **/
//Reverse function

function reverse(arr){
  let newArr = [];
  for( let i = 0; i < arr.length; i++){
      newArr.unshift(arr[i]);
  }
  return newArr;
} 
console.log(reverse( [1,2,3,4]))


/**  Task 5 **/
//Чему равен typeof null в режиме use strict?
console.log(typeof null)
// object

