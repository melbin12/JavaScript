//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'good day',70,0]

]
//1. disply all the product name

products.map(pro=>pro[1]).forEach(element => {console.log(element)});
console.log('------------------------------------------------');
//2.disply product whose price < rs.50
products.filter(pro=>pro[2]<50).forEach(element => {console.log(element[1])});
console.log('------------------------------------------------');

//3.print price of orio
oreo=products.find(pro=>pro[1]=='oreo')
console.log(oreo[2]);
console.log('------------------------------------------------')

//4. print costly product name

costly=products.reduce((pro1,pro2)=>pro1[2]>pro2[2]?pro1:pro2)
console.log(costly[1])
console.log('------------------------------------------------');

//5. disply out of stock product

products.filter(pro=>pro[3]<=0).forEach(element => {console.log(element[1])});
console.log('------------------------------------------------');

//6.sort products based on stock in decending order
products.sort((pro1,pro2)=>pro1[3]-pro2[3]).forEach(element=>{console.log(element[1])})
console.log('------------------------------------------------');

//7.print product having maximum availeble stock

stock1=products.reduce((pro1,pro2)=>pro1[3]>pro2[3]?pro1:pro2)
console.log(stock1[1])
console.log('------------------------------------------------');

//8.is there any product in the range of  10 to 30 rupees

range=products.some(pro=>pro[2]>10 && pro[2]<30)
console.log(range?'yes':'no');
console.log('------------------------------------------------');

//8.is there any product in the range of  10 to 30 rupees
products.filter(pro=>pro[2]>=10 && pro[2]<=30).forEach(element => {console.log(element[1])});
console.log('------------------------------------------------');