const arr1 = [1,2,34,564,3]
const arr2 = [...arr1]
console.log(arr2)


let [first,second,...rest] = arr1;

console.log("first" ,first);
console.log("second" ,second);
console.log("other remaingin",rest);