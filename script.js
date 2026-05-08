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


const CheckBox=document.getElementById("myCheckBox");
const Visa=document.getElementById("visabtn");
const MasterCard=document.getElementById("mcbtn");
const Rupay=document.getElementById("rupaybtn");
const Submit=document.getElementById("mySubmit");
const SubResult=document.getElementById("subResult");
const PaymentResult=document.getElementById("paymentResult");



Submit.onclick=function(){
    if(CheckBox.checked){
        SubResult.textContent=`You are Subscribed`;
    }else{
        SubResult.textContent=`You are not Subscribed`
    }

    if(Visa.checked){
        PaymentResult.textContent=`You paid with Visa card`;
    }else if(MasterCard.checked){
        PaymentResult.textContent=`You paid with martercard card`;
    }else{
        PaymentResult.textContent=`You paid with rupay card`
    }
}