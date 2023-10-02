weatherData=[
    {district:'Thrissur',weather:32},
    {district:'Kottayam',weather:29},
    {district:'Palakkad',weather:34},
    {district:'Ernakulam',weather:33},
    {district:'Thrissur',weather:29},
    {district:'Kottayam',weather:30},
    {district:'Palakkad',weather:32},
    {district:'Ernakulam',weather:31}
]
//print district with its highest temparature
//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}

Hweth={}

for(let item of weatherData){
    dis=item.district
    cweth=item.weather
   if(dis in Hweth){
    old=Hweth[dis]
    if(old>cweth){
        Hweth[dis]=old
    }else{
        Hweth[dis]=cweth
    }
   }
   else{
    Hweth[dis]=cweth
   }
}
console.log(Hweth)
 
console.log("++++++++++++++++++++++++++++++++######################################")
