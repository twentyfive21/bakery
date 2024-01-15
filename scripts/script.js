import data from './data.js';

const categoryLink = document.querySelectorAll(".category-image-card");


categoryLink.forEach((item)=>{
item.addEventListener("mouseover",()=>{
    console.log("hi")
})
})