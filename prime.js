num=5
count=0
for(i=1;i<=num;i++){
    temp=num%i;
    if(temp==0){
        count++
    }
}

    if(count == 2){
        console.log('prime number')
    }
    else{
        console.log('not prime')
    }