// Variable =let const
let money = 20;
const name = 'Rian';

if (money <= 20) {
    console.log('poor person');
} else {
    console.log('rich person');
};

//Array
//numbers array
const numbers = [58, 60, 30, 58, 59];
//string array
// const name = ['maruf', 'rony', 'jibon', 'tarek'];
//object array
const friendDetails = [{ name: 'Ibrahim Adham', age: 31, salary: 40000 }, { name: 'Jahangir Hossain', age: 33, salary: 75000 }, { name: 'Abdullah Al Noman', age: 27, salary: 20000 }];

for (let i = 0; i < friendDetails.length; i++) {
    const element = friendDetails[i];
    const friendsName = element.name;
    console.log(friendsName);
    console.log(element);
};
//regular function
function add(num1, num2) {
    return num1 + num2;
}
const sum = add(12, 20);
console.log(sum);
//arrow function
const add2 = (num1, num2) => num1 + num2;