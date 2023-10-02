number=[10,30,40,50,40,40,20,10,60,10,10,50]
// w.a.p. number of count in numbers
num={}
for(let y of number){
    if(y in num){
        num[y]+=1
    }else{
        num[y]=1
    }
}
console.log(num)

console.log("----------------------------------------")
rr={}
number.forEach(element => {
    element in rr?rr[element]+=1:rr[element]=1
});
console.log(rr)