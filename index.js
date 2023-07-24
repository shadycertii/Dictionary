// data types in js

// variables
// variables are containers for storing data in js

// Numbers - Integer : They re whole numbers (1, 3, 6, 8, 9), float: They re decimal numbers (0.4, 0.999)

// Strings: These texts in js, they can be alphabetic, alpha-numeric or numeric '67', "67" "hello"

// Arrays :Arrays are used to hold datas, objects in js

// objects: Objects are used to hold datas, objects , Arrays in js


// let, const, var



let thename = document.getElementById('thename')
let thegen = document.getElementById('thegen')

document.write(" hello world!!!!!")
var promptname = prompt("Enter your name")
var gen = prompt("Enter your gender")
thename.innerHTML = promptname
thegen.innerHTML = gen
document.getElementById("header").innerHTML = promptname

document.write(document.getElementById("head").innerHTML) ;





// let text = 'hello world'
//     console.log(text)

//     text = 'samuel'
//     console.log(text)   


// const Name = 'michael'
//       console.log(Name)

      Name = 'umar'
      console.log(Name)

      
var number = 1;
   console.log(number)

   let a = 9
   let b = 2
   let result = a + b
   console.log(result) 

   let resultTwo = a * b
   console.log(resultTwo)

   let resultThree = a / b
   console.log(resultThree);

   let resultFour = a - b
   console.log(resultFour);

   let firstWord = 'hello'
   let secondWord = 'world'
   let space = ' '
 
   console.log(firstWord + space + secondWord);


// addition : +
// substract: -
// divide : /
// multiplication: *
// equality (checks for equality only): ==
// equality (checks both data type and equality): ===
// declorator: =
// raise to power: **

// logical operators
// not to equal to !=
// greater than: >
// greater than or equal to >=
// less than <
// less than or equal to <=
// AND &&
// OR : //
// not : !

// And logical 
// /t/f/output
// / 1/ 0/ 0
// /0 / 1/ 0
// /1 / 1/ 1
// /0 / 0 /0

// Or logical 

// /T / F/ output
// /1 / 0/ 1
// / 0/ 1/ 1
// /1 /1 /1
// /0 /0 /0

// NOT logical
// / T / O
// /1 / 0
// / 0 /1


let student = ' james brown'
let msg = 'Welcome'

console.log(msg + student)


// alert(msg + student)

// confirm('Are you 18+')

// prompt('Are you ok?')

if (5 == '5'){
    console.log(true);
}
else{
    console.log(false);
}
// 

if (5 == '5') {
    console.log(true);
}
else{
    console.log(false);
}

if (6 < 4 || 4 > 1) {
    console.log(true);
} else {
    console.log(false);
}

let p = false

console.log(!p);

let num = 91

if (num % 2 == 0) {
    console.log(num + ' is an even number');
} else {
    console.log(num + ' is an odd number');
}

// mark a condition statement that checks mark's english score and grade it as follows 0-20 f, 21 - 40 E, 41-50 D, 51-60 C, 61-70 B, 71-100 A.

let englishGrade = 78

if((englishGrade >= 71) && (englishGrade <= 100)){
    console.log(englishGrade + ' = A');
}

if((englishGrade >= 61) && (englishGrade <= 70)){
    console.log(englishGrade + ' = B');
}

if((englishGrade >= 51) && (englishGrade <= 60)){
    console.log(englishGrade + ' = C');
}

if((englishGrade >= 41) && (englishGrade <= 50)){
    console.log(englishGrade + ' = D');
}

if((englishGrade >= 21) && (englishGrade <= 40)){
    console.log(englishGrade + ' = D');
}

if((englishGrade >= 0) && (englishGrade <= 21)){
    console.log(englishGrade + ' = D');
}


// ............................

let letter = "9"

console.log(typeof letter);

// ..................

let currentYear = 2023
let input = 2007

function calculateSegun(){
  console.log(currentYear - input);
  console.log(currentYear + input);
}

calculateSegun()

// write a js program that checks if a number is even then multiply by 2 else return num is odd

// write a condition that checks if a variable is an even number or not. if its an even number, console number is an even number'. if its not an even number, console number is an odd number

// write a js function that takes in a phone number and convert it to +234-903-654-9087)

// strings method
let username = 'mike%'

    console.log(username.length);

    console.log(username.concat(' Certii'));
    
    console.log(username.toLocaleUpperCase());
    
    console.log(username.includes('%'));
    
    console.log(username.indexOf('m'));
    
    console.log(username.endsWith('%'));
    
    console.log(username.startsWith('m'));
    console.log(username.substring(2, 6));



let tel = 0980987865

console.log(typeof tel);
let convertedtel = tel.toString()
console.log(typeof convertedtel);

console.log("+" + 234 + convertedtel.substring());

function ConvertTel(tel){
let telephone = tel.toString()
let part1 = '+234'
let part2 = telephone.substring(0, 3)
let part3 = telephone.substring(3, 6)
let part4 = telephone.substring(6, 10)

return `${part1}-${part2}-${part3}-${part4}`
}
// return part1 + '-' + part2 + '-' + part3 + '-' + part4

let finalResult = ConvertTel(08188191853)
console.log(finalResult)

// replace 

let myName = 'segun bankole'
console.log(myName.replace('bankole', 'certii'))

let acctNumber = '1416787659'
let extractAcct = acctNumber.substring(6, 11)
console.log(extractAcct);

console.log(extractAcct.padStart('*'));
console.log(extractAcct.padEnd(10, '*'));

// Assignment write a js function that takes in an 
// account number 1419839978 and convert it to 141****978

// let accountNumber = '1418188191'
// console.log(typeof accountNumber) 

// function Assignment(accountNumber){
    
// console.log(accountNumber.replace('8188', '****'));

    let accountNumber = '1416787659'
    let accountString = accountNumber.toString()

function Assignment(accountNumber){
    let convertedAccount = accountString.substring(0,3) +
     "****" + accountString.substring(7);
    return convertedAccount;
}

Assignment()
console.log(Assignment());


// class work

function robin(NameofRob){
let Rob = 'singh robin'
let Extract = Rob.substring(6, 10)
return console.log(Extract)
}
robin()

function Singh(sighnn) {
    let singh = 'RobinSingh'
    let extractsingh = singh.replace('Singh', '.') 
    return console.log(extractsingh);
}
Singh()

//addresss 

let Address = 'robinsingh@gmail.com'
let addressString = Address.toString()

function Emailaddress(Address) {
    let convertedemail = addressString.substring(0,5)
     + "****" + addressString.substring(10);
     return console.log(convertedemail);
}
Emailaddress()



function Capital(capitalise) {
    let capitalisename = 'js string execise'
    let capitalreplace = capitalisename.replace('js', 'Js');
    return console.log(capitalreplace);
}
Capital()

// class work


let certifiedeazy = '08188191853'
let certiiString = certifiedeazy.toString()

function shady(certifiedeazy) {
let certiiconvert = certiiString.substring(0,3) +
 "*****" + certiiString.substring(8) 
 return  console.log(certiiconvert);    
}
shady()
// 

// objects, array and array methods
let users = [
'Umar', 'Agbor E.', 'Godwin', 'Malik', 'Melody'
]

console.log(users[0])
// index

console.log(users.length)
// length method

console.log(users.length);

console.log(users.join(', '));
// use for converting an array to string

let malik = 'Prodigal Bankole'

let splitted = malik.split('').reverse().join('').toLocaleUpperCase()

console.log(splitted);

console.log(splitted.split('').reverse('').join(''));


let numbers = [1,2,3,4,7,9,21,67,98,43,76,89,25]
// sort method

console.log(numbers.sort((b,c) => c - b));
console.log(numbers.reduce((z,a) => z + a));

// pop - pop method is used to delete the last item in an array
// push - is used to add to the last in an array
// shift - is used to remove to the first in an array
// unshift - is used to add the first item in an array

console.log(numbers.pop());

console.log(numbers.push(90));
console.log(numbers);

console.log(numbers.unshift(90));
console.log(numbers);

console.log(numbers.shift());
console.log(numbers);

// colors
let myColor = [
    'red', 'Green', 'White', 'Black'
]

console.log(myColor.join(' , '));
console.log(myColor.join(' + '));
// 2
let dashh = 12345
let dashstring = dashh.toString()
console.log(dashstring.split('').join('-'))

// 3
let pro = [-3, 8, 7, 6, 5, -4, 3, 1, 2]
console.log(pro);
console.log(pro.sort((a, z) => a - z));

// 4
let inter = [2, 3, 7, 4, 9, 12, 5, 10]
console.log(inter);
console.log(inter.reduce((a, z) => a + z));
console.log(inter.reduce((a, z) => a * z));

// class work
let barcelona = 'agilalfosnoipmahc3202'

function barca() {
 console.log(barcelona.split('').reverse().join('').toLocaleUpperCase());   
 console.log(barcelona);
 return barcelona
}
barca()

// let integer = 56789
// function inte(){
//     console.log(integer.split('').reverse().join('').toLocaleUpperCase());
//     return integer
// }
// inte()



// map method
let user = users.map(user => user)
console.log(user);

let students = [
{
    name: 'Malik Agbor',
    age: 13,
    class: 'jss2'
},

{
    name: 'Bankole Segun',
    age: 16,
    class: 'ss2'
},

{
    name: 'Agbor Libra',
    age: 20,
    class: 'ss1'
},

{
    name: 'Cane Abel',
    age: 21,
    class: 'ss3'
},
]

console.log(students);
console.log(students[2]);
console.log(students.map(students => students));

let display = students.slice(0, 3)

console.log(display.map(d => d));


console.log(numbers.map(number => numbers * 5))

console.log(students.map(student => 'Welcome ' + student.name));

console.log(students.find(student => student.age == 16));

console.log(students.filter(student => student.age > 15));

console.log(students.splice(0,2));

// loop
for (let i = 0; i < students.length; i++) {
    const element = students[i];
    console.log(element);
}


// 
let u = [1, 2, 3, 4, 5, 6, 7, 8]
let s = [...u]

console.log(u);
console.log(s);

let time = new Date()
let hr = time.getHours()
let min = time.getMinutes()
let sec = time.getSeconds()

let millisec = time.getMilliseconds()

console.log(`${hr}:${min}:${sec},${millisec}`);
let day = time.getDate()
let mon = time.getMonth()
let year = time.getFullYear()
console.log(day);
console.log(mon);
console.log(year);

function updateTime() {
 let time = new Date()
 
 let min = time.getMinutes()

 let hr = time.getHours()
 let sec = time.getSeconds()
 let millisec = time.getMilliseconds()
 console.log(hr);

 console.log(`${hr} : ${min} : ${sec} : ${millisec}`);
}
updateTime()

// setInterval(updateTime, 1000)

let month = ['Jan', 'Feb' , 'Mar', 'Apr' , 'May', 'June', 'July',
 'Aug', 'Sept', 'Oct', 'Nov', "Dec"]
console.log(`${day} / ${month[mon]} / ${year}`);

let dayss = time.getDay()
let days = ['Sunday', 'Monday', 'Tuesday', 'Wenesday', 'Thursday', 'Friday', 'Saturday']
console.log(`${days[dayss]} / ${month[mon]} / ${year}`);

let yearss = time.getFullYear()
console.log(`${days[dayss]} / ${month[mon]} / ${yearss}`);

// 
document.getElementById("inp").value = "hello";

var headings = document.getElementById("header") 

console.log(headings);

let headd = headings.toString()
function theHead(){
let headings = document.getElementById("header").innerHTML = ''
return headings
}
console.log(headings);


const box = document.getElementById("box");
const texts = document.getElementById("texts");

const textCS = window.getComputedStyle(texts)
const boxCS = window.getComputedStyle(box);

const boxCSafter = window.getComputedStyle(box, "::after");

console.log(textCS.fontSize);
console.log(boxCS.backgroundColor);
console.log(boxCSafter.backgroundColor);

const press = document.getElementById('press')

press.addEventListener("mouseover",recordLog);
press2.addEventListener("click",recordLog);
function recordLog(){
    console.log('Clicked button');
}

const record2 = document.getElementById('press2');


const clickdev = document.getElementById("clickdev")

const devbtn = document.getElementById("devbtn")



 function clickme(){
    document.getElementById("clickdev").style.display = "block";
    document.getElementById("bod").style.background = "black";
    document.getElementById("btnback").style.display = "none";

}


 function goback(){
        document.getElementById("btnback").style.display = "block";
    document.getElementById("clickdev").style.display = "none";
 }




 let inpp = document.getElementById('input1');
let pass = "7883737hdneb99hejudbdnjdbvcbgdjhmksmsbbvgdjjmdsnxbxndmkmsnnjsd-=+(%$#@"
let password = "";

 function Generate(){
for (let i = 1; i <= 8; i++) {
    lengthRand = Math.floor(Math.random() * pass.length)
    console.log(lengthRand);
    password += pass [lengthRand]
}

console.log(password);
inpp.value = password
password = ""
 }



 let btn = document.getElementById('btn')
 let nav = document.querySelector('nav')

 btn.addEventListener('click', ()=>{
    btn.classList.toggle('active')

    nav.classList.toggle('show')
 }
 )




 let screen = document.getElementById('input')
 let one = document.getElementById('one')
 let two = document.getElementById('two')
 let three = document.getElementById('three')
 let four = document.getElementById('four')
 let five = document.getElementById('five')
 let six = document.getElementById('six')
 let seven = document.getElementById('seven')
 let eight = document.getElementById('eight')
 let nine = document.getElementById('nine')
 let minus = document.getElementById('minus')
 let zero = document.getElementById('zero')
 let dot = document.getElementById('dot')
 let divide = document.getElementById('divide')
 let equal = document.getElementById('equals')
 let plus = document.getElementById('plus')
 let multiply = document.getElementById('multi')
 let clear = document.getElementById('clear')
 let del = document.getElementById('delete')
 
 let inputVal = screen.value
 
 
 one.addEventListener('click', ()=> {
     let x = screen.value
     screen.value = x + 1
     })
 
     two.addEventListener('click', ()=>{
     let x = screen.value
     screen.value = x + 2
         })
 
         three.addEventListener('click', ()=>{
         let x = screen.value
         screen.value = x + 3
             })
 
             four.addEventListener('click', ()=>{
 let x = screen.value
 screen.value = x + 4
 })
 
 five.addEventListener('click', ()=>{
     let x = screen.value
     screen.value = x + 5
     })
 
     six.addEventListener('click', ()=>{
         let x = screen.value
         screen.value = x + 6
         })
 
         seven.addEventListener('click', ()=>{
             let x = screen.value
             screen.value = x + 7
             })
 
             eight.addEventListener('click', ()=>{
                 let x = screen.value
                 screen.value = x + 8
                 })
 
                 nine.addEventListener('click', ()=>{
                     let x = screen.value
                     screen.value = x + 9
                     })
 
     dot.addEventListener('click', ()=>{   
   let x = screen.value
   screen.value = x + '.'
     })
 
     minus.addEventListener('click', ()=>{   
         let x = screen.value
         screen.value = x + '-'
           })
 
           divide.addEventListener('click', ()=>{   
             let x = screen.value
             screen.value = x + '/'
               })    
             
               
               plus.addEventListener('click', ()=>{   
                 let x = screen.value
                 screen.value = x + '+'
               })
 
                multiply.addEventListener('click', ()=>{   
                 let x = screen.value
                 screen.value = x + '*'
                })
 
                equal.addEventListener('click', ()=>{   
                 let x = screen.value
                 screen.value = eval(x)
                })
 
                clear.addEventListener('click', ()=>{   
                    screen.value = ''
                })
 
 del.addEventListener('click', ()=>{
     let x =screen.value
     screen.value = x.substring(0, x.length-1)
 })


 let colors = [
    'red', 'blue', 'yellow', 'purple', 'pink', 'green','orange','gray','black','orangered'
 ]
let div = document.querySelector('.box')

 function colorPicker() {
    let color = Math.floor(Math.random() * colors.length)
       let colos = Math.floor(Math.random() * colors.length)
    let col = Math.floor(Math.random() * colors.length)
console.log(colors[color]); 
console.log(colors[col]); 
console.log(colors[colos]);
document.querySelector('.box1').style.backgroundColor = colors[colos]
document.querySelector('.box2').style.backgroundColor = colors[col]
div.style.backgroundColor = colors[color]
}
 colorPicker()