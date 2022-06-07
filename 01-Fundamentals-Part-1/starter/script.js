/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

let country = "USA";
let continent = "North America";
let population = 330;
let isIsland = false;
let language;

console.log(country);
console.log(continent);
console.log(population);
console.log(isIsland);
console.log(language);

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(23);
// console.log(typeof `Jonas`);

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Schmedtmann';
console.log(lastName);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

// math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 1 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'SchmedtMann';
console.log(firstName + ' ' + lastName);

// assignment operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

// comparison operators
console.log(ageJonas > ageSarah); // >, <, >= <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old" + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`just a regular string`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`);


const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' / '2');


// guess the output..
let n = '1' + 1;
n = n - 1;
console.log(n);


// 5 falsy values: 0, '', undefined, null NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log(`Don't spend it all ;)`);
} else {
    console.log(`You should get a job!`);
}

let height = 0;
if (height) {
    console.log(`Yay! Height is defined!`);
} else {
    console.log(`Height is UNDEFINED`);
}


const age = 18;
if (age === 18) console.log(`You just became an adult :D strict`);

if (age == 18) console.log(`You just became an adult :D loose`);

const favorite = Number(prompt(`What's your favorite number?`));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
    console.log(`Cool! 23 is an amazing number!`);
} else if (favorite === 7) {
    console.log(`7 is also a cool number.`);
} else if (favorite === 9) {
    console.log(`9 is also a cool number.`);
} else {
    console.log(`number is not 23 or 7 or 9`);
}

if (favorite !== 23) console.log(`Why not 23?`);


const hasDriversLicense = true; //A
const hasGoodVision = false; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('someone else should drive...');
// }

const isTired = true; //C
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('someone else should drive...');
}


const day = 'monday';

switch (day) {
    case 'monday':
        console.log(`plan course structure`);
        console.log(`go to coding meetup`);
        break;
    case 'tuesday':
        console.log(`prepare theory videos`);
        break;
    case 'wednesday':
    case 'thursday':
        console.log(`write code examples`);
        break;
    case 'friday':
        console.log(`record videos`);
        break;
    case 'saturday':
    case 'sunday':
        console.log(`enjoy the weekend :D`);
        break;
    default:
        console.log('Not a valid day!');
}

if (day === 'monday') {
    console.log(`plan course structure`);
    console.log(`go to coding meetup`);
} else if (day === 'tuesday') {
    console.log(`prepare theory videos`);
} else if (day === 'wednesday' || day === 'thursday') {
    console.log(`write code examples`);
} else if (day === 'friday') {
    console.log(`record videos`);
} else if (day === 'saturday' || day === 'sunday') {
    console.log(`enjoy the weekend :D`);
} else {
    console.log('Not a valid day!');
}

// expressions - produce values
3 + 4
1991
true && false && !false

// statements - like full sentences that translate our actions
if (23 > 10) {
    const str = '23 is bigger';
}
*/

// ternary operator
const age = 23;
age >= 18 ? console.log(`I like to drink wine`) :
    console.log(`I like to drink water`);

const drink = age >= 18 ? `wine` : `water`;
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = `wine`;
} else {
    drink2 = `water`;
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);