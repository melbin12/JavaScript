// w.a.p to print the first Rcursive ltter =A
patern="ABCABBCCA"
character=Array.from(patern)
console.log(character)

obj={}

for(let item of character){
    if(item in obj){
        console.log("first recursive lette=",item)
        break
    }
    else{
        obj[item]=1
    }
}