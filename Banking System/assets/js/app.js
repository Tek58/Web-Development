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
var balance = 0;
var account 
// Deposit, Balance, Withdrawal[with rules of amount one is allowed to withdraw], Transfer

function deposite(amount){
    balance = balance + amount
    return ("Your account has been deposited with " + (amount) + " birr")
}
function transfer(account, amountTransfer){
    account = parseInt(prompt("Enter the account you want to transer: "))
    balance = balance - amount
    return ("You have transfered " + (amountTransfer) + " birr to " + (account))
}
function Withdrawal(amount){
    let limit = 300
    if (balance > amount && balance - amount < 300){
        balance = balance - amount 
        return ("Your account has been credited with " + (amount) + " birr")
    }
    else if (balance < amount){
        return ("Your balance is inceficient to withdraw form")
    }
    else {
        return ("you have passed the allowed withdrawal limit")
    }
}
function checkBalance(){
    return ("Your Balance is " + (balance) + " birr")
}
(function() {
    inp(choice);
    console.log("**************************************************************")
    console.log("Your Balance is" + (balance) + "birr")
    console.log("**************************************************************")
})();