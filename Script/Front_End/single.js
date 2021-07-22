const API_BASE_URL = "http://nothinginit.herokuapp.com";
const FALL_BACK_DESTINATION_PHOTO_URL =
  "https://cavchronicle.org/wp-content/uploads/2018/03/top-travel-destination-for-visas-900x504.jpg";
const URL = `${API_BASE_URL}/destinations`;

var productName = 0;
var photoURL = "";
const urlSearchParams = new URLSearchParams(window.location.search);
const par = Object.fromEntries(urlSearchParams.entries());
//localStorage.setItem("stored_item", "{}");
if (!localStorage.getItem("stored_item")) {
  localStorage.setItem("stored_item", "{}");
}

load();

function load() {
  const productURL = `${URL}?_id=${par._id}`;
  fetch(productURL)
    .then((data) => data.json())
    .then((product) => {
      const { name, location, photo } = product;
      document.getElementById("product-image").innerHTML = `<img src=${photo}>`;

      document.getElementById("product-info").innerHTML = `<h4>${name}</h4>
            <h6>Retail Price: ${location}</h6>
            <p>${location}</p>`;

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
}

function getTemp(id) {
  var oldItems = JSON.parse(localStorage.getItem("stored_item"));
  if (oldItems[id]) {
    return oldItems[id];
  }
  return null;
}

async function getProduct(id) {
  const response = await fetch(`${URL}?_id=${id}`);
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
      const { name, location, photo } = product;

      oldItems[id] = {
        _id: id,
        price: id,
        name: name,
        qty: newQty,
        photo: photo,
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
