var contentContainer = document.getElementsByClassName("contentContainer")[0];

function getHtmlCont(module) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "html/" + module + ".html", false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function pgProjects() {
    contentContainer.innerHTML = getHtmlCont("projects");
    for(var i = 0; getPopularProjects(projectsList).length > i; i++) {
        createProjList(document.getElementsByClassName("mostPop")[0].children[1], getPopularProjects(projectsList)[i]);
    }
}