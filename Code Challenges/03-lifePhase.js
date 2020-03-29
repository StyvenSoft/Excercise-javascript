const lifePhase = age => {
    if(age >= 0 && age <= 3){
       return 'baby'
    } else if (age >= 4 && age <= 12) {
       return 'child'
    } else if (age >= 13 && age <= 19) {
       return 'teen'
    } else if (age >= 20 && age <= 64) {
       return 'adult'
    } else if (age >= 65 && age <= 140) {
       return 'senior citizen'
    } else if (age < 0 || age > 140) {
       return 'This is not a valid age'
    }
}

// Uncomment the line below when you're ready to try out your function
console.log(lifePhase(5)) //should print 'child'