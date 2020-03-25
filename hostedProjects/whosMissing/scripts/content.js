var headerContainer = document.getElementById("header");
var contentContainer = document.getElementById("content");
var headerPointer = headerContainer.getElementsByTagName("h1")[0];

function getSite(module) {
    var ajaxReq = new XMLHttpRequest();
    ajaxReq.open("GET", "modules/" + module + ".html", false);
    ajaxReq.send();
    return ajaxReq.responseText;
}

window.addEventListener("load",function(){contentContainer.innerHTML=getSite("init")});
headerPointer.addEventListener("click",function(){contentContainer.innerHTML=getSite("init")});