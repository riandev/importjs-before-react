const money = 200;
let food;
if (money > 150) {
    food = 'biryani'
} else {
    food = 'alu vorta'
}
// console.log(food);
// if else has shortcut methood
let food2 = money > 100 ? 'biryani' : 'alu vorta';
// variable variable - name = condition ? condition true output : condition false output
// console.log(food2);
let activeStatus = false;
// let active = activeStatus === true ? 'active' : 'inactive';
//function call shortcut alternative
// activeStatus === true ? showdetails() : hideDetails();
//ekhane condition ti true hole showDetails function run korbe ar false hole hideDetails Function run krbe.

//akhn jodi condition ekta e hoy tahole
// activeStatus === true && showdetails();
// activeStatus === true || showdetails(); //eta diye onk smy default value o set kra hoy.

//With variable declare
let active2 = false;
const x = active2 && 5;
const y = active2 || 6;
//ekhane jodi active2 true hoy tahole && er por er ta execute korbe or show krbe
//&& hole true hole porer tai jabe ar || hole false hole porer tai jabe
console.log(x);
console.log(y);

//String to Number convert shortcut

const numConvert = +'34';
//string er aage + sign dile seta number e convert hoye jai
console.log(numConvert);

//Number to string convert
const stringConvert = 34 + '';
//+"" empty string diye dile number ta string e convery hoye jabe
console.log(stringConvert);

function numFunction(num1, num2 = 5) {
    // num2 = num2 || 5;
    return num1 + num2;
}
numFunction(55);
//ekhane 55 dile 2nd number er value 5 default vabe jog hoye jbe, r jodi 55,10 dei tahole r default value 5 kaj krbe na , num2 er value tokhn 10 hoye jbe