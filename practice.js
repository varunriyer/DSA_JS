function myFirst() {
    console.log("Hello");
}

function mySecond() {
    console.log("Goodbye");
}

myFirst();
mySecond();


function logWrapper(originalFunc) {
    return function (...args) {
        console.log("Calling with args:", args);
        return originalFunc.apply(this, args); // Forwarding call
    };
}

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}
const wrappedAdd = logWrapper(add);

console.log(wrappedAdd(2, 3));  // Logs and returns 5
const wrappedSub = logWrapper(sub);
console.log(wrappedSub(2, 3));

