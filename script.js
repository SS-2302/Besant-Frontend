// let a =10;
// let b=10;
// console.log(a+b);

// let firstname=("John");
// let lastname=("doe");
// let email=("john@gmail.com");

// console.log(firstname);
// console.log(lastname);
// console.log(email);

let students=30;
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

const food1="biriyani";
const food2="pizza";
const food3="burger";
const food4="pasta";

function getFood(...foods){
  return foods;
}

function openFridge(...foods){
  console.log(foods);
}

openFridge(food1,food2,food3,food4);




