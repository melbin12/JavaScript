employee={
    name:'melb',
    idno:22,
    place:'kochi',
    home:'mangott'
}

console.log(employee)
console.log(employee.name)
console.log(employee['idno'])

// All key from given object

for (let key in employee){
    console.log(key)
}
//All Value form given object
for (let key in employee){
    console.log(employee[key])
}
// w.a.p. All key vale from given object
for(let key in employee){
    console.log(`${key}:${employee[key]}`)
}