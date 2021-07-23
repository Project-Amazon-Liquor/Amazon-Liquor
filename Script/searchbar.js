const API_BASE_URL = "https://amazonliquor.herokuapp.com";
const URL = `${API_BASE_URL}/products`;
loadFeatureCards();
function loadFeatureCards() {
  fetch(URL)
    .then((response) => response.json())
    .then((products) => {
      for (let index = 0; index <= 25; index++) {
        let { _id, Brand, Retail_Price, URL } = products[index];

        console.log(_id, Brand, Retail_Price, URL);
      }
    });
}
