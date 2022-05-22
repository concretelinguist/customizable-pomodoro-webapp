// function countdownTimerBegin(){
//     const duration = 2;

//     //convert total duration into minutes and seconds
//     let totalSeconds = duration * 60;
//     let remainder = totalSeconds%60;
//     let seconds = remainder;
//     let minutes = (totalSeconds-remainder)/60;
//     displayMinutes = minutes < 10 ? "0" + minutes : minutes;
//     displaySeconds = seconds < 10 ? "0" + seconds : seconds;

//     //output the result into the element with id="timer-display"
//     document.getElementById("timer-display").innerHTML =  displayMinutes + ":" + displaySeconds;

//     //decrement time
//     totalSeconds -=1;

// }

// function that displays the current time
function displayTime(totalSeconds){
    let remainder = totalSeconds%60;
    let seconds = remainder;
    let minutes = (totalSeconds-remainder)/60;

    displayMinutes = minutes < 10 ? "0" + minutes : minutes;
    displaySeconds = seconds < 10 ? "0" + seconds : seconds;

    //output the result into the element with id="timer-display"
    let x = document.getElementById("timer-display").innerHTML =  displayMinutes + ":" + displaySeconds;
}

