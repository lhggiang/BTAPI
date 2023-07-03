const formEl = document.querySelector("form");
const inputEl = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
function searchImages() {
  document
    .getElementById("search-button")
    .addEventListener("blur", function () {
      inputData = inputEl.dataset;
      const url = `http://api.giphy.com/v1/gifs/search?q=car&api_key=uUoo44gxTt9ELySz22hMtzK70nDnRD4k`;
      fetch(url)
        .then((res) => res.json())
        .then((res) => console.log(res));
    });
}
searchImages();
//  .then((res) => {
//         res.map((result) => {
//           document.getElementsByTagName("img").innerHTML = result;
//         });
//       });
