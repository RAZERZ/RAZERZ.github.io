var headerContainer = document.getElementById("header");
var contentContainer = document.getElementById("content");
var headerPointer = headerContainer.getElementsByTagName("h1")[0];

function setSiteContent(file) {

    contentContainer.innerHTML = '<div class="dotLoading"><span class="dotLoading a">.</span><span class="dotLoading b">.</span><span class="dotLoading c">.</span></div>';

    if(window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    }
    else {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlHttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            contentContainer.innerHTML = this.responseText;
            var scripts = contentContainer.getElementsByTagName("script");
            for(var i=0; scripts.length > i; i++ ) {
                eval(scripts[i].innerText);
            }
        }
    };

    xmlHttp.open("GET", "modules/" + file + ".html", true);
    xmlHttp.send();

}

function loadingAnimation(pEl) {
    pEl.innerText = "";
    var container = document.createElement("div");
    var alpha = document.createElement("span");
    var bravo = document.createElement("span");
    var charlie = document.createElement("span");

    container.appendChild(alpha);
    container.appendChild(bravo);
    container.appendChild(charlie);
    alpha.appendChild(document.createTextNode("."));
    bravo.appendChild(document.createTextNode("."));
    charlie.appendChild(document.createTextNode("."));
    pEl.appendChild(container);

    container.setAttribute("class", "dotLoading");
    alpha.setAttribute("class", "dotLoading a");
    bravo.setAttribute("class", "dotLoading b");
    charlie.setAttribute("class", "dotLoading c");
}

window.addEventListener("load",function(){contentContainer.innerHTML=setSiteContent("init")});
headerPointer.addEventListener("click",function(){contentContainer.innerHTML=setSiteContent("init")});

