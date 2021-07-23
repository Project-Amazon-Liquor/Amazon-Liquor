var oldItems = JSON.parse(localStorage.getItem("stored_item"));

var _id = getRandomId();
var product_details = "";
var total_price = 0;
var order_date = new Date().toLocaleDateString();

for (var id in oldItems) {
  //console.log(oldItems[id]);
  let { _id, price, name, qty } = oldItems[id];
  var product = `${_id},${qty}`;
  total_price += price * qty;

  displayDetail(_id, price, name, qty);
  addProductDetail(product);
}

document.getElementById("Total").innerHTML = `$ ${Number(total_price).toFixed(
  2
)}`;

document
  .getElementById("shipping-form")
  .addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const first = e.target.elements["first"].value;
  const last = e.target.elements["Last-Name"].value;
  const email = e.target.elements["email"].value;
  const phone = e.target.elements["Phone"].value;
  const address = e.target.elements["Address"].value;
  var shipping_info = `${first}:${last}:${email}:${phone}:${address}`;

  pushToServer(
    _id,
    commerout(product_details),
    total_price,
    order_date,
    shipping_info
  );
  localStorage.setItem("stored_item", "{}");
  alert(`\n\n    
      Your order has been submitted!\n
      Your order ID is: ${_id}
      Thank you for shopping with us!\n
      Wanna have something fun?!`);
  window.open("drinkreccomend.html");
}

function pushToServer(
  id,
  product_details,
  total_price,
  order_date,
  shipping_info
) {
  const data = {
    _id,
    product_details,
    total_price,
    order_date,
    shipping_info,
  };
  console.log(data);
  return fetch("https://amazonliquor.herokuapp.com/orders", {
    method: "post",
    headers: { "Content-type": "application/json; charset=UTF-8" },
    body: JSON.stringify(data),
  });
}

function displayDetail(_id, price, name, qty) {
  let productList_1 = document.createElement("tr");
  productList_1.setAttribute("id", `product-info-container${_id}`);
  document.getElementById("cart-list").appendChild(productList_1);

  let productList_2_1 = document.createElement("td");
  productList_2_1.setAttribute("id", `product-info${_id}`);
  document
    .getElementById(`product-info-container${_id}`)
    .appendChild(productList_2_1);

  let productPic = document.createElement("div");
  productPic.classList = "cart-info";
  productPic.setAttribute("id", `cart-info${_id}`);
  document.getElementById(`product-info${_id}`).appendChild(productPic);

  document.getElementById(
    `product-info-container${_id}`
  ).innerHTML += `<td>Qty: ${qty}</td>
      <td id="sub_${_id}">$ ${itemSubtotal(_id)}</td>`;

  let productDetail = document.createElement("div");
  productDetail.innerHTML = ` <p>${name}</p>
      <small>Retail Price: ${Number(price).toFixed(2)}</small><br>`;

  document.getElementById(`cart-info${_id}`).appendChild(productDetail);
}

function getRandomId() {
  let id = "";
  for (let i = 0; i < 10; i++) {
    let number = Math.floor(Math.random() * 10);

    id += number;
  }
  return id;
}

function itemSubtotal(id) {
  return Number(getTemp(id).price * getTemp(id).qty).toFixed(2);
}

function getTemp(id) {
  var oldItems = JSON.parse(localStorage.getItem("stored_item"));
  if (oldItems[id]) {
    return oldItems[id];
  }
  return null;
}

function addProductDetail(item) {
  product_details += `${item};`;
}

function commerout(details) {
  var nocommers = details;
  if (nocommers.endsWith(";")) {
    nocommers = nocommers.slice(0, nocommers.lastIndexOf(";"));
  }
  return nocommers;
}
