import showHome from "./home.js";
import showMenu from "./menu.js";
import showContact from "./contact.js";

const contentDiv = document.querySelector("#content");
const tablinks = document.querySelectorAll(".tablinks");

for(let i=0; i<tablinks.length; i++){
  tablinks[i].addEventListener("click", function(e){
    
    tablinks.forEach((tab) => {
      tab.classList.remove("active");
    })

    switch(e.target.id){
      case "home":
        showHome(contentDiv);
        break;
      case "menu":
        showMenu(contentDiv);
        break;
      case "contact":
        showContact(contentDiv);
        break;
      default:
          showContact(contentDiv);
    };

    e.target.classList.add("active");
  });
}

document.querySelector("#home").click();




