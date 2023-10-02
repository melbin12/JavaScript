student={
    sname:'max',
    stroll:23,
    sclass:'phy'
}
console.log(student)

// add address to the object

"staddress" in student ?console.log("present")
:student["staddress"]="kochi"
console.log(student)
console.log("-------------------------------------------")
// 2nd methord
Object.assign(student,{'sage':20})
console.log(student)
console.log("-------------------------------------------")
Object.assign(student,{"Vaccinated":true})
console.log(student)
console.log("-------------------------------------------")
// update njumber
student["stroll"]+=4
console.log(student)
console.log("-------------------------------------------")

// udate name
student["sname"]="arjun"
console.log(student)

// delete
console.log(delete student.sclass)
console.log(student)
console.log("-------------------------------------------")




