// Write a function that rotates a list by k elements.
// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

const testArray = [1, 2, 3, 4, 5, 6]

function rotate (someArray, rotateNum) {
  let firstPart = []
  let secondPart = []
  for (let i = 0; i < someArray.length; i++) {
    if (i < rotateNum) {
      secondPart.push(someArray[i])
    } else {
      firstPart.push(someArray[i])
    }
  }

  const rotatedArray = [...firstPart, ...secondPart]
  console.log(rotatedArray)
}

rotate(testArray, 4)
