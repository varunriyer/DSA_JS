let people = [{ id: 1, name: "Varun", age: 21, adr: "Home" }, { id: 2, name: "James", age: 55, adr: "School" }, { id: 3, name: "Liam", age: 22 }];

console.table(people);

console.table(people[0]);

console.table(Object.values(people));

console.table(people.filter(person => person.age > 25));

people = people.filter(person => person.id !== 3);

console.table(people);

console.table(people.filter(person => person.id === 3));

console.table(people.map(person => ({ name: person.name, adr: person.adr })));

