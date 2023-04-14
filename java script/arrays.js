//array method
let array = [1,"madhu",3,true]
console.log(array);

//push method:it is used to add the elements of the last
array.push(1000,"bye")
console.log(array);

//pop method:it is used to remove the elements of the last
let removedElem = array.pop()
console.log(removedElem);

console.log(array);

//unshift method:it is used to add the elements of the first
array.unshift(1000,"bye")
console.log(array);

//shift method:it is used to add the elements of the first
let rem = array.shift()
console.log(rem);

console.log(array);

//splice method:it is used to add & remove the elements of the array

//deleting the element from the array 
array.splice(3,2)
console.log(array);

//adding the element to the array
array.splice(1,0,"new1",true,"new2")
console.log(array)

//add and remove the elements from the array
let remove = array.splice(2,2,"new3","new4")
console.log(array);
console.log(remove);

//inedxOf
let li =array.indexOf('new3')
console.log(li);

let i2 = array.indexOf(false)
console.log(i2);

//slice
let s1 = array.slice(2,6)
console.log(s1);

//join
let j = array.join('  $  ')
console.log(j);





let array1 = [1,true,"madhu",false,"pavan",2]
for(let i= 0;i<array1.length;i++)
{
    if(typeof (array1[i])==="number")
    console.log(array1[i])
}

let a=prompt("enter the value");
if(a%2==0)
{
    console.log("even="+a)
}
else{
    console.log("odd="+a)
}

