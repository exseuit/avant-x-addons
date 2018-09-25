// fibosearch.js

// let searchSuggestionsTop = "<? php $vartop = function() {return \"80px\"; } ?>";


// window.onload = setSearchSuggestions();
const btnMenuSearch = document.getElementsByClassName('menu-search')[0];
const searchForm = document.getElementsByClassName('search-block')[0].getBoundingClientRect();


btnMenuSearch.addEventListener("click", setSearchSuggestions);


function setSearchSuggestions() {
  setTimeout(50);
  const searchSuggestions = document.getElementsByClassName("dgwt-wcas-suggestions-wrapp")[0];

  searchSuggestions.style.width = `${Math.round(searchForm.width)}px`;
  searchSuggestions.style.left = `${Math.round(searchForm.left)}px`;
  searchSuggestions.style.removeProperty("top");
}

function name(params) {

}
