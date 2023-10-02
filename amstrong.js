a=153
rem=0
sum=0
temp=a
while(a>0){
    rem=a%10
    sum=sum+rem**3
    a=parseInt(a/10)
    
}
if(sum==temp){
console.log('amstrong')
}else{
    console.log('not amstrong')
}