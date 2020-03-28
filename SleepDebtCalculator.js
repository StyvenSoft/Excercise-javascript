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
    return getSleepHours('monday');
}

// Obtenga las horas de sueño ideales que prefiera

const getIdealSpleepHours = () => {
    const idealHours = 9;
    return idealHours * 7;
}

// Calcule la deuda de sueño, si la hay.

console.log(getSleepHours('monday'))
//console.log(getIdealSpleepHours());
console.log(getActualSleepHours());
