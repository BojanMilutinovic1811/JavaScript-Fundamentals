randomArray = [2,3,5,,5,5,5,7,6,9,3,6,7,7,23]

function getMedian(array) {
    const arrayCopy = array.map(item => item);
    arrayCopy.sort((a,b) => a-b)
  
    let median;

    if (array.length%2 === 0) {
        medianPosition = array.length / 2;
        median = (arrayCopy[medianPosition] + arrayCopy[medianPosition-1]) /2
    } else {
        median = array[Math.floor(array.length/2)]
    }

return median

}


function getMean(array) {
    let totalSum = 0;
    array.forEach(number => totalSum += number)
    const mean = totalSum/array.length;
    return mean
}


function getMode(array) {
    const arrayCopy = array.map(item => item);
    arrayCopy.sort((a,b) => a-b)
  
    const checkMode = {}

    for(let i = 0; i < arrayCopy.length; i++) {
        if(!checkMode[arrayCopy[i]]) {
            checkMode[arrayCopy[i]] = 1
        } else {
            checkMode[arrayCopy[i]]++
        }
    }

    let comparator = 0;
    let mode;  

    for(let number in checkMode) {
        if (checkMode[number] > comparator) {
            comparator = checkMode[number]
            mode = number
        }
    }
     
    return mode; 

}



function meanMedianMode(array) {
        const median = getMedian(array)
        const mean = getMean(array)
        const mode = getMode(array)
        return {
          median,
          mean,
          mode
        }
    
}

console.log(meanMedianMode(randomArray))


// function somefunction(val1) {

//     return function anyvalue(val2) {
//        return  val1 + val2
//     }

// }

// console.log(somefunction(10)(5))

// // function givesomevalue(somefunction) {

// // }
  