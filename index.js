// const mainHeading = document.getElementById("main-heading");
// mainHeading.textContent = "Fruit World";
// mainHeading.style.color = "orange";
// const headerDiv = document.getElementById("header")
// headerDiv.style.backgroundColor = 'green'
// headerDiv.style.borderBottom = "3px solid orange"

// const basket = document.getElementById("basket-heading")
//   basket.style.color = "green"

// const thank = document.getElementById("thanks");
// thank.innerHTML = "<p>Please visit us again</p>"


const para = document.createElement('p');

const subHeading = document.createElement('h3');

const subHeadingText = document.createTextNode("Buy high quality organic fruits online")

const paraText = document.createTextNode("Total Fruits: 4");

para.appendChild(paraText);

subHeading.appendChild(subHeadingText)

const divs = document.getElementsByTagName('div');

const firstDiv = divs[0]

const secondDiv = divs[1];

firstDiv.appendChild(subHeading)

const fruits = document.querySelector('.fruits');

secondDiv.insertBefore(para, fruits);

para.id = 'fruits-total';

subHeading.style.fontStyle = "italic"
