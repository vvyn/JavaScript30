function setDate() {
    var now = new Date();
    var secondsDeg = (now.getSeconds() * 6) + 90;
    document.querySelector(".second-hand").style.transform = `rotate(${secondsDeg}deg)`;
    
    var minutesDeg = (now.getMinutes() / 60 * 360) + 90;
    document.querySelector(".min-hand").style.transform = `rotate(${ minutesDeg}deg)`;
    
    var hoursDeg = (now.getHours() / 12 * 360) + 90;
    document.querySelector(".hour-hand").style.transform = `rotate(${hoursDeg}deg)`;
}

setInterval(setDate, 1000);
