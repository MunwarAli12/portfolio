
function logPageLoadTime() {
    var loadTime = performance.now() - startTime;
    console.log("Page load time: " + loadTime + " milliseconds");
}

var startTime = performance.now();

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM content loaded");
});

window.addEventListener("load", function(event) {
    console.log("Page fully loaded");
    logPageLoadTime(); // Calculate and log the page load time
});
