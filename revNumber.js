a=123
rev=0
rem=0
while(a>0){
rem=a%10
rev=rev*10+rem
a=parseInt(a/10)
}
console.log(rev);