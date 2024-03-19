const products = [
  {
    name: 'Sony Playstation 5',
    url: 'images/playstation_5.png',
    type: 'games',
    price: 499.99,
  },
  {
    name: 'Samsung Galaxy',
    url: 'images/samsung_galaxy.png',
    type: 'smartphones',
    price: 399.99,
  },
  {
    name: 'Cannon EOS Camera',
    url: 'images/cannon_eos_camera.png',
    type: 'cameras',
    price: 749.99,
  },
  {
    name: 'Sony A7 Camera',
    url: 'images/sony_a7_camera.png',
    type: 'cameras',
    price: 1999.99,
  },
  {
    name: 'LG TV',
    url: 'images/lg_tv.png',
    type: 'televisions',
    price: 799.99,
  },
  {
    name: 'Nintendo Switch',
    url: 'images/nintendo_switch.png',
    type: 'games',
    price: 299.99,
  },
  {
    name: 'Xbox Series X',
    url: 'images/xbox_series_x.png',
    type: 'games',
    price: 499.99,
  },
  {
    name: 'Samsung TV',
    url: 'images/samsung_tv.png',
    type: 'televisions',
    price: 1099.99,
  },
  {
    name: 'Google Pixel',
    url: 'images/google_pixel.png',
    type: 'smartphones',
    price: 499.99,
  },
  {
    name: 'Sony ZV1F Camera',
    url: 'images/sony_zv1f_camera.png',
    type: 'cameras',
    price: 799.99,
  },
  {
    name: 'Toshiba TV',
    url: 'images/toshiba_tv.png',
    type: 'televisions',
    price: 499.99,
  },
  {
    name: 'iPhone 14',
    url: 'images/iphone_14.png',
    type: 'smartphones',
    price: 999.99,
  },
];

// Getting The DOM elements

const productsWrapperEl = document.getElementById('products-wrapper');
const checkEls = document.querySelectorAll('.check');
const filtersContainer = document.getElementById('filters-container');
const searchInput = document.getElementById('search');
const cartButton = document.getElementById('cartButton');
const cartCount = document.getElementById('cartCount');

// Initialize cart item count
let cartItemCount = 0;

// Initialize products
const productsEls = [];

// Loop over the products and create products elements
products.forEach((product) => {
  const productEl = createProductElement(product);
  productsEls.push(productEl);
  productsWrapperEl.appendChild(productEl);
});

// Create product elements
function createProductElement(product) {
  const productEl = document.createElement('div');

  // Classes to be created
  productEl.className = 'item space-y-2';

  productEl.innerHTML = ` <div
  class="bg-gray-100 flex justify-center relative overflow-hidden group cursor-pointer border"
>
  <img
    src="${product.url}"
    alt="${product.name}"
    class="w-full h-full object-cover"
  />
  <!-- Button -->
  <span
    class="status bg-black text-white absolute bottom-0 left-0 right-0 text-center py-2 translate-y-full transition group-hover:translate-y-0"
  >
    Add To Cart
  </span>
</div>
<!-- Product Name -->
<p class="text-xl">${product.name}</p>
<strong>R${product.price}</strong>`;

  return productEl;
}
