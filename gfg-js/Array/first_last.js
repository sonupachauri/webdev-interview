let arr = [3, 2, 3, 4, 5];

// console.log(arr.slice(0,1) , arr.slice(-1))

// console.log(arr[0], arr[arr.length-1])

// console.log(arr.shift(), arr.pop())

// let[f,l] = arr.filter((item,i) => 
//               ((i == 0) || (i == arr.length-1)))

// console.log(f,l)

// console.log(arr.at(0), arr.at(arr.length-1))

const [f, ...rest] = arr
const l = rest.pop()
console.log(f,l)