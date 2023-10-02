// exption handling
// 1.try      :statement that might cause error
// 2.catch    :statement that need to be exicution when  error occur
// 3.finally  :statement that need to be executed in both causes

exp = "10*2+5"
console.log('exption handling');
try{
    const result = eval(exp)
    console.log("result:",result);
}
catch{
    console.log('error in eval statement')
}
finally{console.log('task complete');}