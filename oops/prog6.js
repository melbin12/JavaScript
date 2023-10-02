// multiple Inheritance
class A{
    methoda(){
        console.log("method A")
    }
}
class B extends A{
    methodb(){
        console.log("method B")
    }
}

class C extends B{
    methodc(){
        console.log("method C")
    }
}
const obj= new C 

obj.methodc()
obj.methodb()
obj.methoda()
