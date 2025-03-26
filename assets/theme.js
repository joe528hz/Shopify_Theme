// HEADER SEARCH
document.addEventListener("DOMContentLoaded", function() {
  const searchIcon = document.getElementById("search-icon");
  const searchContainer = document.getElementById("search-container");
  const searchClose = document.getElementById("search-close");

  searchIcon.addEventListener("click", function() {
      searchContainer.style.display = "block";
  });

  searchClose.addEventListener("click", function() {
      searchContainer.style.display = "none";
  });
});
