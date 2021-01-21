var comulator = new Array();
var lenNums;
var x;
var y;
var choice = prompt("what operation do you want to perform: \n 1 Addition \n 2 Subtraction \n 3 Multiplication \n 4 Division \n 5 Maximum \n 6 Minimum \n 7 Average \n 8 power")
function inp(choice){
    if (parseInt(choice) == 1 || parseInt(choice) == 3 || parseInt(choice) == 5 || parseInt(choice) == 6 || parseInt(choice) == 7){
        lenNums = prompt("How many numbers do you want to operate on: ")
        for (let i = 0; i < parseInt(lenNums); i++) {
            comulator[i] = parseInt(prompt("Enter number " + (i + 1)));
        }

        if(choice === "1"){
            alert(addition(comulator));
        }
        else if (choice === '3') {
            alert(multiplication(comulator));
        }
        else if (choice === '5') {
            alert(Max(comulator));
        }
        else if (choice === '6') {
            alert(Min(comulator));
        }
        else if (choice === '7') {
            alert(average(comulator));
        }
    }
    else if (parseInt(choice) == 2 || parseInt(choice) == 4 || parseInt(choice) == 8){
        x = parseInt(prompt("Enter the first number: "));
        y = parseInt(prompt("Enter the second number: "));
    
        if (choice === '2'){
            alert(subtraction(x,y));
        }
        else if (choice === '4'){
            alert(division(x,y));
        }
        else if (choice === '8'){
            alert(power(x,y));
        }
    }
    else if (parseInt(choice) != 1 || parseInt(choice) != 2 || parseInt(choice) != 3 || parseInt(choice) != 4){
        alert("Invalid Input");
    }
}



function addition(comulator) {
    let summ = 0;
    for (let i = 0; i < parseInt(lenNums); i++) {
        summ = summ + comulator[i]
    }
    return summ;
}
function Max(comulator){
    let maximum = comulator[0];
    for (let i = 0; i < parseInt(lenNums); i++) {
        if (comulator[i] > maximum){
            maximum = comulator[i]
        }
    }
    return maximum;
}
function Min(comulator){
    let minimum = comulator[0]
    for (let i = 0; i < parseInt(lenNums); i++) {
        if (comulator[i] < minimum){
            minimum = comulator[i]
        }
    }
    return minimum
}
function average(comulator){
    let sumation = addition(comulator)
    let count = 0
    for (let i = 0; i < parseInt(lenNums); i++) {
        count = count + 1
    }
    let Ave = sumation / count
    return Ave
}
function power(x, y){
    return x ** y
}

function subtraction(x,y) {
    let diff = x - y
    return diff
}
function multiplication(comulator) {
    let multi = 1
    for (let i = 0; i < parseInt(lenNums); i++) {
        multi = comulator[i]  *  multi
    }
    return multi
}
function division(x,y) {
    let div = 0
    if (y != 0){
        div = x / y
    }
    else{
        return ("Invalid Input")
    }
    return div
}

(function() {
    inp(choice);
    // console.log("**************************************************************")
    // console.log("What operations Do you want to perform:  ")
    // console.log("1-> Addition");
    // console.log("2-> Subtraction");
    // console.log("3-> Multiplication");
    // console.log("4-> Division");
    // console.log("**************************************************************")
})();