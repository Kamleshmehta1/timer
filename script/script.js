var startingMinutes = 0;

var time = startingMinutes * 60;

let element = document.querySelector("#timer");

refreshIntervalId = setInterval(updateCountDown, 1000);

function updateCountDown() {
    let Minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;
    Minutes = Minutes < 10 ? '0' + Minutes : Minutes;

    element.innerHTML = Minutes + ":" + seconds;
    time++;

    // time = time < 0 ? 0 : time; 
    console.log(time);
    if (time == 600) { //stop the setInterval whe time = 0 for avoid negative time
        clearInterval(refreshIntervalId);
    }
}