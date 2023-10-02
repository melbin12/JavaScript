// polymorphisum
// poly=many
// morphisum = from
// 2 types 
// --------------
// 1. function/methord ovrloding
// 2. function/methord overriding
// --------------

// 1)methord overloding - methord with same name and diffrent number arguments/parameter

class A{
    methodea(){
        console.log("hai buddy")
    }

    methodea(a,b){
        this.ad=a
        this.df=b
        console.log(a+b)
    }
}

const obj= new A
 obj.methodea()
//  obj.methodea(2,3)