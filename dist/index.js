"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const one = 'Hello, World';
const two = 1;
const three = true;
let four = 'Shin';
four = 1;
let age;
age = 12;
const arr = [1, 2, 3, 4];
const anyArr = ['shin', 1, true, null, undefined];
const person = ['Shin Thant Min', 19, true];
const tpArray = [
    ['shinn thant', 1],
    ['shinn thant', 1],
    ['sh inn thant', 1],
];
let pid;
pid = 22;
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["down"] = 1] = "down";
    Direction[Direction["left"] = 2] = "left";
    Direction[Direction["right"] = 3] = "right";
})(Direction || (Direction = {}));
var Direction2;
(function (Direction2) {
    Direction2["up"] = "up";
    Direction2["down"] = "down";
    Direction2["left"] = "left";
    Direction2["right"] = "right";
})(Direction2 || (Direction2 = {}));
const user = {
    name: 'Shinn Thant Minn',
    age: 19,
};
const user1 = {
    name: 'Shinn Thant',
    age: 19,
};
let cid = 1;
let customerId = cid;
let userId = cid;
function AddNum(x, y) {
    x + y;
    return 1;
}
function print(message) {
    console.log(message);
}
print('Hello ,World');
const person1 = {
    name: 'Shinn Thant Minn',
    age: 19,
};
person1.age = 2;
const pokemonn = 'Pikachu';
const add = function (x, y) {
    return x + y;
};
const sub = (x, y) => {
    return x + y;
};
class personTemp {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    register() {
        return `${this.name} is complete register`;
    }
}
const shin = new personTemp(1, 'Shinn Thant Minn', 19);
console.log(shin.register());
class student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sing() {
        return `${this.name} is sign in our school`;
    }
}
const Terry = new student('terry', 19);
class teacher extends student {
    constructor(name, age, role) {
        super(name, age);
        this.role = role;
        name = 'hla';
    }
}
const aye = new teacher('Daw Aye Aye', 40, 'english');
console.log(aye.sing());
function arrTemp(items) {
    return new Array().concat(items);
}
const Number = arrTemp([1, 2, 3]);
Number.push(1);
