// methord overloding 
class A{
    methoda(){
        console.log('inside A')
    }
}

class B extends A{
    methoda(){
        console.log('inside B')
    }
}

const obj = new B
obj.methoda()



