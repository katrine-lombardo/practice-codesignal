// Given an array of integers, find the pair of adjacent elements that has the
// largest product and return that product.

// Example

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// solution(inputArray) = 21.

// 7 and 3 produce the largest product.

const inputArray = [3, 6, -2, -5, 7, 3]

function solution(inputArray) {
    const productArr = []
    for (let i = 0; i < inputArray.length -1; i++) {
        productArr.push(inputArray[i] * inputArray[i + 1]);
    }
    return Math.max(...productArr)
}

console.log(solution(inputArray))
