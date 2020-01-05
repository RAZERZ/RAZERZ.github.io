window.onload = function () {
    headerLoop();
    setInterval(headerLoop, 16000);
    function headerLoop() {
        setTimeout(function () {
            whoAmI("Who am I?")
        }, 1000);
        setTimeout(function () {
            whoAmI("Software Developer")
        }, 4000);
        setTimeout(function () {
            whoAmI("Aviation Addict")
        }, 7000);
        setTimeout(function () {
            whoAmI("Language Enthusiast")
        }, 10000);
        setTimeout(function() {
            whoAmI("Rami Abou Zahra")
        }, 13000);
    }
};

function whoAmI (text) {
    var whoAmIEl = document.getElementsByClassName("whoAmI")[0];
    whoAmIEl.setAttribute("class", "whoAmI softwareDev");
    setTimeout(function ()  {
        whoAmIEl.innerHTML = text;
        setTimeout(function() {whoAmIEl.setAttribute("class", "whoAmI");}, 1500);
    }, 1000);
}