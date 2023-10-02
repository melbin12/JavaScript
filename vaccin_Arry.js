//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]
//1. district having Highest +ve case 
pos=covid_data.reduce((pro1,pro2)=>pro1[2]>pro2[2]?pro1:pro2)
console.log(pos[1])
console.log('-------------------------------------------')
//2. district having Highest 1st dose vaccine
pos=covid_data.reduce((pro1,pro2)=>pro1[5]>pro2[5]?pro1:pro2)
console.log(pos[1])
console.log('-------------------------------------------')
//3. district having lowest death rate
pos=covid_data.reduce((pro1,pro2)=>pro1[3]<pro2[3]?pro1:pro2)
console.log(pos[1])
console.log('-------------------------------------------')
//4. sort data with +ve case in descending order
covid_data.sort((pro1,pro2)=>pro1[2]-pro2[2]).forEach(element => {
  console.log(element[1])  
});

console.log('-------------------------------------------')
//5. is district with +ve cases > 15000

range=covid_data.some(pro=>pro[2]>1500)
console.log(range?'yes':'no');
console.log('------------------------------------------------');
//6. sort data with 1st dose vaccine
covid_data.sort((co1,co2)=>co1[5]-co2[5]).forEach(el=>{console.log(el[1])})
console.log('------------------------------------------------');
console.log('------------------------------------------------');

//7. Print Thrissur details
thri=covid_data.find(co=>co[1]=='Thrissur')
console.log(thri)
console.log('------------------------------------------------');
//8. Print total number of positive cases
total=covid_data.map(co=>co[2]).reduce((co1,co2)=>co1+co2)
console.log(total)
console.log('------------------------------------------------');
//9. Print total number of curred cases
total=covid_data.map(co=>co[4]).reduce((co1,co2)=>co1+co2)
console.log(total)
console.log('------------------------------------------------');
//10. Print curred cases in Idukki
p=covid_data.find(co=>co[1]=='Idukki')
console.log(p[4])
console.log('------------------------------------------------');
