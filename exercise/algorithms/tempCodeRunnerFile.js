for (let j = newIndex; j < newIndex + 3; j++) {
        if (newString[newIndex] === '?') {
          counter++
        }
        if (counter === 3 && newString[i - 1] + newString[newIndex + 1] < 10) {
          return true
        }
      }