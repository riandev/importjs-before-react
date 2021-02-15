//Array Destructure
const numbers = [54, 45];
// const x = numbers[0];
// const y = numbers[1];
//similer to this
// const [x, y] = [54, 45]
//similer to this
const [x, y] = numbers;
// console.log(x, y);

function box(num) {
    return [num, num + 10];
}
const boxy = box(5);
const [box1, box2] = box(9);
// console.log(boxy);
// console.log(box1, box2);

//Object destructure
const person2 = { name: 'Rashad', age: 35, id: 1 };
// console.log(person.name, person.age, person.id);
const person = { name: 'Rashad', age: 35, id: 1 };
const { name } = person;
//we can also declate variable name as object property name
console.log(name);
//This will help to excess writing of variable name

//Create Object from Variable

const one = 10;
const two = 20;
const money = { x: one, y: two }
console.log(money.x);

// Three dots

const aAge = [33, 45, 32, 20];
aAge.push(56);
//push korle ager array er moddhe 56 add hobe
const newAge = [...aAge, 56];
// and tree dots diye eta korle 56 soho ager array soho new ekta array create korbe
console.log(newAge);