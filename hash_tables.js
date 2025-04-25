// Basic Map Implementation 
let myMap = new Map()

myMap.set("Nathan", "555-8181");
myMap.set("Jane", "315-0222");

for (let [key, value] of myMap) {
    console.log(`${key}: ${value}`);
}