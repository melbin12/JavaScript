
class Landing{
    // properties
    dataBase={
        "Milan":{username:"Milan",password:"12"},
        "Manu":{username:"Manu",password:"13"},
        "Ashin":{username:"Ashin",password:"14"},
        "Ajin":{username:"Ajin",password:"15"},

    }
//method
    //to add local storage
    saveData(){
       if(this.dataBase) {
        localStorage.setItem("database",JSON.stringify(this.dataBase))
        }
    }
    //get data
    getData(){
        this.dataBase=JSON.parse(localStorage.getItem("database"))
        console.log(this.dataBase);
    }
    //register
    register(){
       let user= reguser.value
       console.log(user);
       let pswd = regpswd.value
       console.log(pswd);
       this.getData()
       if(user=="" || pswd==""){
        alert("please Enter valied in put")
       }else{
        if (user in this.dataBase){
            alert('user Allready Exist')
        }else{
            this.dataBase[user]={username:user,password:pswd}
            console.log(this.dataBase)
            alert("registration successfully ")
            this.saveData()

            //navigate login page
            window.location="login.html"
        }

       }
    }

    //for login
    login(){
        let user1 = loguser.value
        console.log(user1);
        let pswd1=logpswd.value
        console.log(pswd1);
        if(user1 in this.dataBase){
            if(this.dataBase[user1].password==pswd1){
                alert('Login successful')
                localStorage.setItem("user",user1)
                //navigation
                window.location="home.html"
            }else{
                alert('incorrect user name or passwrd')
            }

        }else{
            alert("User not found")
        }
    }

}

const obj = new  Landing()

obj.getData() //at first see that database