var d = document.documentElement;

function openFullscreen() {
    if (d.requestFullscreen) {
        d.requestFullscreen();
    } else if (d.mozRequestFullScreen) { /* Firefox */
        d.mozRequestFullScreen();
    } else if (d.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        d.webkitRequestFullscreen();
    } else if (d.msRequestFullscreen) { /* IE/Edge */
        d.msRequestFullscreen();
    }
}

window.onload = function() {
    openFullscreen();
    alert("Hey");
    document.body.setAttribute("style", "opacity: 1;");

};

var countDownEl = document.getElementsByClassName("countDown")[0];
var time = 3539;
var footer = document.getElementsByTagName("footer")[0];
var timeGlassChartStyle = document.createElement("style");

footer.appendChild(timeGlassChartStyle);

setInterval(function() {
    var hours = Math.floor(time/3600);
    var minutes = Math.floor(time/60);
    var seconds = time - minutes * 60;
    countDownEl.innerHTML = "00:" + minutes + ":" + seconds;
    time--;
    timeGlassChartStyle.innerHTML = '.timeGlassChart::before { content: ""; display: block; margin-left: 50%; height: 100%; border-radius: 0 100% 100% 0 / 50%; background: white; -webkit-transform-origin: left; -moz-transform-origin: left;  -ms-transform-origin: left; -o-transform-origin: left; transform-origin: left; -webkit-transform: rotate(0.0turn);  -moz-transform: rotate(0.0turn);  -ms-transform: rotate(0.0turn);  -o-transform: rotate(0.0turn); transform: rotate(' + (1-(time/3600))+ 'turn);}';
}, 1000);

var currDateEl = document.getElementsByClassName("currDate")[0].children[0];
var currTimeEl = document.getElementsByClassName("currTime")[0].children[0];
var expiredDateEl = document.getElementsByClassName("expiredDate")[0].children[0];
var date = new Date();
var currTime = ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);
var currDate = date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2);
var validTime = ("0" + date.getHours()).slice(-2) + ":" + (("0" + date.getMinutes()).slice(-2) -1);
var endTime = (parseInt(("0" + date.getHours()).slice(-2)) +1) + ":" + (("0" + date.getMinutes()).slice(-2) -1);

currDateEl.innerHTML = currDate + " " + validTime;
currTimeEl.innerHTML = currTime;
expiredDateEl.innerHTML = currDate + " " + endTime;
