// determinar cuántas horas de sueño dormiste cada noche de la semana.

const getSleepHours = day => {
    switch (day) {
        case 'monday':
        return 8;
        case 'Tuesday':
        return 8;
        case 'Wednesday':
        return 8;
        case 'Thursday':
        return 8;
        case 'Friday':
        return 8;
        case 'Saturday':
        return 8;
        case 'Sunday':
        return 8;
      }
}
// Obtenga el total de horas de sueño que realmente durmió
const getActualSleepHours = () => {
    return getSleepHours('monday') +
           getSleepHours('Tuesday') +
           getSleepHours('Wednesday') +
           getSleepHours('Thursday') +
           getSleepHours('Friday') +
           getSleepHours('Saturday') +
           getSleepHours('Sunday');
}

// Obtenga las horas de sueño ideales que prefiera

const getIdealSleepHours = () => {
    const idealHours = 9;
    return idealHours * 7;
}

// Calcule la deuda de sueño, si la hay.

const calculateSleepDebt = () => {
const actualSleepHours = getActualSleepHours();
const idealSleepHours = getIdealSleepHours();

if(actualSleepHours === idealSleepHours){
    console.log(`the perfect amount of sleep ${idealSleepHours}`)
    } else if (actualSleepHours > idealSleepHours){
        console.log(`sleep than needed.`)      
    }else if (actualSleepHours < idealSleepHours){
        console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.'); 
    }
}

console.log(getSleepHours('monday'))
//console.log(getIdealSpleepHours());
console.log(getActualSleepHours());
console.log(getIdealSleepHours());

console.log(calculateSleepDebt());
