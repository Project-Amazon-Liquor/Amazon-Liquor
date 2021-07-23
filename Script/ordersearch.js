
const ORDERURL = `https://amazonliquor.herokuapp.com/orders`;

const urlSearchParams = new URLSearchParams(window.location.search);
const par = Object.fromEntries(urlSearchParams.entries());
console.log(par);
console.log(jQuery.isEmptyObject(par));

async function loadorderCard() {
  const response = await fetch(ORDERURL);
  const order = await response.json();
  return order;
}

function pageLoad() {
  loadorderCard().then((order) => {

    for (const key in order) {
      if (order[key]._id == par.keyword) {
        const element = order[key];
        let { _id, Products, Total_Price, Order_Date, Shipping_Info} = element;

        

          document.getElementById("id").value = _id;
          document.getElementById("date").value = Order_Date;
          document.getElementById("totalPrice").value = "$"+Total_Price;         
          document.getElementById("shipping").value = 
          Shipping_Info.first_name+" "+Shipping_Info.last_name +"\n"+
          Shipping_Info.email+"\n"+
          Shipping_Info.phone+"\n"+
          Shipping_Info.address+"\n\n";

          Products.forEach(elements => {
            document.getElementById("shipping").value += 
          "Product ID: "+elements.product_id+"\n"+"Quantity: "+elements.quantity+"\n\n";
        });;
        break;
      }
    }
      


    
  });
}