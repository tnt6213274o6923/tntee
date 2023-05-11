const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the form from submitting

  const query = searchInput.value;
  const searchUrl =   `https://www.google.com/search?q= ${query}`; // replace with your preferred search engine URL

  window.location.href = searchUrl; // redirect the user to the search engine with the query as a parameter
});
const icon = document.querySelector('img');
icon.addEventListener('click', () => {
  // do something when the icon is clicked
});
