//convert to json
const model = {
    model: 'iphone',
    year: 1994,
    ram: '12gb'
}
const data = JSON.stringify(model);

//convert JSON to object
const dataParsed = JSON.parse(data);
const phone = dataParsed.model;
// console.log(phone);

//loacal Storage
localStorage.setItem('userId', 1);
const userid = localStorage.getItem('userId')
    // console.log(userid);

//Transer a object to local storgae
const sentObject = localStorage.setItem('phoneModel', JSON.stringify(model))
const getfromLocal = localStorage.getItem('phoneModel')
const parsedObject = JSON.parse(getfromLocal);
// console.log(parsedObject.ram);

const keys = Object.keys(parsedObject);
//localStorgae theke parsed kora object er only key gulo pete chaile
console.log(keys);
const value = Object.values(parsedObject);
//localStorgae theke parsed kora object er only values gulo pete chaile
console.log(value);