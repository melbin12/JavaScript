class student{
//    property
  sname
  sclass
  sroll

//   constructor
   constructor(stname,stclass,stroll){
    this.sname=stname
    this.sclass=stclass
    this.sroll=stroll
    this.display()
   }
   //method
   display(){
    console.log(`student name is ${this.sname}`)
   }
}
const obj =new student('loli','V!','12')
const obj1 =new student('holi','V3','14')
const obj2 =new student('joli','V4','15')

