let input = [1, 2, 3, 4, 5]

let even = input.filter((x) => x % 2 ==0)

let square = even.map((y) => y*y)

let ans =  square.reduce((x, y) => (x+y), 0)

console.log(ans)