function reverseArrayInPlace(someArray) {

    const newArray = [];
    for(let i = 0; i<someArray.length; i++) {
        newArray.unshift(someArray[i])
    }
    return newArray;
}


console.log(reverseArrayInPlace([1,2,3,4,5,6]))