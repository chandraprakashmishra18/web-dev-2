let user = {
    name: "prashant",
    age: 24,
    address: "india",
    favcolor: ["blue", "black", "white"],
    demo:function(){
        return "demo function";
    }
    // here demo is key and function(){} is value and this is called method of object this particular fncn is called as an anonymous function
}
console.log(user.favcolor[1]);
console.log(Object.keys(user));
console.log(Object.values(user));

// concatenation methods
// old method
console.log("my age is " + user.age + " years");

// string literals
console.log(`my age is ${user.age} years`);
console.log(`my fav color is ${user.favcolor[2]}`);
console.log(`the address is ${user.address}`);
console.log(user.demo);
console.log(`the demo function says: ${user.demo()}`);

// Object Methods
console.log(Object.entries(user));
console.log(Object.hasOwn(user,"name")); // true
console.log(Object.hasOwn(user,"city")); // false 

const car = {
    brand: "Toyota",
    model: "Hilux"
};
Object.freeze(car);
// in freeze we can niether change nor add or delete any property
car.model = "Corolla"; // This will not change the model property
console.log(car.model); // Output: Hilux
car.color = "Red"; // This will not add a new property
console.log(car.color); // Output: undefined
console.log(car);
Object.seal(car);
// in seal we can change the existing property but cannot add or delete any property
car.model = "Corolla"; // This will change the model property
console.log(car.model);
car.year = 2020; // This will not add a new property
console.log(car.year); // Output: undefined
console.log(car);
