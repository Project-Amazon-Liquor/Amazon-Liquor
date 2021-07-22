const API_BASE_URL = "";
const URL = `${API_BASE_URL}/products`;
const searchBtn = document.getElementById("searchbutton");

loadFeatureCards();

searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
});

function loadFeatureCards() {
  fetch(URL)
    .then((response) => response.json())
    .then((features) => {
      for (let index = 0; index <= 5; index++) {
        let { name, price, photo } = features[index];

        if (name === "") {
          name = "Jack Daniel's";
        }
        if (price === "") {
          price = "9.99";
        }
        if (photo === "") {
          photo =
            "https://cavchronicle.org/wp-content/uploads/2018/03/top-travel-destination-for-visas-900x504.jpg";
        }

        const featureCard = document.createElement("a");
        featureCard.href = "single-product.html";
        featureCard.innerHTML = `
                <div class="featured-item">
                <img src=${photo} alt="Item ${index}">
                    <h4>${name}</h4>
                    <h6>\"$\"${price}</h6>
                    </div>
                    `;
        document.getElementById("feature-container").appendChild(featureCard);
      }
    });
}
