 document.write("<h2>genral function</h2>")
console.log("general function")

function fun()//decleration of the function
{
//body of the function
console.log("when iam realise😒");
console.log("think about your self🤔")
}
fun()//call invoke of the function
fun()



//function with parameter&without return value
console.log("function with parameter&without return value")
function fun1(a)
{
    console.log("with parameter");
    console.log("a = "+a);//print the value
    console.log(typeof a);//to check the datatype
}
fun1(100)
fun1("madhu")
fun1(true)
fun1()
console.log("data type of the function = "+typeof fun1)

//conclusion
function fun2(a=100)
{
    console.log(a);

}
fun2()//100
fun2(true)
fun2("madhu")

function fun3(a,b)
{
console.log(a)
console.log(b)
}
fun3("madhu",true)


//adding
function add(n1,n2)
{
    let sum = n1 + n2
    
    console.log(sum);

}
add(10,20)

//function without parameter with return value
console.log("function without parameter with return value" )

function fun4()
{
    return 100;
}
let x = fun4()
console.log("return value = "+x)

function fun5()
{
    console.log("pavan ki anni thelsu")
    return "pavan going to oyo";
}
let msg = fun5()
console.log(msg)

//function with parameter with return value
console.log("function with parameter with return value")
function fun6(a)
{
    console.log("room ki eppudosthav" +a);
    return "time cheppu vastha"
}
let y = fun6(4.30)
console.log(y);


function multiplication(n1,n2)
{
    let n3 =n1*n2
    return n3
}

console.log(multiplication(42,10));

//function without parameter & without return value
console.log("anonymous function");
console.log("function without parameter & without return value");
let afun1 = function()
{
    console.log("iam a anonymous function");
}
afun1()
console.log(typeof afun1);

//function with parameter & without return value
console.log("function with parameter & without return value");
let afun2 = function(a,b,c=true)
{
    console.log("madhu"+a)
    console.log(b);
    console.log(c);
}
afun2("is a develper")

//function without parameter & with return value
console.log("function without parameter & with return value");
let afun3 = function()
{
    console.log("iam in javascript class");
    return "and my faculty sheeraj sir"
}
let msg1 = afun3()
console.log(msg1);


//function with parameter & with return value
console.log("function with parameter & with return value");
let afun4 = function(a)
{
    return a
}
let r2 = afun4(100)
console.log(r2);

let afun5 = function(a)
{
    return "hello "+a
}
let r3 = afun5("dinga")
console.log(r3);



//arrow function
console.log("arrow function")

let arrow1 = (a) => {
    console.log("hello")
    console.log(a);
}
arrow1(1000)

//conclusion
let arrow2 = a=> {
    return "madhu weds "+a

}
let invite =arrow2("aliya")
console.log(invite);

let arrow3 =_=>{
    console.log("all are come to my marrage")
}
arrow3()

let arrow4 =_ =>"hello babu"

let rv1 = arrow4()
console.log(rv1);

let addnum = (a,b) => a+b
let res = addnum(10,20)
console.log(res);









