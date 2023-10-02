// Two type of inheritance
// 1.classical inheritance - key word "extends"
// 2.object inheritance  - key word "__proto__"

// classical inheritance
// ----------------------------
prog74_oops4.js > Child
class Parent{
bike(){
console.log('bullet');
}
}
class Child extends Parent{
}
const obj = new Child()
obj.bike()