chara="you are  very bUtifull"
vowels=['a','e','i','o','u','A','E','I','O','U']
AA=chara.split('')
// console.log(AA)

for(let char of AA){
    if(vowels.includes(char)){
        // console.log(char)
    }
}

// using Arryform one line code

Array.from(chara).filter(char=>vowels.includes(char)).forEach(el=>console.log(el))