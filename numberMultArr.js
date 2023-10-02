numbers=[[10,20,[96,100]],[14,28,69],[11,21,[8,55,41]],[76,45,31]]
// flat
// find the largest number
console.log(numbers.flat(Infinity).reduce((num1,num2)=>num1>num2?num1:num2));
console.log('-----------------------------------------------')
// find the number grater than 50
numbers.flat(Infinity).filter(num=>num>50).sort((num1,num2)=>num1-num2).forEach(element => {console.log(element)});
console.log('-----------------------------------------------')
// find the smallest number
console.log(numbers.flat(Infinity).reduce((num1,num2)=>num1>num2?num2:num1));
console.log('-----------------------------------------------')
// find the total number
total=numbers.flat(Infinity).reduce((num1,num2)=>num1+num2)
console.log(total)