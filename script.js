// let a =10;
// let b=10;
// console.log(a+b);

// let firstname=("John");
// let lastname=("doe");
// let email=("john@gmail.com");

// console.log(firstname);
// console.log(lastname);
// console.log(email);

// let students=30;
// students=students+1;
// students=students-1;
// students=students*2;
// students=students/2;
// students=students**3;
// students=students%2;

// post increment
// students++;
// post decrement
// students--;

// pre increment
// ++students;

// post decrement
// --students;

// console.log(students);

// let result=1%6+8/2;
// let result1=6/2**(2+5);
// console.log(result);
// console.log(result1);


// let username=window.prompt("hello");

// console.log(username);


// let username;
// document.getElementById("mySubmit").onclick=function(){
//     username=document.getElementById("myText").value;
//     document.getElementById("myH1").textContent=`${username} welcome to JS`
// }


// TYPE CONVERSION
// let age=window.prompt("How old are you?")
// age=Number(age);
// age+=1;
// console.log(age);

// let x="lemon";
// let y="lemon";
// let z="lemon";

// x=Number(x);
// y=String(y);
// z=Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);


// let age=18;
// if (age!=18){
//     console.log("you cannot vote");    
// }
// else{
//     console.log("you can vote");  
// }


// let mark=window.prompt("Enter your mark")
// if (mark>=80) {
//     console.log("Grade is A");
    
// } else if(mark>=50 && mark<=79){
//     console.log("Grade is B");
    
// }else if(mark>=20 && mark<=49){
//     console.log("Grade is C");
    
// }else{
//     console.log("You are Fail");
    
// }


// const CheckBox=document.getElementById("myCheckBox");
// const Visa=document.getElementById("visabtn");
// const MasterCard=document.getElementById("mcbtn");
// const Rupay=document.getElementById("rupaybtn");
// const Submit=document.getElementById("mySubmit");
// const SubResult=document.getElementById("subResult");
// const PaymentResult=document.getElementById("paymentResult");



// Submit.onclick=function(){
//     if(CheckBox.checked){
//         SubResult.textContent=`You are Subscribed`;
//     }else{
//         SubResult.textContent=`You are not Subscribed`
//     }

//     if(Visa.checked){
//         PaymentResult.textContent=`You paid with Visa card`;
//     }else if(MasterCard.checked){
//         PaymentResult.textContent=`You paid with martercard card`;
//     }else{
//         PaymentResult.textContent=`You paid with rupay card`
//     }
// }

// const option1=document.getElementById("op1");
// const option2=document.getElementById("op2");
// const option3=document.getElementById("op3");
// const option4=document.getElementById("op4");
// const option5=document.getElementById("op5");
// const Submit=document.getElementById("sub-btn");
// const Answer=document.getElementById("answer");

// Submit.onclick=function(){
//     if(option1.checked && option2.checked && option3.checked){
//         Answer.textContent=`Correct !`
//     }else if(option1 || option2 || option3.checked){
//         Answer.textContent=`The Correct answer is option1,option2,option3`
//     }else{
//         Answer.textContent=`Incorrect`
//     }
// }

// let age=20;

// if(age>=18){
//     console.log("You are eligible to vote");
// }else{
//     console.log("You are not eligible to vote");
// }

// const result=age>18 ? "You are eligible to vote" : "You are not eligible to vote";
// console.log(result);

// let testscore=85;
// let grade;
// switch (true) {
//     case testscore>=80:
//         grade="A";
//         break;
//     case testscore>=70:
//         grade="B";
//         break;
//     case testscore>=60:
//         grade="C";
//         break;
//     case testscore>=50:
//         grade="D";
//         break;
//     default:
//         grade="F";
//         break;
// }

// console.log(grade);


// let username="ganesh kumar";

// charAt()
// const result=username.charAt(0);
// const result2=username.charAt(7); 
// const result=username.indexOf("a");
// const result=username.lastIndexOf("a");
// const result=username.trim();
// const result=username.toLowerCase();
// const result2=username.toUpperCase();

// const result=username.startsWith(" ");
// const result2=username.endsWith(" ");

// if(result){
//     console.log("your name cant starts with a space");
// }else if(result2){
//     console.log("remove the space from end");
// }else{
//     console.log(username);
// }

// console.log(result);


// let phonenumber="+91-91504-65195";
// let result=phonenumber.replaceAll("-","/");

// console.log(result);

// const username="Surender raj";

// let firstname=username.slice(0,4);
// let lastname=username.slice(4);

// let firstname=username.slice(0,username.indexOf(" "));
// let lastname=username.slice(username.indexOf(" ")+1);
// console.log(firstname);
// console.log(lastname);




function showName() {
      let email = document.getElementById("email").value;

      let name = email.slice(0, email.indexOf("@"));
      let Output=document.getElementById("result");

      Output.textContent=`Your name is ${name}`;
      
    }

const temp=-20;

// if (temp>0){
//   console.log("the weather is good");
// }else if(temp<=30){
//   console.log("good weather");
// }else{
//   console.log("weather is bad"); 
// }


// if (temp>0 && temp<=30){
//   console.log("the weather is good");
// }else{
//   console.log("weather is bad"); 
// }


// if (temp>0 || temp<=30){
//   console.log("the weather is good");
// }else{
//   console.log("weather is bad"); 
// }

// const isSunny=false;

// if(!isSunny){
//   console.log("it is sunny");
// }else{
//   console.log("its cloudy")
// }


// const PI=3.14;

// if(PI==3.14){
//   console.log("this is pi");
  
// }else{
//   console.log("this is not pi");
  
// }
// if(PI==='3.14'){
//   console.log("this is pi");
  
// }else{
//   console.log("this is not pi");
  
// }
// if(PI!=3.14){
//   console.log("this is pi");
  
// }else{
//   console.log("this is not pi"); 
// }

// for(i=10;i>=1;i--){
//   // console.log(i);
// }

// for (let i = 1; i <= 3; i++) {
//   console.log("*");
//   console.log("1");
// }
// for (let i = 1; i = 1; i++) {
//   console.log("***");
//   console.log("###");
//   console.log("$$$");
// }



// function add(a,b){
//   return a+b;
// }
// const addresult=add(5,2);
// console.log(addresult);


// function sub(a,b){
//   return a-b;
// }
// const subResult=add(10,2);
// console.log(subResult);


// function mul(a,b){
//   return a*b;
// }
// const mulResult=mul(5,2);
// console.log(mulResult);


// function iseven(number){
//   if(number%2==0){
//     return true;
//   }else{
//     return false;
//   }

//   return number%2==0 ? true : false;
// }
// function isodd(number){
//   if(number%2!==0){
//     return true;
//   }else{
//     return false;
//   }
// }


// console.log(iseven(13));
// console.log(isodd(11));

// function isValidEmail(email){
//   if(email.includes("@")){
//     return true;
//   }else{
//     return false;
//   }
// }

// console.log(isValidEmail("ss@gmail"));


// function isValidSite(text){
//   if(text.includes(".com")){
//     return true;
//   }else{
//     return false;
//   }
// }

// console.log(isValidSite("ss@gmail.com"));


// function username(){
//   let firstname=document.getElementById("firstname").value;
//   let lastname=document.getElementById("lastname").value;

//   // return `${firstname} ${lastname}`;
//   let result=document.getElementById("result");
//   result.textContent=`Your name is ${firstname} ${lastname}`;
// }

// function sqrroot(){
//   let number=document.getElementById("number").value;
//   let result=document.getElementById("result");
//   result.textContent=`The square root of ${number} is ${Math.sqrt(number)}`;
// }


// let x=20;
// function func1(){
//   let x=1; //first priority goes for local variable
//   console.log(x);
// }

// func1();

// let fruits=['apple','banana','orange'];
// fruits.push("coconut");
// fruits.pop();
// fruits.unshift("mango");

// console.log(fruits);


// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// let noOFfruits=fruits.length;
// console.log(noOFfruits);

// let index=fruits.indexOf("apple");
// console.log(index);

// let fruits=['apple','banana','orange'];

// for(i=0;i<fruits.length;i++){
//   console.log(fruits[i].toUpperCase());
// }

// for(i=fruits.length-1;i>=0;i--){
//   console.log(fruits[i].toUpperCase());
// }

// fruits.sort();
// fruits.sort().reverse();

// for(let fruit of fruits){
//   console.log(fruit);
// }

// let numbers=[5,2,9,1,5,6];
// console.log(...numbers);


// let maximum=Math.max(...numbers);
// let minimum=Math.min(...numbers);
// console.log(maximum);
// console.log(minimum);

// let username="Surender Raj";
// console.log(username);

// let chars=[...username];
// console.log(chars);

// let fruits=['apple','banana','orange'];
// let morefruits=['grape','kiwi'];

// let all=[...fruits,...morefruits]
// console.log(fruits);
// console.log(all);

// const food1="biriyani";
// const food2="pizza";
// const food3="burger";
// const food4="pasta";

// function getFood(...foods){
//   return foods;
// }

// function openFridge(...foods){
//   console.log(foods);
// }

// openFridge(food1,food2,food3,food4);


// 18/5 tasks //////////////////////////////////////////////////
// const student={
//   name:"Surender",
//   age:"21",
//   course:"Python Developer",
//   city:"Chennai"
// }

// const{name,age,...stud1}=student;
// console.log(name);
// console.log(age);
// console.log(stud1);


// const numbers=[1,2,3];

// const newNumbers=[...numbers,4,5,6];
// const prevNumbers=[-2,-1,0,...numbers];

// console.log(newNumbers);
// console.log(prevNumbers);

// hello(leave);


// function goodbye(){
//   console.log("Goodbye World");
// }

// function leave(){
//   console.log("Leaving the world");
// }

// function hello(callback){
//   setTimeout(function(){
//     console.log("Hello World");
//     callback();
//   },2000);
// }

// sum(displayWeb,5,10);
// function sum(callback,x,y){
//   let result=x+y;
//   callback(result);
// }

// function displayConsole(result){
//   console.log(`The sum is ${result}`);
// }

// function displayWeb(result){
//   document.getElementById("myH1").textContent=result;
// }



// function calculateGrade(score,totalScore,name,callback){
//   let percentage=(score/totalScore)*100

//   let grade;
//   if (percentage>=90){
//     grade='A';
//   }else if(percentage>=75){
//     grade='B';
//   }else if(percentage>=50){
//     grade='C';
//   }else{
//     grade='F'
//   }

//   const student={
//     name,
//     grade
//   }

//   callback(student)
// }

// calculateGrade(25,100,"john",displayGrade)

// function displayGrade(student){
//   console.log(`hello ${student.name}! Your final grade for the course is ${student.grade}`);
  
// }

// let numbers=[1,2,3,4,5,6];

// // numbers.forEach(double)
// numbers.forEach(square)
// numbers.forEach(display)



// function double(element,index,array){
//   array[index]=element*2;
// }

// function  display(element){
//   console.log(element);
// }

// function square(element,index,array){
//   array[index]=Math.pow(element,2)
// }

// let fruits=["apple","orange","banana","coconut"];

// fruits.forEach(uppercase)
// fruits.forEach(capitalize)
// fruits.forEach(lastcapitalize)
// fruits.forEach(display);


// function uppercase(element,index,array){
//   array[index]=element.toUpperCase()
// }

// function capitalize(element,index,array){
//   array[index]=element.charAt(0).toUpperCase()+element.slice(1)
// }
// function lastcapitalize(element,index,array){
//   array[index]=element.slice(0,element.length-1)+element.charAt(element.length-1).toUpperCase()
// }

// function  display(element){
//   console.log(element);
// }

// let price=["10.99", "5.50", "20.00"]

// price.forEach(priceTag)
// price.forEach(display)

// function display(element){
//   console.log(element);
// }

// function priceTag(element,index,array){
//   array[index]=`Item ${index+1}: $`+element
// }

// let titles=['Learn JavaScript Fast', 'How to Use Loops', 'Array Methods Guide']

// let slugs=[]

// titles.forEach(lowercase)
// titles.forEach(replace)
// titles.forEach(display)

// function display(element){
//   console.log(element);
  
// }


// function lowercase(element,index,array){
//   array[index]=element.toLowerCase()
// }

// function replace(element,index,array){
//   array[index]=element.replaceAll(' ','-')
//   slugs.push(array[index])
// }

// const numbers=[1,2,3,4,5,6];

// const squares=numbers.map(square)
// const cubes=numbers.map(cube)

// function square(element){
//   return Math.pow(element,2)
// }
// function cube(element){
//   return Math.pow(element,3)
// }

// console.log(squares);
// console.log(cubes);


// const students=["virat","tim","rajat"]

// const uppercaseStudents=students.map(uppercase)

// function uppercase(element){
//   return element.toUpperCase();
// }

// console.log(uppercaseStudents);

// const dates=["2024-1-10","2022-4-29"]

// const newDate=dates.map(formatDate)

// function formatDate(element){
//   const parts=element.split("-")
//   return`${parts[2]}/${parts[1]}/${parts[0]}`
// }

// console.log(newDate);


// const numbers=[1,2,3,4,5,6];
// let evenNumber=numbers.filter(isEven);



// function isEven(element){
//   return element% 2 == 0
// }

// console.log(evenNumber);

// const ages=[16, 17, 18, 19, 20, 60];

// const adults=ages.filter(isAdult)

// function isAdult(element){
//   return element>=18
// }

// console.log(adults);

// const words=['apple','orange','pomogranate','coconut']

// const sWords=words.filter(shortwords)
// console.log(sWords);


// function shortwords(element){
//   return element.length>=6;
// }

// const prices=[5,30,10,25,15,20];

// const total = prices.reduce(sum)

// console.log(`${total.toFixed(2)}`);



// function sum(accumulator,element){
//   return accumulator+element
// }


// function hello(){
//   console.log("hello");
  
// }
// hello()

// const hello = function hello(){
//   console.log("hello");
  
// }

// console.log(hello());


// function hello(){
//   console.log("hello");
  
// }

// setTimeout(hello,3000)

// const numbers=[1,2,3,4,5,6]

// const squares=numbers.map(square)
// const squares=numbers.map(function(element){
//   return Math.pow(element,2)
// })


// function square(element){
//   return Math.pow(element,2)
// }
// console.log(squares);

// const squares=numbers.map(function(element){
//   return Math.pow(element,3)
// })

// console.log(squares);

// const hello =()=> console.log("hello");
// console.log(hello());


// const hello=(name,age)=>{console.log(`hello ${name}`)
//                     (console.log(`age is ${age}`));
// }

// console.log(hello("ss",34));


// const numbers=[1,2,3,4,5,6];

// const squares=numbers.map((element)=>Math.pow(element,2));

// console.log(squares);


// const person1={
//   firstname:"Ganesh",
//   lastname:"kumar",
//   age:28,
//   isEmployed:true,

//   sayHello: function(){console.log("hello");
//   sayBye: ()=> {console.log("bye");
//   }
//   }
// }

// // . => dot operator
// console.log(person1);
// console.log(person1.firstname);
// console.log(person1.age);
// person1.sayHello()
// person1.sayBye()

// const person1={
//   firstname:"Ganesh",
//   lastname:"kumar",

//   sayHello: function(){console.log(`hi ${this.firstname}`);
// }

// }

// person1.sayHello()


// function car(make,model,year,color){
//   this.make=make,
//   this.model=model,
//   this.year=year,
//   this.color=color
// }

// const car1=new car("tata","sierra",2020,"red");
// const car2=new car("hyundai","creta",2022,"black")

// console.log(car1);
// console.log(car2);


// class products{
//   constructor(name,price){
//     this.name=name;
//     this.price=price;
//   }

//   displayProduct(){
//     console.log(`product: ${this.name}`);
//     console.log(`price: ${this.price}`);
    
//   }

//   calculateTotal
// }

// const product1=new products("iphone",93475)

// product1.displayProduct()

// const total = product1

// class rectangle{
//   constructor(width,height){
//     this.width=width;
//     this.height=height;
//   }

//   set width(newWidth){
//     if(newWidth > 0){
//       this._width=newWidth;
//     }else{
//       console.error("width must be a positive number")
//     }
//   }

//   set height(newheight){
//     if(newheight > 0){
//       this._height=newheight;
//     }else{
//       console.error("height must be a positive number")
//     }
//   }

//   get height(){
//     return this._height
//   }
// }

// const Rect=new rectangle(5,7)

// console.log(rectangle.width);


// class person{
//   constructor(firstname,lastname,age){
//     this.firstname=firstname;
//     this.lastnmae=lastname;
//     this.age=age;
//   }

//   set firstname(newFirstName){
//     if(typeof newFirstName === "string" && newFirstName.length>0){
//       this._firstname=newFirstName
//     }else{
//       console.error("first name must be non empty string")
//     }
//   }

//   set lastname(newLastName){
//     if(typeof newLastName === "string" && newLastName.length>0){
//       this._lastname=newLastName
//     }else{
//       console.error("last name must be non empty string")
//     }
//   }

//   set age(newAge){
//     if(typeof newAge === "number" && newAge.length>0){
//       this._age=newAge
//     }else{
//       console.error("age must be non negative number")
//     }
//   }

//   get firstname(){
//     return this._firstname
//   }
//   get lastname(){
//     return this._lastname
//   }
//   get age(){
//     return this._age
//   }
//   get fullname(){
//     return this._firstname+ " "+this._lastname
//   }
// }

// const Person=new person("carrot","apple", 22)

// console.log(Person.firstname);
// console.log(Person.lastname);
// console.log(Person.age);
// console.log(Person.fullname);


// let a=1;
// let b=2;

// [a,b] =[b,a]

// console.log(a,b);
// console.log(b);

// const colors=["red","green","blue","white",'yellow'];

// [colors[0],colors[3]]=[colors[3],colors[0]];

// console.log(colors);

// const [firstcolor, secondcolor, thirdcolor, ...extra]=colors;

// console.log(firstcolor);
// console.log(secondcolor);
// console.log(thirdcolor);
// console.log(extra);

// const person1={
//   firstname: "ganesh",
//   lastname: "kumar",
//   age: 20,
//   job: "driver",
// }
// const person2={
//   firstname: "Surender",
//   lastname: "raj",
//   age: 25,
//   job: "manager",
// }

// const {firstname,lastname,age,job} = person1;

// console.log(firstname);
// console.log(age);

// function displayPerson({firstname,lastname,age}){
//  console.log(`the firstname is ${firstname}`);
 
// }

// displayPerson(person1)


// const person={
//   fullname: "Surender Raj",
//   age: 20,
//   isStudent: true,
//   hobbies: ["singing","playing","drawing"],
//   address: {
//     street: "10,rose garden",
//     city: "chennai",
//     country: "india"
//   }
// }

// console.log(person.fullname);
// console.log(person.hobbies[2]);
// console.log(person.address.city);

// for(const property in person.address){
//   console.log(person.address[property]);
// }

// class person{
//   constructor(name,age, ...address){
//     this.name=name;
//     this.age=age;
//     this.address=address;
//   }
// }

// class address{
//   constructor(street,city,country){
//     this.street=street;
//     this.city=city;
//     this.country=country;
//   }
// }

// const person1=new person("aslam",20,"rose garden","chennai","india")

// console.log(person1);


// const fruits=[
//   {name:"apple",color:"red",calories:120},
//   {name:"orange",color:"orange",calories:10},
//   {name:"banana",color:"yellow",calories:130},
//   {name:"grapes",color:"purple",calories:70},
// ]

// fruits.push({name:"coconut",color:"white",calories:90})
// // fruits.splice(1,2)
// console.log(fruits);

// fruits.forEach((fruit => console.log(fruit.calories)));

// const fruitname=fruits.map(fruit => fruit.name);
// const yellowfruits=fruits.filter(fruit => fruit.color==="yellow");
// console.log(yellowfruits);


// const maxFruit=fruits.reduce((max, fruit) =>fruit.calories > max.calories ? fruit : max)

// console.log(maxFruit.calories);

// const minFruit=fruits.reduce((max, fruit) =>fruit.calories < max.calories ? fruit : max)

// console.log(minFruit.calories);

// function outer(){

//   let message='hello'

//   function inner(){
//     console.log(message);
    
//   }
//   inner()
// }

// outer();
// function createCounter(){

//   let count=0;
//   function increment(){
  
//   count++;
//   console.log(`count increased to ${count}`);
  
// }

// return {increment}
// }

// const counter = createCounter()

// counter.increment()
// counter.increment()
// counter.increment()
// counter.increment()
// counter.increment()
// counter.increment()


// function sayHello(){
//   window.alert("hello")
// }

// setTimeout(() => window.alert("hello"), 4000);

// function func1(callback) {
//   setTimeout(() => {console.log("Task 1"); 
//                     callback() }, 3000);
// }

// function func2() {
// console.log("Task 2");
// console.log("Task 3");
// console.log("Task 4");
// }

// func1(func2);

// setTimeout(() => console.log("Task 1"), 5000);
// setTimeout(() => console.log("Task 2"), 3000);
// setTimeout(() => console.log("Task 3"), 1000);
// setTimeout(() => console.log("Task 4"), 2000);

// setTimeout(() => console.log("Task 1"), 5000);
// setTimeout(() => console.log("Task 2"), 3000);
// setTimeout(() => console.log("Task 3"), 1000);
// setTimeout(() => console.log("Task 4"), 2000);

// const x = 1;

// try {

//   console.log(x);
// } catch(error) {
//    console.log(error);     
// } finally {
//   // close file
//   // close connection 
//   // release resourses
//   console.log("this always executes");
  
// }


// console.log("You have reached of hte code");
// try {

//   const dividend = window.prompt("Enter the divdend: ");
//  const divisor = window.prompt("Enter the divisor: ");

//  if( divisor == 0) {
//   throw new Error("You cant divide by zero!!")
//  } if(isNaN(dividend) || isNaN(divisor)) {
//   throw new Error("Values must be number!!")
//  }

//  const result = dividend / divisor;

//  console.log(result);

// } catch(error) {
//   console.error(error);
// }

//  console.log("You have reached of the code");


function task1(callback){
  setTimeout(()=>{
    console.log("task 1 is completed");
    callback();
  },1500)
}
function task2(){
  setTimeout(()=>{
    console.log("task 2 is completed");
    
  },1500)
}
function task3(){
  setTimeout(()=>{
    console.log("task 3 is completed");
    
  },1500)
}
function task4(){
  setTimeout(()=>{
    console.log("task 4 is completed");
    
  },1500)
}

// task1()
// task2()
// task3()
// task4()

task1(()=>{
  task2(()=>{
    task3(()=>{
      task4(()=>{
        
      })
    })
  })
})