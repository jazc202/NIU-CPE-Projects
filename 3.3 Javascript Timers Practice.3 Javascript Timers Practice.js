//NOTE: I know this is not how the solution says to do this, but I don't want to just copy the solution code and learn nothing in the process, so I hope the way I've done it should work; it's the way that makes the most sense to me.  

//I can't figure out how to get it to run to test it myself.  The page doesn't load when I try to run it on the localhost; it just gets hung up, so I've probably done something very wrong somewhere.  I would be extremely grateful if someone would tell me if this would work in theory and also why it's not working in practice/if there's an easier way to test javascript.


// Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should log “DONE!” and stop.

function countdown(num) {
    function timerFunction(num) { //Make this it's own function so it doesn't have to be reinitialized on every iteration.
        num -= 1;
        console.log(num);
    };

    while (num > 0) {
        setInterval(timerFunction, 1000);
    };

    clearInterval(timerFunction); //is this how you do this?
    console.log("DONE!");
};


//Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and console.log the number of tries it took before we found a number greater than .75.

function randomGame() {
    let count = 0;
    let n;
    function rand () { //Make this a function so it doesn't have to be reinitialized on every iteration.
        n = Math.random();
        count += 1;
    };
    if (n <= 0.75) {
        setInterval(rand, 1000)
    }
    else {
        clearInterval(rand)
        console.log(count)
    }
}