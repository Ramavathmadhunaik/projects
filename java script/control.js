document.write("<h2>if statement</h2>")

let a = 100
let b = 200
let c = a

if(a === c){
    document.write("it is true");
}
document.write("<br>")

//to check even number
if(a%2==0){
    document.write(a+"is even number");
}
document.write("<br>")

//to check odd number
if(b%2!=1){
    document.write(b+"is odd number");
}
document.write("<br>")

if(a>=c){
    document.write(a+"is greaterthan or equal to"+c)
}
document.write("<br>")

//if-else statement
document.write("<h2>if-else statement</h2>")
if(a != c){
    document.write("it is true");
}
else{
    document.write("it is false")
}
document.write("<br>")

a = 39
b = 38
if(a%2==0){
    document.write("it is even number")
}
else{
    document.write("it is odd number")
}
document.write("<br>")

if(b%2==0){
    document.write("it is even number")
}
else{
    document.write("it is odd number")
}
document.write("<br>")

//else if ladder statement
document.write("<h2>else if ladder statement</h2>")
a = -12
if(a > 0){
    document.write(a+" is positive");
}
else if(a<0){
    document.write(a+" is negative")
}
else{
    document.write(a+" neither positive nor nagative")
}
document.write("<br>")

//nested if statement
document.write("<h2>neasted if statement</h2>")
let x=-34;
if(x>0)
{
    document.writeln(x+" is +ve number")
    if(x%2==0)
    document.writeln("& even number")
    else
    document.writeln("& odd number")
}
else if(x<0){
    document.writeln(x+" is -ve number")
    if(x%2==0)
    document.writeln("& even number")
    else
    document.writeln("& odd number")
}
else{
    document.writeln(x+" is neither +ve nor -ve")
}

//switch case statement
document.write("<h2>switch case statement</h2>")
let color = "green"

switch(color)
{
    case "red" : document.write("stop👀");
    break;
    case "yellow" : document.write("get ready to race🏍️");
    break;
    case "green" : document.write("lets race🏎️🏎️");
    break;
    default : document.write("please enter proper color");

}







//looping statements
document.write("<h2>looping statement</h2>")

console.log("looping statement");

console.log("for loop");

for(let i=0 ; i<5 ; i++){
    console.log("hello")
}
//write a program to print a numbers from 1-10

for(let i=1 ; i<=10 ; i++){
    console.log(i)

}

//write a program to print even numbers from 1-100
console.log("write a program to print even numbers from 1-100")

for(let i=1 ; i<=100 ; i++){
    if(i%2==0){             //i%2!=1
        console.log(i)
    }
}

//write a program to print odd numbers between 1-100
console.log("write a program to print odd numbers from 1-100")

for(let i=1 ; i<=100 ; i++){
    if(i%2==1){           //i%2!=0
        console.log(i)
    }
}

//write a program to print odd or even numbers b/w 1-100

console.log("write a program to print odd or even numbers b/w 1-100")

for(let i=1 ; i<=100 ; i++){
    if(i%2==0)            
        console.log(i+"is even number✌️");
    else
        console.log(i+"is odd number🤞");

}

//while loop

console.log("while loop");
let i=0;
while(i<5){
    console.log("madhu")
    i++;
}

//WAP to print a number from 1-10
//WAP to print even number from 1-100
//WAP to print odd number from 1-100

console.log("write a program to print  numbers from 1-10")
console.log("while loop");
let o=1;
while(o<=10){
    console.log("madhu")
    o++;
}


//WAP to print even number from 1-100
console.log("write a program to print even numbers from 1-10")
console.log("while loop");
 o=1;
while(o<=100){
    if(o%2==0)
    console.log(o+"even numbers")
    o++;
}


//WAP to print odd number from 1-100
console.log("write a program to print odd numbers from 1-10")
console.log("while loop"); 
 o=1;
while(o<=100){
    if(o%2==1)
    console.log(o+"odd numbers")
    o++;
}

