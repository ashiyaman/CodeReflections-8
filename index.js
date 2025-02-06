//ES6 function that returns the total length of all the strings in an array.

const strings = ["apple", "banana", "cherry", "date", "blueberry"];

const totalLength = (strings) => strings.reduce((strLength, curr) => strLength + curr.length, 0)

console.log(totalLength(strings));
// Output: 30

//ES6 function sumSquares that takes an array of numbers and returns the sum of the squares of all the numbers in the array

const numbers = [1, 2, 3, 4, 5];

const sumSquares = (numbers) => numbers.reduce((num, curr) => num + (curr ** 2))

console.log(sumSquares(numbers));
 // Output: 55 

//ES6 function that calculates and returns the total value of all items in an array of objects.

const items = [
    { name: "Item 1", price: 10 },
    { name: "Item 2", price: 20 },
    { name: "Item 3", price: 30 }
  ];

const totalValue = (items) => items.reduce((totalPrice, curr) => totalPrice + curr.price, 0)
  
  console.log(totalValue(items)); 
  // Output: 60

//ES6 function that takes an array of strings as input and concatenates them into a single string.

const concatStrings = (strings) => strings.reduce((str, curr) => str + curr)

console.log(concatStrings(['this', 'is', 'fun'])); // Output: 'thisisfun'

// ES6 function to multiply and return all the elements of a given array.

const numbers2 = [1, 2, 3, 4, 5];

const product = (numbers) => numbers.reduce((result, curr) => result * curr)

console.log(product(numbers2));
// Output: 120

//ES6 function that takes an array of strings and returns the longest string.

const strings2 = ["neogcamp", "Haule Haule", "code", "Batman", "Awesome"];

const longestString = (strings) => strings.reduce((longWord, curr) => curr.length > longWord.length ? curr : longWord)

console.log(longestString(strings2)); 
// Output: 'Haule Haule'

//ES6 function that takes an array of objects with name and age property, and returns the name of the oldest person.

const people = [
    {name: 'Jeena', age: 25}, 
    {name: 'Priya', age: 30}, 
    {name: 'Naina', age: 45}
]

const oldestPersonName = (people) => people.reduce((person, curr) => curr.age > person.age ?curr : person ).name

console.log(oldestPersonName(people)); 
// Output: 'Naina'

//ES6 function that takes an array of objects representing people with properties name and age, and returns an object with the average age of all the people.

const people2= [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 40 }
];

const getAverageAge = (people) => {
    const totalAge = people.reduce((person, curr) => person + curr.age, 0)
    return {averageAge: totalAge/people.length}
}

console.log(getAverageAge(people2))
// Output: { averageAge: 32.5 }

//ES6 function that takes an array of objects representing products with properties name, price, and quantity, and returns an object with the most expensive product.

const products = [
    { name: "Bread", price: 10, quantity: 2 },
    { name: "Clips", price: 20, quantity: 5 },
    { name: "Knife", price: 30, quantity: 1 },
    { name: "Slipper", price: 40, quantity: 3 }
  ];

const findMostExpensiveProduct = (products) => products.reduce((product, curr) => curr.price > product.price ? curr : product)
  
  console.log(findMostExpensiveProduct(products)); 
  // { name: "Slipper", price: 40, quantity: 3 }

//ES6 function that takes an array of strings and returns an object with the count of each string.

const fruits = ['apple', 'banana', 'banana', 'cherry', 'apple', 'apple', 'banana'];

const countStrings = (fruits) => fruits.reduce((countObj, fruit) => {
  countObj[fruit] = (countObj[fruit] || 0) + 1
  return countObj
}, {})

console.log(countStrings(fruits));
// Output: { 'apple': 3, 'banana': 3, 'cherry': 1 }