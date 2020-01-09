window.onload = function() {

    if(!window.navigator.standalone || !window.matchMedia('(display-mode: standalone)').matches) {
        document.body.innerHTML = '<div style="background: red; padding: 10%; "><p style="font-size: 6em; margin: unset; text-align: center;">Instructions</p></div><div style=" color: white; font-size: 3em; padding: 10%;"><p>For best experience (and because I could not figure out how the fullscreen function works in IOS), <span style="color: lime; font-weight: bolder;">save the site to your home screen and launch it from there.</span><p>You will continue to see this message until you do so.</p><p>Made by Rami Abou Zahra, All rights reserved.</p></p></div></div>';
    }
    else {
        createModal('<div style="background: red; padding: 10%; "><p style="font-size: 6em; margin: unset; text-align: center;">Warning!</p></div><div style=" color: white; font-size: 3em; padding: 10%;"><p>By continuing, you are hereby solely responsible for any consequences when using this online site. <p>I take no responsibility whatsoever. This shall only be used for development and or learning purposes. </p><p>Made by Rami Abou Zahra, All rights reserved.</p></p></div><button onclick="closeModal(this)" style="margin: auto; display: block; width: 90%; height: 10%; font-size: 5em; font-weight: bold; color: green; ">ACCEPT</button></div>');
        document.body.setAttribute("style", "opacity: 1;");
    }
};

function createModal(modalContent) {
    var modalContainer = document.createElement("div");

    modalContainer.setAttribute("class", "modalContainer");
    modalContainer.setAttribute("style", "position: absolute; top: 0; left: 0; background: black; z-index: 999; width: " + window.innerWidth + "px; height: " + window.innerHeight + "px;");

    modalContainer.innerHTML = modalContent;

    document.body.appendChild(modalContainer);
}

function closeModal(modalEl) {
    modalEl.parentElement.parentElement.removeChild(modalEl.parentElement);
}