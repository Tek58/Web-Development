let acc1 = {
    balance : 1000,
    accNumber : 10003265646
}
let acc2 = {
    balance : 10000,
    accNumber : 12002561656
}


var choice = parseInt(prompt("what operation do you want to perform: \n 1 Deposite \n 2 Withdrawal \n 3 Check Balance \n 4 Transfer"))
var amount
function inp(choice){
    if (choice == 1 || choice == 2 || choice == 4 ){
        amount = parseInt(prompt("Enter amount"))
        if (choice == 1){
            alert(deposite(amount))
        }
        else if (choice == 2){
            alert(Withdrawal(amount))
        }
        else{
            alert(transfer(amount))
        }
    }
    else if (choice == 3){
        alert(checkBalance())
    }
    else{
        return "Invalid Input"
    }
}
acc1.balance = 1000;
var account 
// Deposit, Balance, Withdrawal[with rules of amount one is allowed to withdraw], Transfer

function deposite(amount){
    acc1.balance = acc1.balance + amount
    return ("Your account has been deposited with " + (amount) + " birr")
}
function transfer(account, amount){
    account = parseInt(prompt("Enter the account you want to transer: "))
    acc1.balance = acc1.balance - amount
    acc2.balance = acc2.balance + amount
    return ("You have transfered " + (amount) + " birr to " + (acc2.accNumber))
}
function Withdrawal(amount){
    let limit = 300
    if (acc1.balance > amount && acc1.balance - amount < 300){
        acc1.balance = acc1.balance - amount 
        return ("Your account has been credited with " + (amount) + " birr")
    }
    else if (acc1.balance < amount){
        return ("Your balance is inceficient to withdraw form")
    }
    else {
        return ("you have passed the allowed withdrawal limit")
    }
}
function checkBalance(){
    return ("Your Balance is " + (acc1.balance) + " birr")
}
(function() {
    inp(choice);
    console.log("**************************************************************")
    console.log("Your Balance is" + (acc1.balance) + "birr")
    console.log("**************************************************************")
})();