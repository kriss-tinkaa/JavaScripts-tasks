'use strick'

let arr = ['a', 'b', 'c'];

/**  Task1 **/
// ДанІ два массива: ['a', 'b', 'c'] и [1, 2, 3]. Об’єднати їх разом.


let arr2 = [1, 2];

const children = arr.concat(arr2); 
//console.log(children)


/**  Task2 **/
// Дано массив ['a', 'b', 'c']. Добавте йому в кінець елеменети 1, 2, 3.


const arrEnd = arr.push( 1, 2, 3);
//console.log(arr)



/**  Task3 **/
//Дан массив [3, 4, 1, 2, 7]. Відсортуйте його.

let arrSort = [3, 4, 1, 2, 7];
arrSort.sort((number1, number2) => number1 - number2);
//console.log(arrSort)

/**  Task4 **/
//Reverse function

let reverse = (arr) => {
  let newArr = [];
  for(let i = 0; i < arr.lengh; i++){
    //console.log(arr[i])
    console.log(arr[i])
  }
  return newArr
}

console.log(reverse( [1,2,3,4]))


