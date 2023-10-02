products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

//1. print product name only
for(let key of products)
console.log(key.pid)
console.log("----------------------------------------------")
for(let key of products)
console.log(key["pName"])
console.log("----------------------------------------------")

console.log(products.map(a=>a.pName).forEach(element => {
    console.log(element)
}));
console.log("----------------------------------------------")
//2. print all mobile details whose display is lcd
wc={}
for(let key of products){
 displ=key.display
//  console.log(displ)
 if(displ=='lcd'){
  console.log(key)
 }
}
console.log("----------------------------------------------")
//3. print 5g mobile phone name
console.log("print 5g mobile phone name")
G={}
for(let key of products){
Nbrand=key.band
if(Nbrand=="5g"){
    console.log(key)
}
}
console.log("----------------------------------------------")
console.log("print 5g mobile phone name")
products.filter(data=>data.band =="5g").forEach(el=>console.log(el))
console.log("----------------------------------------------")

//4. sort mobile based on price
console.log("sort mobile based on price")
products.sort((d1,d2)=>d1.price-d2.price).forEach(el=>console.log(el["pName"]))
console.log("----------------------------------------------")
//5. print costly mobile
console.log("print costly mobile")
cspro=products.reduce((p1,p2)=>p1.price>p2.price?p1:p2)
console.log(cspro)
console.log("----------------------------------------------")

//6. print low cost mobile
console.log("print costly mobile")
cspro=products.reduce((p1,p2)=>p1.price<p2.price?p1:p2)
console.log(cspro)
console.log("----------------------------------------------")