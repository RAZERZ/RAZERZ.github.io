for(var i = 0; getPopularProjects(projectsList).length > i; i++) {
    createProjList(document.getElementsByClassName("mostPop")[0].children[1], getPopularProjects(projectsList)[i]);
}