//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

console.log(person3.shakes[0])

function favFoods(obj){
    for (let [k,v] of Object.entries(obj)){
        console.log(k,v)
    }
}

favFoods(person3)

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }

    // Use an arrow to create the printInfo method
    printInfo = () => `This person, ${this.name}, is ${this.age} years old.`

    // Create another arrow function for the addAge method that takes a single parameter
    incrementAgeByOne = () => this.age += 1
    
    incrementAgeByThree = () => this.age += 3
}



// Adding to the age 
let david = new Person('David', 39)
console.log(david.printInfo())
david.incrementAgeByOne()
console.log(david.age)

let john = new Person('John', 20)
console.log(john.printInfo())
john.incrementAgeByThree()
console.log(john.age)






// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

let strLongerThan10 = (str) => {
    return new Promise((resolve, reject)=>{
        if(str.length > 10){
            console.log('Big word')
            resolve(true)
        } else {
            console.log('Small number')
            reject(false)
        }
    })
}

console.log(strLongerThan10('abcdefghijkl'))