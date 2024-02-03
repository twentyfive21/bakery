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

  // In URLs, the ampersand (&) is a reserved character and is commonly used
  // as a delimiter between different parameters. If you want to include special
  // characters, like the ampersand, in a URL parameter value, you should URL encode it.
  
  selectedMenuItems.innerHTML = data[menuType]?.items?.map((item)=>{
    const encodedItemName = encodeURIComponent(item.name); 

    return `<div class="col category-image-card">
              <a href="details.html?q=${menuType}&f=${encodedItemName}" class="text-center">
              <img src="${item.image}" class="rounded" alt="${item.name}" />
              <p>${item.name}</p>
              </a>
            </div>`
  }).join('')







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

