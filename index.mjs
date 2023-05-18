// a,b,c,d
import { mySum } from "./sum.mjs";

let myArr = [1,2,3,4,5,10]
let result = mySum(...myArr)
console.log(result)

myArr = [1,2]
result = mySum(...myArr)
console.log(result)

myArr = []
result = mySum(...myArr)
console.log(result)

// e
myArr = [1,2,3,4,5,10]
const mySecondArr = myArr.map((element) => element * 2)
//f
const avg = mySecondArr.reduce((prev, curr) => prev + curr) / mySecondArr.length
console.log(mySecondArr.filter((elem) => elem > avg))

// g
setTimeout(() => {
    console.log("Goodbye")
}, 3000)

// h
const Employee = {
    name: "X",
    email: "x@gmail.com",
    department: "Engineering",
    startDate: new Date()
}

// i
const {name, email} = Employee
const Person = {
    name,
    email
}
console.log(Person)