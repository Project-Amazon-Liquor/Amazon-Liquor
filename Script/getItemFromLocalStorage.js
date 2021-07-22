function getItemFromLocalStorage() {
  var items = JSON.parse(localStorage.getItem("stored_item"));
  for (item of items) {
    if (item._id === par._id) {
      return item;
    }
  }
}
module.exports = { getItemFromLocalStorage: getItemFromLocalStorage };
