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
    clearActiveStatus()
    el.setAttribute("class", "navChild active");
    contentContainer.innerHTML = getHtmlCont("projects");
    createProjList(document.getElementsByClassName("personalSelect")[0].children[1],22, 1, "<br>Ticketing system for a local computer store. Eased their workflow and enabled backups.");
    createProjList(document.getElementsByClassName("personalSelect")[0].children[1],18, 1, "<br>Installation script for pwnpi that simplified the installation process. The community found the installation process complicated.");
    createProjList(document.getElementsByClassName("personalSelect")[0].children[1],17, 1, "<br>Pulls flight data form flightaware for use with phpVMS. This project was done for the flight simulation community, who found it very useful.");
    createProjList(document.getElementsByClassName("personalSelect")[0].children[1],10, 1, "<br>A startup idea that was built as a concept for a school project.");
    createProjList(document.getElementsByClassName("personalSelect")[0].children[1],2, 1, "<br>Device tree for the Samsung Galaxy S4-LTE-A. This was used for compiling custom operating systems.");
    createProjList(document.getElementsByClassName("personalSelect")[0].children[1],7, 1, "<br>Kernel for the Samsung Galaxy S4-LTE-A. This was also used for the compilation of custom operating system, as well as tweaking clockspeed of the CPU.");
    for(var i = 0; getPopularProjects(projectsList).length > i; i++) {
        createProjList(document.getElementsByClassName("mostPop")[0].children[1], getPopularProjects(projectsList)[i]);
    }
}

function pgAbout(el) {
    clearActiveStatus()
    el.setAttribute("class", "navChild active");
    contentContainer.innerHTML = getHtmlCont("about");
    getBday();
}

function pgContributions(el) {
    clearActiveStatus()
    el.setAttribute("class", "navChild active");
    contentContainer.innerHTML = getHtmlCont("contributions");
}

function pgContact(el) {
    clearActiveStatus()
    el.setAttribute("class", "navChild active");
    contentContainer.innerHTML = getHtmlCont("contact")
}

function pgIdeas(el) {
    clearActiveStatus()
    el.setAttribute("class", "navChild active");
    contentContainer.innerHTML = getHtmlCont("ideas");
}
