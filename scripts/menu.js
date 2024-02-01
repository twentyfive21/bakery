import data from './data.js';

//*Make a function that takes one param.
//* window.location.search: This gets the query string part of the URL ?q=breads).
//* new URLSearchParams(queryString): This creates a new URLSearchParams object, which allows you to easily work with query parameters.
//*urlParams.get(key): This retrieves the value associated with the specified key from the query parameters
//* if you call getQueryParam('q'), it will return the value of the 'q' parameter in the current URL.



    function getQueryParam(key) {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      return urlParams.get(key);
    }
  const menuType = getQueryParam('q');
  if (menuType) {
    console.log('Menu type:', menuType);

    const menuHeader = document.querySelector('.menu-page-hero');
    const menuHeaderText = document.querySelector('.menu-page-heading');
  // Use data[menuType] instead of data.menuType
// Dot notation expects a constant property name,
// while square bracket notation allows dynamic keys.

    menuHeader.style.backgroundImage = `url(${data[menuType]?.headerImage})`;
    menuHeaderText.innerText = data[menuType]?.items[0]?.category;
  }

  // function for selected menu items 
  const selectedMenuItems = document.querySelector('.selected-menu-box');
  
  selectedMenuItems.innerHTML = data[menuType]?.items?.map((item)=>{
    return `<div class="col category-image-card">
              <div class="text-center">
              <img src="${item.image}" class="rounded" alt="${item.name}" />
              <p>${item.name}</p>
              </div>
            </div>`
  }).join('')

