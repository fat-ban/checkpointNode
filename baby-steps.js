/*console.log(process.argv )*/
/*let a =Number(process.argv[2])
let b =Number(process.argv[3])
let c =Number(process.argv[4])
let sum = a+b+c*/

//console.log("sum = ",sum)
var result = 0;
for (i = 2; i < process.argv.length; i++) {
  result += Number(process.argv[i]);
}

console.log(result);