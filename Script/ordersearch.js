const API_BASE_URL = "https://amazonliquor.herokuapp.com";
const URL = `${API_BASE_URL}/orders`;

const urlSearchParams = new URLSearchParams(window.location.search);
const par = Object.fromEntries(urlSearchParams.entries());
console.log(par);
console.log(jQuery.isEmptyObject(par));

async function loadProductsCard() {
  const response = await fetch(URL);
  const products = await response.json();
  return products;
}

function pageLoad() {
  loadProductsCard().then((products) => {
    for (const _id in products) {
      let { name, location, photo } = products[_id];

      if (
        jQuery.isEmptyObject(par) ||
        par.keyword.toLowerCase() === "" ||
        par.keyword.toLowerCase() === location.toLowerCase()
      ) {
        let card = document.createElement("div");
        card._id = _id;
        card.classList = "item new col-md-4";
        card.innerHTML = `<a href="single-product.html">
          <div class="featured-item">
            <img
              src=${photo}
              class="card-img-top"
              alt=""
            />
            <h4>${name}</h4>
            <h6>${location}</h6>
          </div>
        </a>`;

        card.addEventListener("click", handleClick);
        document.getElementById("products_container").appendChild(card);
      }
    }
  });
}

function handleClick(e) {
  e.preventDefault();
  let _id = e.currentTarget._id;
  location.href = `single-product.html?_id=${_id}`;
}
