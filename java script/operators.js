document.write("<h2>arthematic operator</h2>")

let a = 100
let b = 200

let sum =a+b
document.write(a+" + "+b+" = "+sum);
document.write("<br>")

let c = 1100
let d = 200

let sub =c-d
document.write(c+" - "+d+" = "+sub);
document.write("<br>")

let e1=20+20/2*2
document.write(e1);
document.write("<br>")


let e2=10+20/2*2-10/2+4
document.write(e2);
document.write("<br>")




document.write("<h2>relational operator</h2>")
document.write("<br>")
a = 10
b = 20
let f = "30"

let r1 = a>b
document.write(r1);
document.write("<br>")

let r2 = a<b
document.write(r2);
document.write("<br>")

let r3 = a == c
document.write(r3);
document.write("<br>")



document.write("<h2>logical operator</h2>")
let exp = (10 === 10) && (10!=="10") || (10==="10")
document.write(exp);
document.write("<br>")

let q = (10 === 20) && (10!=="10") || (10<="5")
document.write(q);
document.write("<br>")




document.write("<h2>bitwise operator</h2>")
let w = 6 & 2
document.write(w)
document.write("<br>")

a = 4
b = 3
let e = a | b
document.write(e)
document.write("<br>")

a = 7
b = 3
let r = a & b
document.write(r)
document.write("<br>")

let t = 198 | 398
document.write(t)
document.write("<br>")


document.write("<h2>assignment operator</h2>")
a = 121
let u = (a+=1)
document.write(u)
document.write("<br>")

let i = (a+=1)
document.write(i)
document.write("<br>")

a=2
let o = (a-=1)
document.write(o)
document.write("<br>")

a =100
let p = (a*=10)
document.write(p)
document.write("<br>")


document.write("<h2>unanary operator</h2>")
a = 12
b = 10

let j = a++ + ++b + a++ - --c
document.write("c = "+c)
document.write("<br>")

document.write("a = "+a)
document.write("<br>")

document.write("b = "+b)
document.write("<br>")



document.write("<h2>turnary operator</h2>")
a = 20;
b = 10;

(a === b)?document.write("it is equal") : document.write("it is not equal");
document.write("<br>")



document.write("<h2>types operator</h2>")
a = 100

let n = typeof(a);
document.write(n)
document.write("<br>")

b = "madhu"

let mn = typeof(b);
document.write(mn)
document.write("<br>")

c = false

let bn = typeof(c);
document.write(bn)
document.write("<br>")
































