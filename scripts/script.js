import data from "./data.js";

const hoverTexts = document.querySelectorAll(".category-hover-text");
const sliderImg = document.querySelector(".carousel-inner");

hoverTexts.forEach((aLink) => {
  // aLink.addEventListener("mouseover", ()=>{
  //     aLink.style.display = "none";
  // })

  aLink.addEventListener("mouseover", () => {
    aLink.style.display = "block";
  });
});


// main page carousel function 
sliderImg.innerHTML = data.pastry.items
  .map((img, index) => {
    // added index to add active class else carousel won't appear
    const isActive = index === 0 ? "active" : "";

    return `<div class="carousel-item ${isActive} carousel-img-sizing">
        <img src="${img.image}" class="d-block w-100" alt="${img.name}">
        </div>`;
  })
  .join("");
  // joined all strings else , will appear in the document

  // confetti code
  const confettiButton = document.querySelector('.confetti');
  const canvas = document.querySelector('.canvas');


  const jsConfetti = new JSConfetti()

  confettiButton.addEventListener('click', ()=>{
    jsConfetti.addConfetti({
      confettiColors: [
        '#395542', '#E1C16E', '#f1dab2', '#ff85a1', '#fbb1bd', '#7B3F00', 'white',
      ],
    })
  })

