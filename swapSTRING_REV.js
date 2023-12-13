function swapEachCharacter(str){
  var result = str.split("").map(item => (item ===item.toUpperCase() ? item.toLowerCase() :
              item.toUpperCase())).join("");

console.log(result);
}

var str = "The Quick Brown Fox";
console.log(str);
swapEachCharacter(str);