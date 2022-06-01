function updateTime(){
    const secondsDegree = ((new Date().getSeconds() / 60) * 360) + 90;
    const minuteDegree = ((new Date().getMinutes() / 60) * 360) + 90;
    const hourDegree = ((new Date().getHours / 60) * 12) + 90;

    const secondHand = document.querySelector('.second-hand');
    secondHand.style.transform = `rotate(${minuteDegree}deg)`;

    const minuteHand = document.querySelector('.min-hand');
    minuteHand.style.transform = `rotate(${secondsDegree}deg)`;

    const hourHand = document.querySelector('.hour-hand');
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

// The setInterval() method calls a function at specified intervals (in milliseconds).
setInterval(updateTime, 1000);