window.onload = function() {
    var isInWebAppiOS = (window.navigator.standalone == true);
    var isInWebAppChrome = (window.matchMedia('(display-mode: standalone)').matches);

    if(isInWebAppiOS === false && isInWebAppChrome === false) {
        //document.body.innerHTML = "";
        createModal('<div style="background: #282828; padding: 10%; "><p style="font-size: 6em; font-weight: bolder; margin: unset; text-align: center;">Instruktioner</p></div><div style="font-size: 3em; padding: 10%;"><h1 style="margin: unset; font-size: 1.5em;">iOS</h1><p>1. Öppna länken i Safari</p><p>2. Klicka på "dela" knappen.</p><p>3. Scrolla ner och klicka på "lägg till på hemskärmen"</p><h1 style="margin: unset; font-size: 1.5em;">Android</h1><p>1. Öppna länken i Chrome.</p><p>2. Klicka på de 3 plupparna i det högra hörnet.</p><p>3. Klick på "lägg till på startskärmen"</p></div></div>');
    }
    else {
        createModal('<div style="background: red; padding: 10%; "><p style="font-size: 6em; margin: unset; text-align: center;">Warning!</p></div><div style=" color: white; font-size: 3em; padding: 10%;"><p>By continuing, you are hereby solely responsible for any consequences when using this online site. <p>I take no responsibility whatsoever. This shall only be used for development and or learning purposes. </p><p>Made by Rami Abou Zahra, All rights reserved.</p></p></div><button onclick="closeModal(this)" style="margin: auto; display: block; width: 90%; height: 10%; font-size: 5em; font-weight: bold; color: green; ">ACCEPT</button></div>');
    }

    randomGradientOnload();
};

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

    switch (getRandomInt(4)) {
        case 0:
            gradientElement.setAttribute("style", "background: linear-gradient(90deg, rgba(34,174,251,0.9) 29%, rgba(254,136,26,0.9) 67%);");
        break;
        case 1:
            gradientElement.setAttribute("style", "background: linear-gradient(90deg, rgba(0, 132, 237, 0.9) 20%, rgba(59, 162, 97, 0.9) 50%, rgba(190, 217, 0, 0.90) 65%);");
        break;
        case 2:
            gradientElement.setAttribute("style", "background: linear-gradient(90deg, rgba(32,174,250,0.9) 29%, rgba(253,45,157,0.9) 67%);");
        break;
        case 3:
            gradientElement.setAttribute("style", "background: linear-gradient(90deg, rgba(255,136,27,0.9) 29%, rgba(129,16,194,0.9) 67%);");
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