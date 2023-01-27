var timer = $("#timer");
var startButton = $("#startButton");
var stopButton = $("#stopButton");
var resetButton = $("#resetButton");
var roundButton = $("#roundButton");
var rounds = $("#rounds");
var intervalId;
var seconds = 0;
var minutes = 0;
var hours = 0;
var round = 1;

function updateTimer() {
    var hoursString;
    if (hours < 10) {
        hoursString = "0" + hours;
    } else {
        hoursString = hours;
    }

    var minutesString;
    if (minutes < 10) {
        minutesString = "0" + minutes;
    } else {
        minutesString = minutes;
    }

    var secondsString;
    if (seconds < 10) {
        secondsString = "0" + seconds;
    } else {
        secondsString = seconds;
    }

    var timeString = hoursString + ":" + minutesString + ":" + secondsString;
    $("#timer").text(timeString);
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
}

startButton.click(function() {
    intervalId = setInterval(updateTimer, 1000);
});

stopButton.on("click", function() {
    // console.log("hi");
    clearInterval(intervalId);
    seconds = 0;
    minutes = 0;
    hours = 0;
    round = 1;
    var allRounds = rounds.children();
    for (var i = 1; i < allRounds.length; i++) {

        console.log(allRounds);
        var minRound = $(allRounds[0]).text()
        var currentRound = $(allRounds[i]).text();
        if (currentRound < minRound) {
            minRound = currentRound;
        }
    }
    var minRoundLi = $("<li>");
    minRoundLi.text("best round time: " + minRound);
    rounds.append(minRoundLi);
});


resetButton.click(function() {
    clearInterval(intervalId);
    timer.text("00:00:00");
    seconds = 0;
    minutes = 0;
    hours = 0;
    round = 1;
    rounds.empty();
});

roundButton.click(function() {
    var roundTime = timer.text();
    var roundLi = $("<li>");
    // it need te get back to zero but if i give timer.text("00:00:00");in back object object
    roundLi.text("Round " + round + ": " + roundTime);
    rounds.append(roundLi);
    round++;
});