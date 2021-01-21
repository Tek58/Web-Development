var firstName
var lastName
var age
var job

firstName = prompt('Enter Your First Name')
lastName = prompt('Enter Your Last Name')
job = prompt('What is Your Profession ?')
age = prompt('Enter Your Age')


let tempAge;
let isEligibleToVote;

numberOfFamily = prompt("Number of family: ");

for (let i = 0; i < parseInt(numberOfFamily); i++) {
    familyMember[i] = prompt("Your Family  Members " + (i + 1));
}

function ageCalc(birthYear) {
    return new Date().getFullYear() - birthYear;
}
tempAge = parseInt(age);

if (tempAge >= 18) {
    isEligibleToVote = true;
} 
else {
    isEligibleToVote = false;

//bmi 
let calcBmi = function(weight, height) {

    let bmi = weight / (height * height);

    bmi = Number(bmi.toFixed(1));

    console.log("Your Bmi is : " + bmi);
    if (bmi < 18.5)
        console.log("Your are : Underweight");
    else if (bmi >= 18.5 && bmi <= 24.9)
        console.log("Your are : Normal");
    else if (bmi >= 25.0 && bmi <= 29.9)
        console.log("Your are : Overweight");
    else if (bmi >= 30.0)
        console.log("Your are : Obese");
}

(function() {

    console.log("Here is your Profile ")
    console.log("Full Name: " + firstName + " " + lastName);
    console.log("Profession : " + job);
    console.log("Age : " + tempAge + " " + "years old");
    console.log("Is Eligible to Vote : " + isEligibleToVote);

    console.log("Family Members ");


    familyMember.forEach(function(member, index) {
        console.log("Family Member  " + (index + 1) + " : " + member);
    });

    calcBmi(weight, height);

})();