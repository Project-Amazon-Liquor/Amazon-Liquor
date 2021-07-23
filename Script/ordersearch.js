const API_BASE_URL = "https://amazonliquor.herokuapp.com";
const URL = `${API_BASE_URL}/orders`;

document
  .getElementById("order-search-form")
  .addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const orderid = e.target.elements["orderid"].value;
  e.target.elements["orderid"].value = "";
  clear();
  loadOrder(`${URL}/search?_id=${orderid}`);
}
function clear() {
  document.getElementById("id-date-price").innerHTML = "";
  document.getElementById("products").innerHTML = "";
  document.getElementById("shipping-info").innerHTML = "";
  document.getElementById("no").innerHTML = "";
}

function loadOrder(URL) {
  fetch(URL)
    .then((data) => data.json())
    .then((product) => {
      product = product[0];
      print(product);
    })
    .catch((err) => {
      document.getElementById("no").innerHTML = "NO ORDER FOUND!";
    });
}

function print(product) {
  const { _id, Products, Total_Price, Order_Date, Shipping_Info } = product;
  document.getElementById(
    "id-date-price"
  ).innerHTML = `Order ID: ${_id} <br> Order Date: ${Order_Date} <br> Order Total: $${Number(
    Total_Price
  ).toFixed(2)}`;

  var productinfo = "";
  Products.forEach((element) => {
    console.log(element.product_id);
    productinfo += `Product ID: 
    ${element.product_id} * 
    ${element.quantity}<br>`;
  });
  document.getElementById("products").innerHTML = productinfo;
  console.log(Shipping_Info);
  document.getElementById(
    "shipping-info"
  ).innerHTML = `${Shipping_Info.first_name} *** <br>
  ${Shipping_Info.email}<br>
  ${Shipping_Info.address}`;
}
