//v.1

function twoSum(array, sum) {

    let sums = [];

    for(let i = 0; i<array.length; i++) {
        for( let j = 0; j<array.length; j++) {
            if(array[i]+array[j] === sum) {
                sums.push([array[i], array[j]])
            }
        }
    }
console.log(sums);

}

//v.2

function twoSum2(numArray, sum) {
  var pairs = [];
  var hashTable = [];

  for (var i = 0; i < numArray.length; i++) {
    var currNum = numArray[i];
    var counterpart = sum - currNum;
    if (hashTable.indexOf(counterpart) !== -1) {
      pairs.push([ currNum, counterpart ]);
    }
    hashTable.push(currNum);
  }
  
  console.log(pairs);
}

twoSum2([1, 6, 4, 5, 3, 3], 7);
twoSum([1, 6, 4, 5, 3, 3], 7);