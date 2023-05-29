const menuHamburguer = document.getElementById("menu-hamburguer");

menuHamburguer.addEventListener("click", toggle);

function toggle() {
    var menu = document.getElementById("menu-mobile");
    if (menu.style.display === "none") {
      menu.style.display = "flex";
    } else {
      menu.style.display = "none";
    }
  }
