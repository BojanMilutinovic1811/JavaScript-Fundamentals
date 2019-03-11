// Write a function that combines two arrays by alternatingly taking elements.

const arrayOne = [1, 2, 3, 4]
const arrayTwo = [5, 6, 7, 8]

function combineArrays (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return 'provide arrays with the same length'
  }

  let combinedArray = []

  for (let i = 0; i < arr1.length; i++) {
    combinedArray.push(arr1[i], arr2[i])
  }

  console.log(combinedArray)
}

combineArrays(arrayOne, arrayTwo)
