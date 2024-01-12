export default function showContact(div){
  while(div.firstChild){
    div.removeChild(div.firstChild);
  }

  let headline = document.createElement('h1');
  headline.textContent = "How to Contact K's Cuisine";

  let message = document.createElement('p');
  message.textContent = "Send us a telepathic message and we'll get back to you when we have the bandwidth.";

  div.appendChild(headline);
  div.appendChild(message);
}