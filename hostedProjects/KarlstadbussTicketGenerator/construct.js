window.onload = function() {
    createModal('<div style="background: #282828; padding: 10%; "><p style="font-size: 6em; font-weight: bolder; margin: unset; text-align: center;">Nyheter</p></div><div style="font-size: 3em; padding: 10%;"><p>Karlstadbuss bad mig stänga ner denna sida... Sidan är tillsvidare stängd men ni kan gärna surfa runt på min portfolio sida<a href="https://razerz.github.io"> här.</a></p><p>Made by Rami Abou Zahra, All rights reserved.</p></p></div><button class="acceptBtn" onclick="redir()">Attans</button></div>');
    randomGradientOnload();
};

function redir() {
    window.location = "https://razerz.github.io/";
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function createModal(modalContent) {
    var modalContainer = document.createElement("div");

    modalContainer.setAttribute("class", "modalContainer");
    modalContainer.setAttribute("style", "position: absolute; top: 0; left: 0; background: #212121; z-index: 999; width: " + window.innerWidth + "px; height: " + window.innerHeight + "px; color: white; font-family: Comfortaa;");

    modalContainer.innerHTML = modalContent;

    document.body.appendChild(modalContainer);
}

function closeModal(modalEl) {
    modalEl.parentElement.parentElement.removeChild(modalEl.parentElement);
}

function randomGradientOnload() {
    var gradientElement = document.getElementsByClassName("gradientContainer")[0];
    var arrowsContainer = document.getElementsByClassName("arrowsContainer")[0];

    switch (getRandomInt(3)) {
        case 0:
            gradientElement.setAttribute("style", "background: linear-gradient(90deg, rgba(34,174,251,0.9) 29%, rgba(254,136,26,0.9) 67%);");
        break;
        case 1:
            gradientElement.setAttribute("style", "background: linear-gradient(90deg, rgba(0, 132, 237, 0.9) 20%, rgba(59, 162, 97, 0.9) 50%, rgba(190, 217, 0, 0.90) 65%);");
        break;
        case 2:
            gradientElement.setAttribute("style", "background: linear-gradient(90deg, rgba(32,174,250,0.9) 29%, rgba(253,45,157,0.9) 67%);");
        break;
    }

/*    switch (getRandomInt(2)) {
        case 0:
            arrowsContainer.setAttribute("style", "-webkit-transform: rotate(135deg); -moz-transform: rotate(135deg); -ms-transform: rotate(135deg); -o-transform: rotate(135deg); transform: rotate(135deg);");
        break;
        case 1:
            arrowsContainer.setAttribute("style", "-webkit-transform: rotate(45deg); -moz-transform: rotate(135deg); -ms-transform: rotate(45deg); -o-transform: rotate(45deg); transform: rotate(45deg);");
        break;
    }
 */
}
