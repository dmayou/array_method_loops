'use strict';

// I've made a number of examples of using loops to mimic the operation of
// JS array methods. I didn't map out the full behavior of these methods,
// only mimicing behavior that we've likely used in the prework assignments.
// I also haven't ensured that the return values exactly match what is in the
// MDN documentation.

// I have not exhaustively tested these, perhaps only trying them once or twice.

// I have no idea how the actual methods are implemented.

// There's probably a way to make these methods rather than functions, and
// maybe one of us will rewrite them that way in the future.

// Similar to Array.include(), these functions return true if the specified
// element is in the array.

function includeWithLoop(arr, ele) {
  for (let i=0; i<arr.length; i++) {
    if (arr[i] === ele) {
      return true;
    }
  }
  // gotten through whole array and didn't find ele, so return false
  return false;
}

function includeWithLoopAndFlag(arr, ele) {
  // uses foundEle to remember if we found the element
  let foundEle = false;
  for (let i=0; i<arr.length; i++) {
    if (arr[i] === ele) {
      foundEle = true;
    }
  }
  return foundEle;
}

// Similar to Array.indexOf(), returns index of specified element in the array,
// or returns -1 if the element does not exist
function indexOfWithLoops(arr, ele) {
  let index = -1;
  for (let i=0; i<arr.length; i++) {
    if (arr[i] === ele) {
      index = i;
    }
  }
  return index;
}

// The following functions will modify the array. To keep things simple, I'm
// going to require that the array be named arr.

// Array.splice() (limited implementation--removes numRemove elements beginning
//                 at startIndex)
function removeOneElement(startIndex) {
  let newArr = [];
  let removedElement = null;
  if (startIndex < 0 || startIndex >= arr.length) {
    return []; // return empty array because startIndex invalid
  }
  for (let i=0,j=0; i<arr.length; i++) {
    if (i !== startIndex) {
      newArr[j] = arr[i];
      j++;
    } else {
      removedElement = arr[i];
    }
  }
  arr = newArr;
  return removedElement;
}

// Array.splice() (limited implementation--removes numRemove elements beginning
//                 at startIndex)
function removeNElements(startIndex, numRemove) {
  let newArr = [];
  let removedElements = [];
  if (startIndex < 0 || startIndex >= arr.length || numRemove < 1) {
    return []; // return empty array because of invalid parameter
  }
  for (let i=0,j=0; i<arr.length; i++) {
    if (i !== startIndex) {
      newArr[j] = arr[i];
      j++;
    } else {
      for (; i-j < numRemove; i++) {
        removedElements[i-j] = arr[i];
      }
      i--; // above loop increments one more time than needed, so decrement at end
    }
  }
  arr = newArr;
  return removedElements;
}

// Array.push()
function pushWithLoops(ele) {
  let newArr = [];
  for (let i=0; i<arr.length; i++) {
    newArr[i] = arr[i];
  }
  newArr[arr.length] = ele;
  arr = newArr;
  return arr.length;
}

// Array.pop()
function popWithLoops() {
  let newArr = [];
  for (let i=0; i<arr.length-1; i++) {
    newArr[i] = arr[i];
  }
  let poppedEle = arr[arr.length-1];
  arr = newArr;
  return poppedEle;
}

// Array.shift()
function shiftWithLoops(ele) {

}

// Array.unshift()
function unshiftWithLoops() {

}
