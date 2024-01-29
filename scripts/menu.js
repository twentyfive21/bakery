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

    // Example usage
    const menuType = getQueryParam('q');
    if (menuType) {
      console.log('Menu type:', menuType);

    }

    console.log(data)