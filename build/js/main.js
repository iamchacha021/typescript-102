"use strict";
let myName = 'chacha';
let meaningOfLife;
let isLoading;
let album; //can be any type
myName = 'ghost';
meaningOfLife = 34;
isLoading = true;
album = 'og';
const sum = (a, b) => {
    return a + b;
};
let isActive; //can be a boolean or a number
let regex; //will be a regex
// ---------------------------------------------------------------------------------------------------------------------------------------------
// arrays
let stringArr = ['one', 'two', 'yoh'];
let guitars = ['strat', 'les paul', 5150];
let mixedData = ['evh', 1984, true];
let test1 = [];
let bands = [];
// ---------------------------------------------------------------------------------------------------------------------------------------------
// tuples
// tuples help us define a fixed data type in any position in an array
// it also has a specific length
let myTuple = ['ch', 67, false];
;
let evh = {
    name: 'eddie',
    active: false,
    albums: [1984, 5670, 'ou812']
};
let jp = {
    name: 'jimmy',
    albums: ['I', 'II', 'IV']
};
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}`;
};
// console.log(greetGuitarist(evh))
// ---------------------------------------------------------------------------------------------------------------------------------------------
// enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
// ------------------------------------------------------------------------------------------------------------------------------------------
// functions
const add = (a, b) => {
    return a + b;
};
const logMssg = (message) => {
    console.log(message);
};
;
// interfaces is best however in classes and objects
let multiply = (c, d) => {
    return c * d;
};
// logMssg(multiply(7, 13));
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
// logMssg(addAll(24, 13));
// logMssg(addAll(24, 13, 23));
// logMssg(sumAll(24, 13));
// logMssg(sumAll(24, 13, 47));
// logMssg(sumAll(undefined, 13, 47)); // this will state that no value was passed for a
// however, you can't define function with interface or type if the function is going to take up a default value parameter
// rest parameters
// the rest parameter should come last, it should be represented as an array, however, when passing it as an argument, it shouldn't be passed an array; just separate it with commas
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev * curr);
};
// logMssg(total(20, 3, 4, 5));
// never type - this is for functions that throw errors, functions that have infinite loops
const createError = (errMssg) => {
    throw new Error(errMssg);
};
// ---------------------------------------------------------------------------------------------------------------------------------------------
// classes
class Coder {
    constructor(name, music, age, lang = 'typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `i am ${this.age} years old`;
    }
    ;
}
;
const coder1 = new Coder('cha', 'gengetone', 345);
// logMssg(coder1.getAge());
// inheriting classes 
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    ;
    getLang() {
        return `i am proficient in ${this.lang}`;
    }
    ;
}
;
const webDev1 = new WebDev('hp', 'ojojo', 'rock', 879);
;
class Gutarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    ;
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const guitarist1 = new Gutarist('jenny', 'guitar');
// logMssg(guitarist1.play('kicks'));
// class methods
// class methods are defined using the static keyword
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    ;
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
    ;
}
Peeps.count = 0;
;
const peeps1 = new Peeps('john');
const peeps2 = new Peeps('steve');
const peeps3 = new Peeps('ann');
const peeps4 = new Peeps('alice');
// logMssg(peeps1.id);
// logMssg(peeps2.id);
// logMssg(peeps3.id);
// logMssg(peeps4.id);
// logMssg(Peeps.count);
// getters and setters
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('param is ot an array of strings');
    }
}
const myBands = new Bands();
myBands.data = ['young', 'original og']; //setter has equal sign
// logMssg(myBands.data) //getter is getting the data
myBands.data = [...myBands.data, 'zz top'];
// logMssg(myBands.data)
myBands.data = ['yes yes', '890'];
const todaysTransaction = {
    pizza: -10,
    books: -5,
    job: 50
};
// using it without a loop
const prop = 'pizza';
// logMssg(todaysTransaction[prop]);
// using it in a loop
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    ;
    return total;
};
const yesterdaysTransaction = {
    pizza: -10,
    books: -5,
    job: 50
};
const props1 = 'books';
// logMssg(yesterdaysTransaction[props1])
yesterdaysTransaction.work = 56;
// logMssg(yesterdaysTransaction)
// ----------------------------------------------------------------------------------------------------------------------------------------------
// typescript generics
// generics helps create a placeholder especially if we don't know the data type we will be receiving
// generics can be used anywhere, in functions, interfaces, classes ...
const stringEcho = (arg) => arg; //this is string type fuction
const echo = (args) => args; //this is a more generic function. we don't know the data type to expect but we have set it work with any data type
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null); //we want to check if the type of the argument is an object and it is neither an array nor null coz they both have a type of object
};
;
const processUser = (user) => {
    return user;
};
// logMssg(processUser({id: 1, name: 'cha'}));
// using generics in classes
class StateObj {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObj('jane');
// logMssg(store.state)
// we can also specify the type we'll use in our state
const myState = new StateObj([12]); //we are saying that this instance can be an array of strings, numbers, and or boolean
myState.state = [67, 'fgh', true, 'whje'];
;
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: 'th9oij',
    title: 'final project',
    grade: 0
};
const assignGrade = updateAssignment(assign1, { grade: 95 });
logMssg(assignGrade);
//2. required and readonly
const recordAssignment = (assign) => {
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGrade), { verified: true }); //this properties cannot be changed
const assignVerified1 = Object.assign(Object.assign({}, assignGrade), { verified: true }); //this properties cannot be changed
logMssg(recordAssignment(Object.assign(Object.assign({}, assignGrade), { verified: true })));
//3. record
const hexColorMap = {
    red: 'ff0000',
    green: '00ff00',
    blue: '0000ff'
};
const finalGrade = {
    sara: 'A',
    kelly: 'D'
};
;
const gradeData = {
    sara: { assign1: 75, assign2: 67 },
    kelly: { assign1: 39, assign2: 35 }
};
const score = {
    studentId: 'ui92873',
    verified: false
};
const preview = {
    studentId: '908yt'
};
