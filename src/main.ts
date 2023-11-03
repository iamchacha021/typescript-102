let myName: string = 'chacha';
let meaningOfLife: number;
let isLoading: boolean;
let album: any; //can be any type

myName = 'ghost';
meaningOfLife = 34;
isLoading = true;
album = 'og';

const sum = (a: number, b: string) => {
    return a + b;
};

let isActive: boolean | number; //can be a boolean or a number

let regex: RegExp; //will be a regex

// ---------------------------------------------------------------------------------------------------------------------------------------------
// arrays
let stringArr = ['one', 'two', 'yoh'];

let guitars = ['strat', 'les paul', 5150];

let mixedData = ['evh', 1984, true];

let test1 = [];

let bands: string[] = []

// ---------------------------------------------------------------------------------------------------------------------------------------------
// tuples
// tuples help us define a fixed data type in any position in an array
// it also has a specific length
let myTuple: [string, number, boolean] = ['ch', 67, false]

// ----------------------------------------------------------------------------------------------------------------------------------------------
// objects
// we can annotate objects using 'type' or 'interface'
// when using a type, there must be an equal sign, when using interface there shouldn't be an equal sign

// type Guitarist = {
//     name: string,
//     active?: boolean, //if we want to make the active property optional
//     albums: (string | number)[]
// };

interface Guitarist {
    name: string,
    active?: boolean, //if we want to make the active property optional
    albums: (string | number)[]
};

let evh: Guitarist = {
    name: 'eddie',
    active: false,
    albums: [1984, 5670, 'ou812']
}

let jp: Guitarist = {
    name: 'jimmy',
    albums: ['I', 'II', 'IV']
}

const greetGuitarist = (guitarist: Guitarist) => {
    return `Hello ${guitarist.name}`
}

// console.log(greetGuitarist(evh))

// ---------------------------------------------------------------------------------------------------------------------------------------------
// enums

enum Grade {
    U = 1,
    D,
    C,
    B,
    A
}

// console.log(Grade.A)

// ------------------------------------------------------------------------------------------------------------------------------------------
// type aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist1 = {
    name: string,
    active: boolean,
    albums: stringOrNumberArray
};

type userId = stringOrNumber;

// ------------------------------------------------------------------------------------------------------------------------------------------
// functions
const add = (a: number, b: number): number => {
    return a + b;
};

const logMssg = (message: any): void => {
    console.log(message);
};


// logMssg('Hello');
// logMssg(add(2, 8));

// we can also annotate functions

type MathFunction = (a: number, b: number) => number;

// you can also use interfaces for function
interface MathFunction1 {
    (a: number, b: number): number
};

// interfaces is best however in classes and objects


let multiply: MathFunction = (c, d) => {
    return c * d
}

// logMssg(multiply(7, 13));


// optional parameters
const addAll = (a: number, b: number, c?: number): number => {  //the question mark states that c is optional. optional parameters should be the last parameter
    if(typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};

const sumAll = (a: number = 10, b: number, c: number = 2): number => {  //this states that the default value of c is 2. any parameter can be a default parameter
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
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev * curr);
};

// logMssg(total(20, 3, 4, 5));

// never type - this is for functions that throw errors, functions that have infinite loops
const createError = (errMssg: string) => {
    throw new Error(errMssg);
}

// ---------------------------------------------------------------------------------------------------------------------------------------------
// classes
class Coder {

    secondlang!: string

    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string = 'typescript'
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }

    public getAge() {
        return `i am ${this.age} years old`;
    };
};


const coder1 = new Coder('cha', 'gengetone', 345);

// logMssg(coder1.getAge());

// inheriting classes 
class WebDev extends Coder {
    constructor (
        public computer: string,
        name: string,
        music: string,
        age: number,
    ) {
        super(name, music, age)
        this.computer = computer
    };

    public getLang() {
        return `i am proficient in ${this.lang}`;
    };
};

const webDev1 = new WebDev('hp', 'ojojo', 'rock', 879);

// logMssg(webDev1.getLang());


// applying interfaces to classes
interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
};


class Gutarist implements Musician {
    name: string
    instrument: string

    constructor(name: string, instrument: string){
        this.name = name;
        this.instrument = instrument;
    };

    play(action: string): string {
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const guitarist1 = new Gutarist('jenny', 'guitar');

// logMssg(guitarist1.play('kicks'));


// class methods
// class methods are defined using the static keyword
class Peeps {
    static count: number = 0;

    static getCount(): number {
        return Peeps.count;
    };

    public id: number;

    constructor(public name: string) {
        this.name = name;
        this.id = ++Peeps.count;
    };
};

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
    private dataState: string[]

    constructor() {
        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState
    }

    public set data(value: string[]) {
        if(Array.isArray(value) && value.every( el => typeof el === 'string')) {
            this.dataState = value
            return
        } else throw new Error('param is ot an array of strings')
    }
}

const myBands = new Bands()
myBands.data = ['young', 'original og'] //setter has equal sign
// logMssg(myBands.data) //getter is getting the data

myBands.data = [...myBands.data, 'zz top']
// logMssg(myBands.data)

myBands.data = ['yes yes', '890']

// ---------------------------------------------------------------------------------------------------------------------------------------------------
// index signatures
// they are used when we don't know for certain what the keys of an object/ interface are or will be
// they are also used when we want to access the keys of an object dynamically. This more often occurrs while using a loop
interface TransactionObj {
    readonly [key: string]: number       //this states that we don't know what the names of the keys will be, but we are sure all of them will strings and all the values will be numbers. Readonly states that the values of the keys cannot be chanaged
}

const todaysTransaction: TransactionObj = {
    pizza: -10,
    books: -5,
    job: 50
};


// using it without a loop
const prop: string = 'pizza';

// logMssg(todaysTransaction[prop]);

// using it in a loop
const todaysNet = (transactions: TransactionObj): number => {
    let total = 0;

    for(const transaction in transactions) {
        total += transactions[transaction];
    };

    return total;
};

// logMssg(todaysNet(todaysTransaction));

// what if we knew the type of keys that would be available, and also add the possibilities of adding extra keys.
interface TransactionObj1 {
    [key: string]: number
    pizza: number,             //this means that the objects must first have the three properties, and additional keys could be added
    books: number,
    job: number
}

const yesterdaysTransaction: TransactionObj1 = {
    pizza: -10,
    books: -5,
    job: 50
}

const props1 = 'books'
// logMssg(yesterdaysTransaction[props1])

yesterdaysTransaction.work = 56

// logMssg(yesterdaysTransaction)

// ----------------------------------------------------------------------------------------------------------------------------------------------
// typescript generics
// generics helps create a placeholder especially if we don't know the data type we will be receiving
// generics can be used anywhere, in functions, interfaces, classes ...
const stringEcho = (arg: string): string => arg      //this is string type fuction

const echo = <T>(args: T): T => args       //this is a more generic function. we don't know the data type to expect but we have set it work with any data type

const isObj = <T>(arg: T): boolean => {
    return(typeof arg === 'object' && !Array.isArray(arg) && arg !== null)  //we want to check if the type of the argument is an object and it is neither an array nor null coz they both have a type of object
}

// logMssg(isObj(true));
// logMssg(isObj('yoh'));
// logMssg(isObj([1, 2, 3]));
// logMssg(isObj({ name: 'yoshi'}));
// logMssg(isObj(null));

// we can also extend generics
interface HasId {
    id: number
};

const processUser = <T extends HasId>(user: T): T => {
    return user;
};

// logMssg(processUser({id: 1, name: 'cha'}));

// using generics in classes
class StateObj<T> {
    private data: T

    constructor(value: T){
        this.data = value
    }

    get state() {
        return this.data
    }

    set state(value: T) {
       this.data = value
    }
}

const store = new StateObj('jane');
// logMssg(store.state)

// we can also specify the type we'll use in our state
const myState = new StateObj<(string | number | boolean)[]> ([12]);  //we are saying that this instance can be an array of strings, numbers, and or boolean
myState.state = [67, 'fgh', true, 'whje'];

// logMssg(myState.state)


// ---------------------------------------------------------------------------------------------------------------------------------------------
// utility types

// 1. partial
interface Assignment {
    studentId: string
    title: string
    grade: number
    verified?: boolean
};

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {   //partail means that not all the props are required. we can cherry pick the ones we want
    return {...assign, ...propsToUpdate};
};

const assign1: Assignment = {
    studentId: 'th9oij',
    title: 'final project',
    grade: 0
};

const assignGrade: Assignment = updateAssignment(assign1, {grade: 95});
logMssg(assignGrade);


//2. required and readonly
const recordAssignment = (assign: Required<Assignment>): Assignment => {  //required means that all the properties of assignment are required, including the optional ones like verified
    return assign;
};

const assignVerified: Readonly<Assignment> = {...assignGrade, verified: true}  //this properties cannot be changed
const assignVerified1: Assignment = {...assignGrade, verified: true}  //this properties cannot be changed

logMssg(recordAssignment({...assignGrade, verified: true}))

//3. record
const hexColorMap: Record<string, string> = {  //this means that the key and values will both be strings
    red: 'ff0000',
    green: '00ff00',
    blue: '0000ff'
}

type Students = 'sara' | 'kelly'
type LetterGrade = 'A' | 'B' | 'C' | 'D' | 'U'

const finalGrade: Record<Students, LetterGrade> = {  //this means that the keys will only take the student type and the values will only take the grade type
    sara: 'A',
    kelly: 'D'
};

// we can also use them in objects defined by interfaces
interface GradesInterface {
    assign1: number
    assign2: number
};

const gradeData: Record<Students, GradesInterface> = {
    sara: { assign1: 75, assign2: 67},
    kelly: { assign1: 39, assign2: 35}
};


//4. pick and omit
type AssignResult = Pick<Assignment, 'studentId' | 'verified'>;  // we have cherry picked the properties we want
const score: AssignResult = {
    studentId: 'ui92873',
    verified: false
};

type AssignPreview = Omit<Assignment, 'grade' | 'title'>;
const preview: AssignPreview = {
    studentId: '908yt'
};

//5. exclude and extract
type PassedGrades = Exclude<LetterGrade, 'U'>;

type HighGrades = Extract<LetterGrade, 'A' | 'B'>;

// nonnullable
type AllPossibleGrades = 'chacha' | 'emmah' | null | undefined

type NamesOnly = NonNullable<AllPossibleGrades>
