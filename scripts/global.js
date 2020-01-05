function getProjectList() {
    var projectReq = new XMLHttpRequest();
    projectReq.open("GET", "https://api.github.com/users/RAZERZ/repos", false);
    projectReq.send(null);
    var projectsArr = JSON.parse(projectReq.responseText);

    return projectsArr;
}

var projectsList = getProjectList();

function getPopularProjects(list) {
    var returnList = [];
    for(var i = 0; list.length > i; i++) {
        if(!list[i]['fork']) {
            if(list[i]['watchers'] > 0 || list[i]['forks'] > 0) {
                returnList.push(i);
            }
        }
    }

    return returnList;
}

function createProjList(parentElement, index) {
    var svgArr = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 31.49 31.49" style="enable-background:new 0 0 31.49 31.49;width: 7%;float: right;" xml:space="preserve"><path style="fill:#B5B5B5;" d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111  C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587  c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"></path></svg>';
    var listEl = document.createElement("li");
    var nameEl = document.createElement("span");
    var starsEl = document.createElement("span");
    var forksEl = document.createElement("span");
    var nameVal = document.createElement("span");
    var starsVal = document.createElement("span");
    var forksVal = document.createElement("span");
    var linkEl = document.createElement("a");

    var nameElInnerVal = document.createTextNode("Name: ");
    var starsElInnerVal = document.createTextNode("Stars: ");
    var forksElInnerVal = document.createTextNode("Forks: ");
    var starsValInnerVal = document.createTextNode(projectsList[index]['watchers']);
    var forksValInnerVal = document.createTextNode(projectsList[index]['forks']);

    nameEl.appendChild(nameElInnerVal);
    starsEl.appendChild(starsElInnerVal);
    forksEl.appendChild(forksElInnerVal);
    nameVal.appendChild(linkEl);
    starsVal.appendChild(starsValInnerVal);
    forksVal.appendChild(forksValInnerVal);
    linkEl.innerHTML = projectsList[index]['name'] + svgArr;

    nameEl.setAttribute("class", "projHeaders");
    starsEl.setAttribute("class", "projHeaders");
    forksEl.setAttribute("class", "projHeaders");
    linkEl.setAttribute("href", "https://github.com/RAZERZ/" + projectsList[index]['name']);

    listEl.appendChild(nameEl);
    listEl.appendChild(nameVal);
    listEl.appendChild(document.createElement("br"));
    listEl.appendChild(starsEl);
    listEl.appendChild(starsVal);
    listEl.appendChild(document.createElement("br"));
    listEl.appendChild(forksEl);
    listEl.appendChild(forksVal);
    listEl.appendChild(document.createElement("br"));

    parentElement.appendChild(listEl);

}