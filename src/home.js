import Pic from './restaurant.png';

export default function showHome(div){

  while(div.firstChild){
    div.removeChild(div.firstChild);
  }

  let headline = document.createElement("h1");
  headline.textContent = "K's Cuisine";

  let restaurantImg = document.createElement("img");
  restaurantImg.src = Pic;
  restaurantImg.width = "600";

  let restaurantText = document.createElement("p");
  restaurantText.textContent = "This restaurant is the best restaurant in the entire world. Or arguably, the universe. Why, you ask? I'll tell you why. Because it has my name on it."

  div.appendChild(headline);
  div.appendChild(restaurantImg);
  div.appendChild(restaurantText);
}