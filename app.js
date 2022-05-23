let totalSeconds = 120;

function displayTime(){
    const countdown = setInterval(function(){
        if (totalSeconds == 0){
            //if timer reaches 0, call clearInterval function
            clearInterval(countdown);
        }
        let remainder = totalSeconds%60;
        let seconds = remainder;
        let minutes = (totalSeconds-remainder)/60;
    
        displayMinutes = minutes < 10 ? "0" + minutes : minutes;
        displaySeconds = seconds < 10 ? "0" + seconds : seconds;
    
        //output the result into the element with id="timer-display"
        let x = document.getElementById("timer-display").innerHTML =  displayMinutes + ":" + displaySeconds;
        //update total seconds remaining by 1
        totalSeconds -=1;
    }, 1000);
}
