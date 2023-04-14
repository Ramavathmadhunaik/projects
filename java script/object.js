let car = {
    name : "BMW",
    color :"white",
    milage : 5,
    price : "50L"
}

console.log(typeof car);
console.log(car);

/* 
    NOTE: to access the data from the object we are fowlling two ways
    1.dot operator
    2.subscript operator
*/

//dot operator
let cn = car.name
console.log(cn)

//subscript operator
let cc = car["color"]
console.log(cc);

//change the value of the property
car.milage = 6.5
console.log(car);

//add the property of the object
car.RegNo = "KA 00 AB 1234"
console.log(car);

car.inventedby ="madhunaik"
console.log(car);

//delete/remove the property
delete car.milage
console.log(car)

//using the new keyword
let car1 = new Object()
console.log(typeof car1);
console.log(car1);

car1["name"] = "audi"
car1.color = "red"
console.log(car1);

//using constaction function
function cars()
{
    this.name = "kia"
    this.color = "red"
}
console.log(typeof cars);

let car2 = new cars()
console.log(typeof car2);
console.log(car2)

let car3 = new cars()
console.log(typeof car3);
console.log(car3)

function carz(nm,clr)
{
    this.name = nm
    this.color = clr
}
carz()
console.log(typeof carz);

let car4 = new carz("tata","red")
console.log(car4)

let car5 = new carz("RR","gold");
console.log(car5)

let car6 = new carz("lambogni","yellow")
console.log(car6)

/*
//example problem
function Guns()
{
    this.name = "AKM"
    this.color = "brown"
}
console.log(typeof Guns);

let gun1 = new Guns()
console.log(typeof gun1);
console.log(gun1)

function Gunsz(nm,clr)
{
    this.name = nm
    this.color = clr
}
Gunsz()
console.log(typeof Gunsz);

let gun2 = new Gunsz("AWM","green")
console.log(gun2)

let gun3 = new Gunsz("pistol","white");
console.log(gun3)
*/


function carz(nm,clr)
{
    this.name = nm
    this.color = clr
}
console.log(typeof carz);
let CarDB = []

let carq = new carz("tata","red")
CarDB.push(carq)

let carw = new carz("RR","gold");
CarDB.push(carw)

let care = new carz("lambogni","yellow")
CarDB.push(care)

console.log(CarDB)

for(let i=0 ; i<CarDB.length ; i++)
{
    let msz = "car name is "+CarDB[i].name+" & color is "+CarDB[i].color
    console.log(msz) // msz is a typeof string
}


let array = [10,20,30,40,50]

console.log("for-in loop");
for(let key in array)
{
    console.log(key)

}

console.log("for-of loop");
for(let key of array)
{
    console.log(key)
}

let bike = {
    name : "royal enfield",
    color: "black"

}
for(let key in bike){
    console.log(key);
}

for(let key in bike){
    console.log(key+ "="+bike[key]);
}


let PersonObj = {
    name : "madhu",
    gender : "male",
    dob : 1869,
    eating : function(){
        console.log(this.name+" is eating biryani");

    },
    sleeping : () => {
        console.log(this.name+" is sleeping");

    },
    calculateAge : function(){
        let age = 2022 - this.dob
        console.log(age);

    }
}
PersonObj.eating()
PersonObj.sleeping()
PersonObj.calculateAge()


