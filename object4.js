text="hai hello all hello world"
// w.a.p to print the word count from the given string
// output = {hai:1,hello:2,...}
a=text.split(" ")
// console.log(a)

var word={ }

for(let key of a){
if (key in word){
    word[key]+=1
}
else{
    word[key]=1
}
}
// console.log(word)

// arry methord 
wc={}
text.split(" ").forEach(element => {
    element in wc?wc[element]+=1:wc[element]=1
});
console.log(wc)