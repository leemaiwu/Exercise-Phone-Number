function createPhoneNumber (array) {
    let firstSet = []
    let secondSet = []
    let thirdSet = []
    for (let i = 0; i < array.length; i++) {
        firstSet.push(array[0], array[1], array[2])
        secondSet.push(array[3], array[4], array[5])
        thirdSet.push(array[6], array[7], array[8], array[9])
        return console.log((`(${(firstSet.join(''))}) ${(secondSet.join(''))}-${(thirdSet.join(''))}`))
    }
}
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])


// Jared's way //

function phone1(arr) {
    return '(' + arr[0] + arr[1] + arr[2] + ') ' + arr[3] + arr[4] + arr[5] + '-' + arr[6] + arr[7] + arr[8] + arr[9]
}
console.log(phone1([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
