// 1. How many searches?
// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 
// and using the recursive binary search algorithm, 
// identify the sequence of numbers that each recursive call will search to try and find 8.

function binarySearch(array, value, start, end) {
    start = start == null? 0: start;
    end = end == null ? array.length : end;
    
    if (start > end) {
        return -1;
    }
    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log(start, end);
    if (item == value) {
        return index;
    }
    else if (item < value) {
        return binarySearch(array, value, index + 1, end);
    }
    else if (item > value) {
        return binarySearch(array, value, start, index - 1);
    }
    return -1
};

binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 8)
binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 16)


// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 
// and using the recursive binary search algorithm, 
// identify the sequence of numbers that each recursive call will search to try and find 16.