// Default set to 25 minutes
// Add duration button event listener
let totalSeconds = 10;
//let remainingTime = totalSeconds;
let intervalHandle;

renderTime();

// Toggle audio on and off
function togglePlay (){
    let span = document.getElementById('play-btn');
    let audio = document.getElementById('soundtrack');
    // Switch to pause icon if current is play icon
    if (span.textContent.includes("play_circle")){
        document.getElementById("play-btn").innerHTML="stop_circle";
        while (totalSeconds != 0) {
            audio.play();
        }
        intervalHandle = setInterval(updateClock, 1000);
    }
    // Switch to play icon if current is pause icon
    else {
        document.getElementById("play-btn").innerHTML="play_circle";
        audio.pause();
        pauseClock();
    }
}

// Changes color theme
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

// const countdown = setInterval(function(){
//     if (totalSeconds == 0){
//         //if timer reaches 0, call clearInterval function
//         clearInterval(countdown);
//     }
//     let remainder = totalSeconds%60;
//     let seconds = remainder;
//     let minutes = (totalSeconds-remainder)/60;

//     displayMinutes = minutes < 10 ? "0" + minutes : minutes;
//     displaySeconds = seconds < 10 ? "0" + seconds : seconds;

//     //output the result into the element with id="timer-display"
//     document.getElementById("timer-display").textContent =  displayMinutes + ":" + displaySeconds;
//     //update total seconds remaining by 1
//     totalSeconds -=1;
// }, 1000);


// Decrements remaining time by 1
function updateClock () {
    renderTime();
    if (totalSeconds == 0) {
        clearInterval(intervalHandle);
        let audio = document.getElementById('soundtrack');
    } else {
        totalSeconds--;
    }
}

// Pause
function pauseClock () {
    renderTime();
    clearInterval(intervalHandle);
}

// Calculate and set minute and second variables to be rendered
function renderTime() {
    let remainder = totalSeconds%60;
    let seconds = remainder;
    let minutes = (totalSeconds-remainder)/60;
    if (totalSeconds == 0){
        //if timer reaches 0, call clearInterval function
        clearInterval(intervalHandle);
    }
    const renderMinutes = minutes < 10 ? "0" + minutes : minutes;
    const renderSeconds = seconds < 10 ? "0" + seconds : seconds;
    document.getElementById("timer-display").style.color = "white";
    document.getElementById("timer-display").textContent = renderMinutes + ":" + renderSeconds;
}

