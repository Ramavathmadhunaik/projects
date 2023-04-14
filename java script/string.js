document.write("<h1>string</h1>");
let s1 = "javascript"

console.log(s1);
let l1 = s1.length
console.log(l1);

//toUpperCase() method: it is used to convert from lowercase to uppercase letters
let u1 = s1.toUpperCase()
console.log(u1);//JAVASCRIPT

//NOTE: it is not affecting to original string
console.log(s1);//javascript

console.log("hai".toUpperCase())


let s2 = "JSPIDERS"
//toLowerCase() method: it is used to convert from uppercase to lowercase letters
let l2 = s2.toLowerCase()
console.log(l2)//jspiders

//NOTE: it is not affecting to original string
console.log(s2);//JSPIDERS

//startsWith() method: it will check weather the string is starting with particular characteror not,&it will get the result in boolean value
let m1 ="madhunaik"
let sw1 = m1.startsWith('j')
console.log(sw1);

let sw2 = m1.startsWith('h',3)
console.log(sw2);

//startsWith() method: it will check weather the string is ending with particular characteror not,&it will get the result in boolean value
let ew1 = m1.endsWith('k')
console.log(ew1);

let ew2 = m1.endsWith('u',5)
console.log(ew2);

//charAt() mathod:returns the charecter at the specified index
let c1 = m1.charAt(1)
console.log(c1);

//charCodeAt() method:returns the ASCII value of the charecter at the specified index
let c2 = m1.charCodeAt(1)
console.log(c2);

