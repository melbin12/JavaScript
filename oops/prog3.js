class bank{
    // not variable is object
    accDetails={
        1000:{acno:1000,username:'joli',password:'joli12',balance:50000},
        1001:{acno:1001,username:'soli',password:'soli12',balance:5000},
        1002:{acno:1002,username:'toli',password:'toli12',balance:10000},
        1003:{acno:1003,username:'moli',password:'moli12',balance:6000}

    }

    // method to validate account
      validateAccount(accno){
        return accno in this.accDetails?true:false
      }
    // method to authenticate account
    authenticate(accno,pass){
        if(this,this.validateAccount(accno)){
            if(this.accDetails[accno].password==pass){
                console.log('authentication success full')
            }else{
                console.log('invalid password')
            }
        }
        else{
            console.log('invalid account')
        }
    }
    // method to check the balance of a given account
    balance(accno,pass){
        if(this,this.validateAccount(accno)){
            if(this.accDetails[accno].password==pass){
                console.log(`current acc no ${accno} balance=${this.accDetails[accno].balance}`)
            }else{
                console.log('invalid password')
            }
        }
        else{
            console.log('invalid account')
        }
    }
    // method to transfer fund
    
    transfer(fromaccno,toaccno,amount){
        if(this.validateAccount(fromaccno)&& this.validateAccount(toaccno)){
            if(this.accDetails[fromaccno].balance>=amount){
                console.log(`intial balance of ${fromaccno} is ${this.accDetails[fromaccno].balance}\n
                intial balance of ${toaccno} is ${this.accDetails[toaccno].balance}`);
                console.log(`amount transfer ${amount}`);
                this.accDetails[fromaccno].balance-=amount
                this.accDetails[toaccno].balance-=amount
                console.log(`intial balance of ${fromaccno} is ${this.accDetails[fromaccno].balance}\n
                intial balance of ${toaccno} is ${this.accDetails[toaccno].balance}`);

            }else{
                console.log('insufficint balance')
            }
        }
    else{
        console.log('invalid account')
    }
    }
}

const user1=new bank() //classine ullile methords classinte purath acces cheyan
console.log(user1.validateAccount(1000)?'valid account':'invalid account')

const accauth=new bank()
accauth.authenticate(1000,'joli12')
console.log("..........................................")
user1.balance(1000,'joli12')
console.log("..........................................")
user1.transfer(1000,1001,1000)