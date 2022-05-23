
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


console.log(countOccurrences(azyxxzyzy, 'zy'));
console.log(countOccurrences('ababagalamaga', 'ba'));
   
   