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
var currTime = (date.getHours()<10?'0':'') + date.getHours() + ":" + (date.getMinutes()<10?'0':'') + date.getMinutes();
var currDate = date.getFullYear() + "-" + (date.getMonth()<10?'0':'') + (date.getMonth()+1) + "-" + (date.getDate()<10?'0':'') + date.getDate();
var validTime = (date.getHours()<10?'0':'') + date.getHours() + ":" + (parseInt((date.getMinutes()<10?'0':'') + date.getMinutes())-1);
var endTime = (parseInt((date.getHours()<10?'0':'') + date.getHours())+1) + ":" + (date.getMinutes()<10?'0':'') + date.getMinutes();

currDateEl.innerHTML = currDate + " " + validTime;
currTimeEl.innerHTML = currTime;
expiredDateEl.innerHTML = currDate + " " + endTime;
