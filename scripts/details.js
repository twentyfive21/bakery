import data from './data.js';


  function getQueryParam(key) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(key);
  }

  const menuType = getQueryParam('q');
  const foodItem = getQueryParam('f');

const findFoodItem = data[menuType].items.find(item => item.name === foodItem);


const detailImage = document.getElementById("detail-image");
const detailHeader = document.getElementById("detail-menu-header");
const detailIngredients = document.getElementById("detail-ingredients");



detailImage.setAttribute("src", findFoodItem.image);
detailHeader.textContent = findFoodItem.name;
detailIngredients.textContent = findFoodItem.ingredients;

if (findFoodItem) {
  console.log('Found item:', findFoodItem);
}
