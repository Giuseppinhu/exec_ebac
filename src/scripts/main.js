AOS.init();

const eventDate = new Date("Jul 15, 2025 17:00:00");
const eventTimeStamp = eventDate.getTime();

const countHours = setInterval(function() {
    const now = new Date();
    const currentTimeStamp = now.getTime();

    const timeUntilEvent = eventTimeStamp - currentTimeStamp;

    const dayInMs = 1000 * 60 * 60 * 24;
    const hourInMs = 1000 * 60 * 60;
    const minuteInMs = 1000 * 60;
    const secondInMs = 1000;

    const daysUntilEvent = Math.floor(timeUntilEvent / dayInMs);
    const hoursUntilEvent = Math.floor((timeUntilEvent % dayInMs) / hourInMs);
    const minutesUntilEvent = Math.floor((timeUntilEvent % hourInMs) / minuteInMs);
    const secondsUntilEvent = Math.floor((timeUntilEvent % minuteInMs) / secondInMs);

    document.getElementById('timer').innerHTML = `${daysUntilEvent}d ${hoursUntilEvent}h ${minutesUntilEvent}m ${secondsUntilEvent}s`;

    if (timeUntilEvent < 0) {
        clearInterval(countHours);
        document.getElementById('timer').innerHTML = 'O Aniversário Acabou! 😞';
    }
}, 1000);
