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
const nutritionValues = document.querySelectorAll("#nutrition-values");



detailImage.setAttribute("src", findFoodItem.image);
detailHeader.textContent = findFoodItem.name;
detailIngredients.textContent = findFoodItem.ingredients;

nutritionValues[0].textContent = findFoodItem.nutrition.calories
nutritionValues[1].textContent = findFoodItem.nutrition.fat
nutritionValues[2].textContent = findFoodItem.nutrition.fatS
nutritionValues[3].textContent = findFoodItem.nutrition.tfat
nutritionValues[4].textContent = findFoodItem.nutrition.carbs
nutritionValues[5].textContent = findFoodItem.nutrition.sugar
nutritionValues[6].textContent = findFoodItem.nutrition.protein

if (findFoodItem) {
  console.log('Found item:', findFoodItem.nutrition);
}

