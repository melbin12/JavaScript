
class Landing{
    // properties
    dataBase={
        "millan":{username:"Milan",password:"12"},
        "manu":{username:"Manu",password:"13"},
        "ashin":{username:"Ashin",password:"14"},
        "ajin":{username:"Ajin",password:"15"},

    }

// method
// to addd data to local storage
// saveData(){
//     localStorage.setItem("database",jSON.stringify(this.dataBase))
// }

// getdata into data base 
// getdata(){
//     localStorage.getItem("database")
// }
// register
register(){
    let user =reguser.value 
    console.log(user);
    let pswd = regpswd.value
    console.log(pswd);
    // this.getdata()
    if(user=="" || pswd==""){
        alert("please Enter a valied input")
    }else{
        if(user in this.dataBase){
            alert("User already Existing")
        }else{
            this.dataBase[user]={username:user,password:pswd}
            console.log(this.dataBase);
            alert('Registration Successfully')

            // // navigation login
            // window.location="login.html"
        }
    }
}
}

const obj = new  Landing()

