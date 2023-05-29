about(); // Faz o site iniciar no about

function about(){ // Ao clicar botao sobre
    var element = document.getElementById("about");
    element.style.display = "";
    var element = document.getElementById("social-mobile");
    element.style.display = "";
    var element = document.getElementById("languages");
    element.style.display = "";
    var element = document.getElementById("projects");
    element.style.display = "none";
    var element = document.getElementById("experience");
    element.style.display = "none";
}

function projects(){ // Ao clicar botao projetos
    var element = document.getElementById("about");
    element.style.display = "none";
    var element = document.getElementById("social-mobile");
    element.style.display = "none";
    var element = document.getElementById("languages");
    element.style.display = "none";
    var element = document.getElementById("projects");
    element.style.display = "";
    var element = document.getElementById("experience");
    element.style.display = "none";
}

function experience(){ // Ao clicar botao experiencias
    var element = document.getElementById("about");
    element.style.display = "none";
    var element = document.getElementById("social-mobile");
    element.style.display = "none";
    var element = document.getElementById("languages");
    element.style.display = "none";
    var element = document.getElementById("projects");
    element.style.display = "none";
    var element = document.getElementById("experience");
    element.style.display = "";
}

