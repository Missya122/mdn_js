const list = document.querySelector('.output ul');
const totalBox = document.querySelector('.output p');
let total = 0;
list.innerHTML = '';
totalBox.textContent = '';
// number 1
let productsString ='Underpants:6.99,Socks:5.99,Tshirt:14.99,Trousers:31.99,Shoes:23.99';
let products = productsString.split(',');
let index;
let price;
let productName;

for (let i = 0; i <= products.length ; i++) { // number 2
  index = products[i].indexOf(':');
  price = products[i].slice(index + 1);
  productName = products[i].slice(0, index);

  price = Number(price);

  total += price;

  

  let itemText = `${productName} - ${price}`;

  const listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);