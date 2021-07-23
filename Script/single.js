const API_BASE_URL = "https://amazonliquor.herokuapp.com";
const FALL_BACK_DESTINATION_PHOTO_URL =
  "https://cavchronicle.org/wp-content/uploads/2018/03/top-travel-destination-for-visas-900x504.jpg";
const URL = `${API_BASE_URL}/products`;

var productName = 0;
var photoURL = "";
const urlSearchParams = new URLSearchParams(window.location.search);
const par = Object.fromEntries(urlSearchParams.entries());
//localStorage.setItem("stored_item", "{}");
if (!localStorage.getItem("stored_item")) {
  localStorage.setItem("stored_item", "{}");
}

load();
console.log(localStorage.getItem("stored_item"));

function load() {
  const productURL = `${URL}/search?_id=${par._id}`;
  fetch(productURL)
    .then((data) => data.json())
    .then((product) => {
      product = product[0];
      const { _id, Brand, Category, URL, Retail_Price } = product;
      document.getElementById("product-image").innerHTML = `<img src=${URL}>`;

      document.getElementById("product-info").innerHTML = `<h4>${Brand}</h4>
            <h6>Retail Price: $${Number(Retail_Price).toFixed(2)}</h6>
            <p>${Category}</p>`;

      document.getElementById(
        "product-qty"
      ).innerHTML = `<form action="" method="get">
            <label for="quantity">Quantity:</label>
            <input
              name="quantity"
              type="quantity"
              class="quantity-text"
              id="quantity"
              onfocus="if(this.value == '1') { this.value = ''; }"
              onBlur="if(this.value == '') { this.value = '1';}"
              value="${getCurrentQty(par._id)}"/>
            <input type="submit" class="button" value="Add to Cart" />
          </form>`;
      document
        .getElementById("product-qty")
        .addEventListener("submit", handleSubmit);
    });
}

function handleSubmit(e) {
  e.preventDefault();
  postputTemp(par._id, e.target.quantity.value);
  alert("Drinking alcohol can hurt your liver");
}

function getTemp(id) {
  var oldItems = JSON.parse(localStorage.getItem("stored_item"));
  if (oldItems[id]) {
    return oldItems[id];
  }
  return null;
}

async function getProduct(id) {
  const response = await fetch(`${URL}/search?_id=${id}`);
  const product = await response.json();
  return product;
}

function postputTemp(id, newQty) {
  var oldItems = JSON.parse(localStorage.getItem("stored_item"));
  if (oldItems[id]) {
    oldItems[id].qty = newQty;
    localStorage.setItem("stored_item", JSON.stringify(oldItems));
  } else {
    getProduct(id).then((product) => {
      product = product[0];
      const { Brand, URL, Retail_Price } = product;
      oldItems[id] = {
        _id: id,
        price: Retail_Price,
        name: Brand,
        qty: newQty,
        photo: URL,
      };

      localStorage.setItem("stored_item", JSON.stringify(oldItems));
    });
  }
  console.log(localStorage.getItem("stored_item"));
}

function getCurrentQty(id) {
  if (getTemp(id)) {
    return getTemp(id).qty;
  } else {
    return 0;
  }
}
