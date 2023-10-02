for(row=1;row<=4;row++){
    str=''
    for(col=1;col<=7;col++){
        if(row==1||row==4||col==1||col==7||col-row==3||row+col==5){
            str=str+' *'
        }
        else{
            str=str+'  '
        }
    }
    console.log(str)
}