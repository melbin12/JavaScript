var car={
    name:"renold",
    model:"Kiger",
    manfactuerd:"maruthi",
    price:"10 lakhs"
}
// display car name  and manufactured name
console.log(car ["manfactuerd"])
console.log(car ["name"])
console.log("--------------------------------------------------")
console.log(`car manufatured= ${car ["manfactuerd"]} \ncar name=${car["name"]}`) //template literalls
// check "model" key is present in car ,if present display it's value
"model" in car ? console.log(car["model"]):console.log("is not present")
console.log("--------------------------------------------------")

// add "varient" key to car with value as "manuel"
car["varient"]=["manual"]
console.log(car)
console.log("--------------------------------------------------")

// add another value "automatic" to "varient" key
car.varient.push("Automatic")
console.log(car)
console.log("--------------------------------------------------")
// add colour  key to the car with values as "red ","yello","white","black"

car["colour"]=["red","yellow","white","black"]
console.log(car)
console.log("--------------------------------------------------")
