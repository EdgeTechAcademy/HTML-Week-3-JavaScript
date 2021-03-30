window.onload = computeSubtotal;

var purchases = [];

function artPiece(id, name, desc, price) {
  this.id = id;
  this.name = name;
  this.desc = desc;
  this.price = price;
  this.displayItem = function () {
    return `
    <tr>
      <td>${this.id}</td>
      <td>${this.name}</td>
      <td>${this.desc}</td>
      <td style='width:100px; text-align: right;'>${this.price}</td>
    </tr>`;
  }
}

function computeSubtotal() {
  //creates new artPiece object instances and stores in purchases array
  purchases.push(new artPiece(1002, "Persistence of Memory", "3' X 5' poster", 14.99));
  purchases.push(new artPiece(1003, "Ship With Butterfly Sails", "postcard", 3.99));
  purchases.push(new artPiece(1004, "Other Wierd Stuff", "napkin", 33.33));
  purchases.push(new artPiece(1005, "Blank Canvas", "canvas", 101.99));

  showCart();
}

function addToCart() {
  purchases.push(new artPiece(
    document.getElementById('ID').value,
    document.getElementById('name').value,
    document.getElementById('description').value,
    document.getElementById('price').value
  ));
  showCart();
}

function showCart() {
  var subtotal = 0;
  var itemsTable = "<table><tr><th>ID</th><th>Name</th><th>Desc</th><th>Price</th></tr>";
  //cycles through array summing price property
  for (let item of purchases) {
    subtotal += item.price;
    itemsTable += item.displayItem();
  }
  itemsTable += "</table>";
  //display results
  document.getElementById('divItems').innerHTML = itemsTable;
  document.getElementById('divSubtotal').innerHTML = "Subtotal: " + formatter.format(subtotal);
  document.getElementById('divAvePrice').innerHTML = "Average Price: " + formatter.format(subtotal / purchases.length);
}

// program to format numbers as currency string
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});