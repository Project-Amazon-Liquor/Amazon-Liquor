const API_BASE_URL = "http://nothinginit.herokuapp.com";
const FALL_BACK_DESTINATION_PHOTO_URL =
  "https://cavchronicle.org/wp-content/uploads/2018/03/top-travel-destination-for-visas-900x504.jpg";
const URL = `${API_BASE_URL}/destinations`;

var productName = 0;
var photoURL = "";
const urlSearchParams = new URLSearchParams(window.location.search);
const par = Object.fromEntries(urlSearchParams.entries());
if (!localStorage) {
  localStorage.setItem("stored_item", "[]");
}

//localStorage.setItem("stored_item", "[]");
let productQty = 0;
var oldItems = JSON.parse(localStorage.getItem("stored_item"));
for (item of oldItems) {
  if (item._id === par._id) {
    productQty = item.qty;
    break;
  }
}

localStorage.setItem("stored_item", JSON.stringify(oldItems));
console.log(localStorage.getItem("stored_item"));

load();

function load() {
  const productURL = `${URL}?_id=${par._id}`;
  console.log(productURL);
  fetch(productURL)
    .then((data) => data.json())
    .then((product) => {
      const { name, location, photo } = product;
      productName = name;
      photoURL = photo;

      console.log(document.getElementById("product-image"));
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
              value="${productQty}"/>
            <input type="submit" class="button" value="Add to Cart" />
          </form>`;
      document
        .getElementById("product-qty")
        .addEventListener("submit", handleSubmit);
    });

  //     ${() => {
  //       if (getItemFromLocalStorage()) {
  //         getItemFromLocalStorage().qty;
  //       } else {
  //         0;
  //       }
  //     }}
}

function handleSubmit(e) {
  e.preventDefault();
  let qtyInput = e.target.quantity.value;

  updateToLocalStorage(qtyInput);
  e.target.quantity.value = getItemFromLocalStorage().qty;
}

function updateToLocalStorage(qtyInput) {
  var oldItems = JSON.parse(localStorage.getItem("stored_item"));

  var status = false;
  for (item of oldItems) {
    if (item._id === par._id) {
      item.qty = qtyInput;
      status = true;
      break;
    }
  }
  if (!status) {
    var newItem = {
      _id: par._id,
      price: par._id,
      name: productName,
      qty: qtyInput,
      photo: photoURL,
    };
    oldItems.push(newItem);
  }
  localStorage.setItem("stored_item", JSON.stringify(oldItems));
  console.log(localStorage.getItem("stored_item"));
}

function getItemFromLocalStorage() {
  var items = JSON.parse(localStorage.getItem("stored_item"));
  for (item of items) {
    if (item._id === par._id) {
      return item;
    }
  }
}
// console.log(oldItems);

// console.log(localStorage.getItem("stored_item"));

// console.log("after");

//   var newItem = {
//     _id: itemContainer.find("h2.product-name a").text(),
//     price: itemContainer.find("div.product-image img").attr("src"),
//     qty: itemContainer.find("span.product-price").text(),
//   };
// oldItems.push(newItem);
// localStorage.setItem(stored_item, JSON.stringify(oldItems));
