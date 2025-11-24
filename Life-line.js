let timer = {
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0,
    weeks: 0,
    months: 0,
    years: 0,
};

function updateTimer() {
    timer.seconds++;
    
    if (timer.seconds >= 60) {
        timer.seconds = 0;
        timer.minutes++;
    }
    if (timer.minutes >= 60) {
        timer.minutes = 0;
        timer.hours++;
    }
    if (timer.hours >= 24) {
        timer.hours = 0;
        timer.days++;
    }
    if (timer.days >= 7) {
        timer.days = 0;
        timer.weeks++;
    }
    if (timer.weeks >= 4) {
        timer.weeks = 0;
        timer.months++;
    }
    if (timer.months >= 12) {
        timer.months = 0;
        timer.years++;
    }
}

setInterval(updateTimer, 1000);
function getTimerString() {
    return `${timer.years} Years, ${timer.months} Months, ${timer.weeks} Weeks, ${timer.days} Days, ${timer.hours} Hours, ${timer.minutes} Minutes, ${timer.seconds} Seconds`;
}
module.exports = { getTimerString };
