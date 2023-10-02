// 2.object Inheritance
// -----------------------

belano={
    model:"hatch",
    varient:["automatic","manual"],
    manufactured:"maruthi"
}

glanza={
    manufactured:"toyota"
}

glanza.__proto__=belano
console.log(glanza.varient)