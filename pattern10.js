for(let i=4; i>=1;i--){
    let str=''
    for(let j = 1; j<=2*4-1;++j){
        if(i+j == 4+1||(i+4==j+1)||i==4)
        str+='A ';
    else
    str+='  ';
    }
    console.log(str);
}

for(let i = 2; i<=4;i++){
    let str=''
    for(let j = 1; j<=2*4-1; ++j){
        if(i+j==4+1||(i+4==j+1)||i==4)
        str+='A ';
        else
        str+='  ';
    }
    console.log(str);
}