var oldItems = JSON.parse(localStorage.getItem("stored_item"));
pricing();
for (var id in oldItems) {
  //console.log(oldItems[id]);
  let { _id, price, name, qty, photo } = oldItems[id];
  //console.log(_id, price, name, qty, photo);
  addproductinfo(_id, price, name, photo, qty);
}

function addproductinfo(_id, price, name, photo, qty) {
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
  ).innerHTML += `<td><input type="number" id="qty_${_id}" value=${qty} /></td>
  <td id="sub_${_id}">$ ${itemSubtotal(_id)}</td>`;
  document
    .getElementById(`qty_${_id}`)
    .addEventListener("change", qtyChangeHandle);

  function qtyChangeHandle(e) {
    e.preventDefault();
    postputTemp(_id, document.getElementById(`qty_${_id}`).value);
    document.getElementById(`sub_${_id}`).innerHTML = `$ ${itemSubtotal(_id)}`;
    pricing();
  }

  // document.getElementById(`product-info-container${_id}`).innerHTML += ;

  let img = document.createElement("img");
  img._id = _id;
  img.src = `${photo}`;
  img.addEventListener("click", handlephotoClick);
  document.getElementById(`cart-info${_id}`).appendChild(img);

  let productDetail = document.createElement("div");
  productDetail.innerHTML = ` <p>${name}</p>
  <small>Price: ${Number(price).toFixed(2)}</small><br>
  <a id="removebtn_${_id}" href="">Remove</a>`;

  document.getElementById(`cart-info${_id}`).appendChild(productDetail);
  document
    .getElementById(`removebtn_${_id}`)
    .addEventListener("click", removeHandle);

  function removeHandle(e) {
    e.preventDefault();
    deletTemp(_id);
    console.log(localStorage.getItem("stored_item"));
    location.href = "cart.html";
  }
}

function handlephotoClick(e) {
  e.preventDefault();
  console.log("1");
  let _id = e.currentTarget._id;
  location.href = `single-product.html?_id=${_id}`;
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

function deletTemp(id) {
  var oldItems = JSON.parse(localStorage.getItem("stored_item"));
  delete oldItems[id];

  localStorage.setItem("stored_item", JSON.stringify(oldItems));
}

function pricing() {
  var oldItems = JSON.parse(localStorage.getItem("stored_item"));
  let subtotal = 0;
  for (var id in oldItems) {
    //console.log(oldItems[id]);
    let { price, qty } = oldItems[id];
    subtotal += price * qty;
  }
  document.getElementById("Subtotal").innerHTML = `$ ${Number(subtotal).toFixed(
    2
  )}`;
  document.getElementById("Tax").innerHTML = `$ ${Number(
    subtotal * 0.15
  ).toFixed(2)}`;
  document.getElementById("Total").innerHTML = `$ ${Number(
    subtotal * 1.15
  ).toFixed(2)}`;
}

function itemSubtotal(id) {
  return Number(getTemp(id).price * getTemp(id).qty).toFixed(2);
}
