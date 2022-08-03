'use strict'

function getGrade(grade) {
    if (grade >= 97 ) {
        return ('A+')

    } 
    else if (grade <= 96 && grade >= 93) {
      return ('A')
     }
     else if (grade <= 92 && grade >= 90) {
      return ('A-')

     }
     else if (grade <= 89 && grade >= 87){
      return ('B+')

     }
     else if (grade <= 86 && grade >= 83) {
      return ('B')

     }
     else if (grade <= 82 && grade >= 80) {
      return ('B-')

     }
     else if (grade <= 79 && grade >= 77) {
      return ('C+')

     }

     else if (grade <= 76 && grade >= 73) {
      return ('C')

     }
     else if (grade <= 72 && grade >= 70) {
      return ('C-')

     }
     else if (grade <= 69 && grade >= 50) {
      return ('D')

     }
     else if (grade < 50 ){
      return ('F')
        console.log("You got a F ")
     }
      else {
         console.log("Did somethibg wrong. Try again!")
      
      }
}


module.exports = getGrade