const API_BASE_URL = "https://amazonliquor.herokuapp.com";
const FALL_BACK_DESTINATION_PHOTO_URL =
  "https://cavchronicle.org/wp-content/uploads/2018/03/top-travel-destination-for-visas-900x504.jpg";
const URL = `${API_BASE_URL}/products`;

const urlSearchParams = new URLSearchParams(window.location.search);
const par = Object.fromEntries(urlSearchParams.entries());

async function loadProductsCard() {
  const response = await fetch(URL);
  const products = await response.json();
  return products;
}

function pageLoad() {
  loadProductsCard().then((products) => {
    for (const product of products) {
      let { _id, Brand, Category, URL } = product;
      if (URL === "" || !URL) {
        URL = FALL_BACK_DESTINATION_PHOTO_URL;
      }

      if (
        jQuery.isEmptyObject(par) ||
        par.keyword.toLowerCase() === "" ||
        par.keyword.toLowerCase() === Category.toLowerCase()
      ) {
        let card = document.createElement("div");
        card._id = _id;
        card.classList = "item new col-md-4";
        card.innerHTML = `<a href="single-product.html">
          <div class="featured-item">
            <img
              src=${URL}
              class="card-img-top"
              alt=""
            />
            <h4>${Brand}</h4>
            <h6>${Category}</h6>
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
