import data from './data.js';

const hoverTexts = document.querySelectorAll(".category-hover-text");

hoverTexts.forEach((aLink)=>{
    // aLink.addEventListener("mouseover", ()=>{
    //     aLink.style.display = "none";
    // })

     aLink.addEventListener("mouseover", ()=>{
        aLink.style.display = "block";
    })
})

