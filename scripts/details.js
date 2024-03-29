import data from './data.js';

function getQueryParam(key) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(key);
}

const menuType = getQueryParam('q');
const foodItem = getQueryParam('f');

const findFoodItem = data[menuType].items.find((item) => item.name === foodItem);

const detailImage = document.getElementById('detail-image');
const detailHeader = document.getElementById('detail-menu-header');
const mobileDetailHeader = document.getElementById('moblie-detail-header');
const detailIngredients = document.getElementById('detail-ingredients');
const nutritionValues = document.querySelectorAll('#nutrition-values');

detailImage.setAttribute('src', findFoodItem.image);
detailHeader.textContent = findFoodItem.name;
mobileDetailHeader.textContent = findFoodItem.name;
detailIngredients.textContent = findFoodItem.ingredients;

const foodItemNutrition = Object.values(findFoodItem.nutrition);

// Use forEach directly on the NodeList
nutritionValues.forEach((node, index) => {
  node.textContent = foodItemNutrition[index];
});

// Enable/Disable Subscribe button based on form validity
   document.getElementById('newsletterForm').addEventListener('input', function () {
        const form = this;
        const subscribeBtn = document.getElementById('subscribeBtn');
        subscribeBtn.disabled = !form.checkValidity();
    });

    document.getElementById('subscribeBtn').addEventListener('click', function () {
        const form = document.getElementById('newsletterForm');
        if (form.checkValidity()) {
            form.reset(); // Clear form values if the form is valid
        }
    });