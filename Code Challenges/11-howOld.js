
const howOld = (age, year) => {
  
const currentYear = new Date().getFullYear();
    
const yearDifference = year - currentYear;
const calculatedAge = age + yearDifference;
      
if(year > currentYear){
    return `You will be ${calculatedAge} in the year ${year}`;
} else if (calculatedAge <= 0) {
    return `The year ${year} was ${-calculatedAge} years before you were born`;    
} else {
    return `You were ${calculatedAge} in the year ${year}`;        
    } 
}
console.log(howOld(25, 2025));