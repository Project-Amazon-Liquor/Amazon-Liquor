// Dynamically populate the table with shopping list items.
//Step below can be done via PHP and AJAX, too.
function doShowAll() {
  if (CheckBrowser()) {
    var key = "";
    var list = "<tr><th>Item</th><th>Value</th></tr>\n";
    var i = 0;
    //For a more advanced feature, you can set a cap on max items in the cart.
    for (i = 0; i <= localStorage.length - 1; i++) {
      key = localStorage.key(i);
      list +=
        "<tr><td>" +
        key +
        "</td>\n<td>" +
        localStorage.getItem(key) +
        "</td></tr>\n";
    }
    //If no item exists in the cart.
    if (list == "<tr><th>Item</th><th>Value</th></tr>\n") {
      list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
    }
    //Bind the data to HTML table.
    //You can use jQuery, too.
    document.getElementById("list").innerHTML = list;
  } else {
    alert("Cannot save shopping list as your browser does not support HTML 5");
  }
}

function CheckBrowser() {
  if ("localStorage" in window && window["localStorage"] !== null) {
    // We can use localStorage object to store data.
    return true;
  } else {
    return false;
  }
}
