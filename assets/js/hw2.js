
/**  Task 1 
* 
* Implement function countOccurrences:
*
* Implement function which takes two params (`str`, `substr`) and returns the
* number of times the `substr` appears in `str`.
*
* e.g. for str = 'azyxxzyzy', substr = 'zy' it should return 3, because 'zy'
* appears 3 times: 'a[zy]xx[zy][zy]'.
* 
* countOccurrences(azyxxzyzy, zy) === 3
* countOccurrences(ababagalamaga, ba) === 2
* 
**/



function countOccurrences(str, substr) {
    if(typeof str !== "string"|| typeof substr !== "string"){
        return 'string and substring are not string'
    }
    return str.split(substr).length;
   }


//console.log(countOccurrences('azyxxzyzy', 'zy'));
//console.log(countOccurrences('ababagalamaga', 'ba'));
   
   


/** STORAGE
* Implement function storage:
*
* function works with next pattern:
* const propsStorage = storage();
* propsStorage.setValue('name', 'Peter');
* propsStorage.setValue('age', 30);
* propsStorage.getValue('name'); // Peter
* propsStorage.getValue('age'); // 30
* propsStorage.setValue('age', 31);
* propsStorage.getValue('age'); // 31
* propsStorage.getValue('occupation'); //undefined
*
*/


function storage() {
    return {
        setValue: function(name, value){
            window.localStorage.setItem(name, JSON.stringify(value))
        },
        getValue: function(name){
            window.localStorage.getItem(name);
        }
    }
   
}
const propsStorage = storage();
propsStorage.setValue('name', 'Peter');

