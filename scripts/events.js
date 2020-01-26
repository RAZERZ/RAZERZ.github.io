var contentContainer = document.getElementsByClassName("contentContainer")[0];

function getHtmlCont(module) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "html/" + module + ".html", false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function clearActiveStatus() {
    var navChildren = document.getElementsByClassName("navChild");

    for(var i = 0; navChildren.length > i; i++) {
        navChildren[i].setAttribute("class", "navChild");
    }
}

function pgProjects(el) {
    clearActiveStatus();
    el.setAttribute("class", "navChild active");
    contentContainer.innerHTML = getHtmlCont("projects");

    var hostedProjectsEl = document.getElementsByClassName("hostedProjects")[0].children[1];
    hostedProjectsEl.innerHTML = '<li><span class="projHeaders">Name: </span><span style="display: inline-block; width: 80%;"><a href="hostedProjects/KarlstadbussTicketGenerator">Karlstadbuss Ticket Generator<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 31.49 31.49" style="enable-background:new 0 0 31.49 31.49;width: 25px;right: 0;position: absolute;" xml:space="preserve"><path style="fill:#B5B5B5;" d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111  C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587  c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"></path></svg></a></span><br><span class="projHeaders">Description:</span><span>Generates Fake Karlstadbuss Tickets. For educational purposes only</span></li>';

    var personalSelectEl = document.getElementsByClassName("personalSelect")[0].children[1];
    createProjList(personalSelectEl,23, 1, "<br>Ticketing system for a local computer store. Eased their workflow and enabled backups.");
    createProjList(personalSelectEl,19, 1, "<br>Installation script for pwnpi that simplified the installation process. The community found the installation process complicated.");
    createProjList(personalSelectEl,18, 1, "<br>Pulls flight data form flightaware for use with phpVMS. This project was done for the flight simulation community, who found it very useful.");
    createProjList(personalSelectEl,10, 1, "<br>A startup idea that was built as a concept for a school project.");
    createProjList(personalSelectEl,2, 1, "<br>Device tree for the Samsung Galaxy S4-LTE-A. This was used for compiling custom operating systems.");
    createProjList(personalSelectEl,7, 1, "<br>Kernel for the Samsung Galaxy S4-LTE-A. This was also used for the compilation of custom operating system, as well as tweaking clockspeed of the CPU.");
    for(var i = 0; getPopularProjects(projectsList).length > i; i++) {
        createProjList(document.getElementsByClassName("mostPop")[0].children[1], getPopularProjects(projectsList)[i]);
    }
}

function pgAbout(el) {
    clearActiveStatus();
    el.setAttribute("class", "navChild active");
    contentContainer.innerHTML = getHtmlCont("about");
    getBday();
}

function pgContributions(el) {
    clearActiveStatus();
    el.setAttribute("class", "navChild active");
    contentContainer.innerHTML = getHtmlCont("contributions");
}

function pgContact(el) {
    clearActiveStatus();
    el.setAttribute("class", "navChild active");
    contentContainer.innerHTML = getHtmlCont("contact")
}

function pgIdeas(el) {
    clearActiveStatus();
    el.setAttribute("class", "navChild active");
    contentContainer.innerHTML = getHtmlCont("ideas");
}
