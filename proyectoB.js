//Calendiario con turnos para una peluqueria

//parte de meses sacado de internet, no sabia como hacerlo

const actualYear = 2022;
const locale = 'es';


const weekdays = [ ...Array(7).keys()];
const intlWeekday = new Intl.DateTimeFormat(locale, { weekday: 'long' });

const weekDaysNames = weekdays.map(weekDayIndex => {
    const date = new Date(2022,7, weekDayIndex + 1);
    const weekDaysName = intlWeekday.format(date);
    console.log(weekDaysName);
    return weekDaysName
})
 

const months = [...Array(12).keys()];
const intl = new Intl.DateTimeFormat(locale, { month: 'long' });

const calendar = months.map(monthKey => {
    const monthName = intl.format(new Date(actualYear, monthKey));

    const nextMonthIndex = monthKey + 1;
    const daysOfMonth = new Date(2022, nextMonthIndex, 0).getDate();

    return {
        monthName,
        daysOfMonth,
        startsOn: 0
    }
})

console.log(calendar)


