setInterval(() => {
    let time = new Date();

    let minutes = time.getMinutes() * 6;
    let hours = time.getHours() * 30 + Math.round(minutes / 12);
    let seconds = time.getSeconds() * 6;

    document.querySelector(".secondHandWrapper").style.transform = `rotate(${seconds}deg)`
    document.querySelector(".minuteHandWrapper").style.transform = `rotate(${minutes}deg)`
    document.querySelector(".hourHandWrapper").style.transform = `rotate(${hours}deg)`
}, 1000);