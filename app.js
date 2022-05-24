let totalSeconds = 120;

//displays timer countdown of minutes and seconds
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

//color theme button function
function themeChange(id){
    //retrieve theme button id
    let theme = id;
    switch(theme){
        case 'lofi-theme-btn':
            //set lofi theme hex color as a string
            let lofiColor = "#CEF1BD";
            //update color
            document.body.style.backgroundColor = lofiColor;
            break;
        case 'rock-theme-btn':
            //set rock theme hex color as a string
            let rockColor = "#110074";
            //update color
            document.body.style.backgroundColor = rockColor;
            break;
    }
}