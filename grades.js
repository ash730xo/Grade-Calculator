'use strict'

function getGrade(grade) {
    let counter = 0;
    if (counter >= 97 ) {
        console.log("You got an A+ ")

    }
     else if (counter <= 96 && counter >= 93) {
        console.log("You got an A ")
     }
     else if (counter <= 92 && counter >= 90) {
        console.log("You got an A- ")

     }
     else if (counter <= 89 && counter >= 87){
        console.log("You got a B+ ")

     }
     else if (counter <= 86 && counter >= 83) {
        console.log("You got a B ")

     }
     else if (counter <= 82 && counter >= 80) {
        console.log("You got a B- ")

     }
     else if (counter <= 79 && counter >= 77) {
        console.log("You got a C+ ")

     }

     else if (counter <= 76 && counter >= 73) {
        console.log("You got a C ")

     }
     else if (counter <= 72 && counter >= 70) {
        console.log("You got a C- ")

     }
     else if (counter <= 69 && counter >= 50) {
        console.log("You got a D ")

     }
     else {
        console.log("You got a F ")
     }

    return counter
}

module.exports = getGrade