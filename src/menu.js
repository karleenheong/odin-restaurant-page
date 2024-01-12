export default function showMenu(div){
  while(div.firstChild){
    div.removeChild(div.firstChild);
  }

  let headline = document.createElement('h1');
  headline.textContent = "K's Cuisine Special Menu";

  let subheading = document.createElement('h2');
  subheading.textContent = "Mains";

  let menuText1 = document.createElement('p');
  menuText1.textContent = "Roasted metal from Mercury";

  let menuText2 = document.createElement('p');
  menuText2.textContent = "Happy gas from Venus";

  let menuText3 = document.createElement('p');
  menuText3.textContent = "Dinosaur soup from Earth";

  div.appendChild(headline);
  div.appendChild(subheading);
  div.appendChild(menuText1);
  div.appendChild(menuText2);
  div.appendChild(menuText3);
}