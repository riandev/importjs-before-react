//numbers array
const numbers = [58, 60, 30, 58, 59];
numbers.push(35);
console.log(numbers.length);
const index = numbers.indexOf(60);
console.log('Index Number', index);
//Index of diye kono array er element er position ber kora hoy
numbers.pop();
//pop by default last element k sorai fele
console.log(numbers);
//string array
const name = ['maruf', 'rony', 'jibon', 'tarek'];
//object array
const friendDetails = [{ id: 1, name: 'Ibrahim Adham', age: 31, salary: 40000 }, { id: 2, name: 'Jahangir Hossain', age: 33, salary: 75000 }, { id: 3, name: 'Abdullah Al Noman', age: 27, salary: 20000 }];

//Map
const friendName = friendDetails.map(fd => fd.name);
const friendAge = friendDetails.map(fd => {
    return fd.age;
});
const friendSalary = friendDetails.map(fd => fd.salary);
// console.log(friendSalary);
// console.log(friendAge);
//Map will output a result as array, so that we can do more works with array

//For Each
friendDetails.forEach(element => console.log(element.name));
friendDetails.forEach(fa => {
    // console.log(fa.age);
});
friendDetails.forEach(fs => {
    // console.log(fs.salary);
});
//For Each Map er moto array akare output dey na.

//Filter
const frndName = friendDetails.filter(fd => fd.age < 33)
    // console.log(frndName);

//Remove An Item Using Filter
const removeFriend = friendDetails.filter(fd => fd.id != 3)
    // console.log(removeFriend);

//Find
const isAvailable = friendDetails.find(fd => fd.name === 'Ibrahim Adham')
    // console.log(isAvailable);

//Import Array 

//Reduce
//Included
//Push
//Pop
//Length
//indexOf

//Need to see old Videos