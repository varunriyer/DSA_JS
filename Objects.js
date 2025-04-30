{
    let obj = new Object();
    obj.name = "Brooks";

    console.log(obj);
}

// You can store empty objects 

{
    let obj1 = new Object();
    console.log(obj1);

    let obj2 = new Object(undefined);
    console.log(obj2);

    let obj3 = new Object(null);
    console.log(obj3);
}

// Using Object.assign() - Copies the values of all enumerable own properties from one or more source objects to a target object.
{
    let target = { a: 3, b: 4 };
    let source = { b: 5, c: 7 };

    let returnedTarget = Object.assign(target, source);

    console.log(target); // { a: 3, b: 5, c: 7 }

    console.log(returnedTarget === target); // true

}

// Object.create() - Creates a new object using an existing objext as the prototype
{
    let person = {
        isHuman: false,
        printIntroduction: function () {
            console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
        }
    };
    let me = Object.create(person);
    me.name = "Malcom";
    me.isHuman = true;
    me.printIntroduction();

}


// Object.defineProperties() - to define new or modifies existing properties directly on an object, returning the object.
{
    let obj1 = {};

    Object.defineProperties(obj1, {
        property1: {
            value: 42,
            writable: true,
            enumerable: true,
        },
        property2: {
            value: 42,
            writable: false,
            enumerable: false,
        },
    });

    console.log(obj1.property1);

    obj1.property1 = 64; // if writeable is false then this does not get updated 
    console.log(obj1.property1);

    obj1.property2 = 64;
    console.log(obj1.property2);

    for (let [key, value] of Object.entries(obj1)) {
        console.log(key, value);        // if enumerable is false, this does not print anything 
    }
}

// Using get() with objects 
{
    let obj = {
        log: ["a", "b", "c"],
        get latest() {
            return this.log[this.log.length - 1];
        },
    };
    obj.latest = "new value" // here the latest function is not changed
    console.log(obj.latest);

    let obj2 = {
        log: ["a", "b", "c"],
        latest() {
            return this.log[this.log.length - 1];
        },
    };
    //  obj2.latest = "new value"; --> this can be modified as get is not used 
    console.log(obj2.latest());
}
{
    let testObj = {
        value: 5,
        get RandomMath() {
            return this.value * this.value;
        }
    }
    console.log(testObj.value);
}
{
    let obj = {
        number: 7,
        get square() {
            delete this.square;
            return this.number ** 2;
        },
    };

    console.log(obj.number);
    console.log(obj.square);
}
{
    let pattern = {
        get() {
            return "I will always display this";
        },
        set() {
            this.myName = "This is a name string";
        },
    }

    function TestDefineGetandSet() {
        Object.defineProperty(this, "myProperty", pattern);
    }

    let instance = new TestDefineGetandSet();
    instance.myProperty = "test";
    console.log(instance.myProperty);
    console.log(instance.myName);
}

// Object.entries() 
{
    let obj = {
        name: "Varun",
        age: 22,
        isMale: true,
    }


    for (let [key, value] of Object.entries(obj)) {
        console.log(`${key}: ${value}`);
    }


    //You can use Object.entries with primitives as well

    console.log(Object.entries("test")); //[ [ '0', 't' ], [ '1', 'e' ], [ '2', 's' ], [ '3', 't' ] ]
    console.log(Object.entries(100)); // []

    // You can easily convert an Object into a Map
    let myMap = new Map(Object.entries(obj));
    console.log(myMap); // Map(3) { 'name' => 'Varun', 'age' => 22, 'isMale' => true }
}

//Object.freeze() - freezes the object. A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be 
// removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned.
{
    let obj = {
        a: 3,
        b: "big",
        c: false,
    }

    Object.freeze(obj);

    obj.b = "small"; // not updated
    console.log(obj.b);
    console.log(obj.c = true); // this prints true only cos of the unique nature of assignment operator which prints whatever value is being assigned
    console.log(obj.c); // this remains unchanged

    delete (obj.a); // not deleted
    console.log(obj);

    console.log(Object.isFrozen(obj)); // true

    let arr = [1, 2, 3];
    Object.freeze(arr);
    // arr.push(4); --> throws an error
    arr[1] = 7; //silently fails. In strict mode, this will give an error
    console.log(arr);

    let obj2 = {
        name: "Simon",
        address: {
            state: "Karnataka",
            city: "Mysore",
        },
    };

    Object.freeze(obj2);

    obj2.name = "Tobi";
    console.log(obj2.name); // Simon 

    obj2.address.city = "Bangalore";
    console.log(obj2.address.city); // Bangalore. We can see that this does not do a deep freeze. To do deep freeze we have tp recursively freeze each object and object inside object

}

//fromEntries() - creates an object from key, value pair
{
    let myMap = new Map();
    myMap.set("foo", 2);
    myMap.set("bar", 3);
    console.log(myMap.get("foo"));
    let obj = Object.fromEntries(myMap);

    console.log(obj);

    //Creating object from an array 

    let arr = [
        [0, "a"],
        [1, "b"],
        [2, "c"],
    ];

    let obj_arr = Object.fromEntries(arr);
    console.log(obj_arr);

    //You can also you Object.fromEntries for Transformations

    let obj2 = {
        a: 1,
        b: 2,
        c: 3,
    };
    console.log(obj2);

    obj2 = Object.fromEntries(Object.entries(obj2).map(([key, value]) => [key, value * 2]));

    console.log(obj2);
}

//Object.getOwnPropertyDescriptor()
{
    let obj = {
        value: 42,
        name: "Joe",
    };

    Object.defineProperty(obj, "value", {
        enumerable: false,
    });

    let descriptor = Object.getOwnPropertyDescriptor(obj, "value");

    console.log(descriptor.writable); // true
    console.log(descriptor.value); // 42
    console.log(descriptor.enumerable); // false


    //Object.getOwnPropertyDescriptors()

    let obj_descriptor = Object.getOwnPropertyDescriptors(obj);
    console.log(obj_descriptor.value.writable); //true
    console.log(obj_descriptor.name.enumerable); //true
    console.log(obj_descriptor.value.enumerable); //false

}

// Object.getOwnPropertyNames()
{
    let obj = {
        a: 1,
        b: 2,
        c: 3,
    };

    console.log(Object.getOwnPropertyNames(obj)); // [ 'a', 'b', 'c' ]
}

//Object.groupBy()
{
    let inventory = [
        { name: "apple", quantity: 9 },
        { name: "banana", quantity: 15 },
        { name: "kiwi", quantity: 4 },
        { name: "watermelon", quantity: 1 },
    ];
    let result = Object.groupBy(inventory, ({ quantity }) => quantity > 5 ? "sufficient" : "restock");
    console.log(result.restock); // [ { name: 'kiwi', quantity: 4 }, { name: 'watermelon', quantity: 1 } ]
    console.log(result.sufficient); // [ { name: 'apple', quantity: 9 }, { name: 'banana', quantity: 15 } ]

}

//Practicing using Object.assign()
{
    let obj1 = {
        a: 1,
        b: 2,
    };
    let obj2 = {
        b: 3,
        c: 4,
    }

    obj1 = Object.assign(obj1, obj2);

    console.log(obj1); // {a:1,b:3,c:4}

    let rand_obj = {
        value: 34,
        name: "Jitesh",
        c: 82,
    };

    obj1 = Object.assign(obj1, obj2, rand_obj);
    console.log(obj1);

    //Revising how to use Object.property

    Object.defineProperties(rand_obj,
        {
            d: {
                value: 99,
                enumerable: true,
                writable: true,
                configurable: false
            },
            e: {
                value: 100,
                enumerable: true,
            }
        }
    )

    console.log(rand_obj.d);
    console.log(rand_obj.e);
    console.log(Object.getOwnPropertyDescriptors(rand_obj));
    console.log(rand_obj);
}
