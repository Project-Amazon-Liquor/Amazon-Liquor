const API_BASE_URL = "http://nothinginit.herokuapp.com";
const FALL_BACK_DESTINATION_PHOTO_URL =
  "https://cavchronicle.org/wp-content/uploads/2018/03/top-travel-destination-for-visas-900x504.jpg";
const URL = `${API_BASE_URL}/destinations`;

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

load();

function load() {
  let productURL = `${URL}?_id=${params._id}`;
  console.log(productURL);
  fetch(productURL)
    .then((data) => data.json())
    .then((product) => {
      let { name, location, photo } = product;

      console.log(document.getElementById("product-image"));
      document.getElementById(
        "product-image"
      ).innerHTML = `<img src=${photo}/>`;

      document.getElementById("product-info").innerHTML = `<h4>${name}</h4>
            <h6>Retail Price: ${location}</h6>
            <p>${location}</p>`;
    });
}
