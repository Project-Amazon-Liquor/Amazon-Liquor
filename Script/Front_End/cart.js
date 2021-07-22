var oldItems = JSON.parse(localStorage.getItem("stored_item"));

for (item of oldItems) {
  let { _id, price, name, qty, photo } = item;
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
  <td id="sub_${_id}">${qty * price}</td>`;
  document
    .getElementById(`qty_${_id}`)
    .addEventListener("change", qtyChangeHandle);

  function qtyChangeHandle(e) {
    e.preventDefault();
    let changedQty = document.getElementById(`qty_${_id}`).value;
    let userSub = changedQty * price;
    document.getElementById(`sub_${_id}`).innerHTML = `${userSub}`;

    var oldItems = JSON.parse(localStorage.getItem("stored_item"));
    for (item of oldItems) {
      if (item._id === _id) {
        item.qty = changedQty;
        break;
      }
    }
    localStorage.setItem("stored_item", JSON.stringify(oldItems));
    console.log(localStorage.getItem("stored_item"));
  }

  // document.getElementById(`product-info-container${_id}`).innerHTML += ;

  let img = document.createElement("img");
  img._id = _id;
  img.src = `${photo}`;
  img.addEventListener("click", handlephotoClick);
  document.getElementById(`cart-info${_id}`).appendChild(img);

  let productDetail = document.createElement("div");
  productDetail.innerHTML = ` <p>${name}</p>
  <small>Price: ${price}</small><br>
  <a id="removebtn_${_id}" href="">Remove</a>`;

  document.getElementById(`cart-info${_id}`).appendChild(productDetail);
  document
    .getElementById(`removebtn_${_id}`)
    .addEventListener("click", removeHandle);

  function removeHandle(e) {
    e.preventDefault();
    var oldItems = JSON.parse(localStorage.getItem("stored_item"));
    console.log(oldItems);
    for (item of oldItems) {
      if (item._id === _id) {
        oldItems.splice(oldItems.indexOf(item), 1);
        break;
      }
    }
    localStorage.setItem("stored_item", JSON.stringify(oldItems));
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
