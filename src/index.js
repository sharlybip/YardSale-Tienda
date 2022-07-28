const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const productDetailcloseIcon = document.querySelector('.product-detail-close');


const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const order = document.querySelector('.product-detail-shop');
const cardsContainer = document.querySelector('.cards-container');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleOrder);
productDetailcloseIcon.addEventListener('click', closeProductdetailAside);



function toggleDesktopMenu() {
  const isOrderMenuClose = order.classList.contains('inactive'); 
  const isProductDetailClose = aside.classList.contains('inactive'); 
  if(!isOrderMenuClose) {
    order.classList.add('inactive');
  }
  else if(!isProductDetailClose) {
    aside.classList.add('inactive');
  }
  desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {
  const isOrderMenuClose = order.classList.contains('inactive');
  const isProductDetailClose = aside.classList.contains('inactive');
  if(!isOrderMenuClose) {
    order.classList.add('inactive');
  }
  else if(!isProductDetailClose) {
    aside.classList.add('inactive');
  }
  mobileMenu.classList.toggle('inactive');
}
function toggleOrder() {
  const isMobileMenuClose = mobileMenu.classList.contains('inactive');
  const isDesktopMenuClose = desktopMenu.classList.contains('inactive');
  const isProductDetailClose = aside.classList.contains('inactive'); 

  if (!isMobileMenuClose) {
    mobileMenu.classList.add('inactive');
  }
  else if(!isDesktopMenuClose) {
    desktopMenu.classList.add('inactive');
  }
  else if(!isProductDetailClose) {
    aside.classList.add('inactive');
  }

  order.classList.toggle('inactive');
}
function openProductDetailAside() {
  const aside = document.querySelector('.product-detail');
  const isOrderMenuClose = order.classList.contains('inactive');
  const isMobileMenuClose = mobileMenu.classList.contains('inactive');
  const isDesktopMenuClose = desktopMenu.classList.contains('inactive');

  if(!isOrderMenuClose) {
    order.classList.add('inactive');
  }
  else if (!isMobileMenuClose) {
    mobileMenu.classList.add('inactive');
  }
  else if(!isDesktopMenuClose) {
    desktopMenu.classList.add('inactive');
  }


  aside.classList.remove('inactive');
}
function closeProductdetailAside(){
  aside.classList.add('inactive');
}

const productList = [];
for(let i = 0; i < 10; i++){
  productList.push({
  name: 'Bike',
  price: '$120',
  image: 'https://images.pexels.com/photos/6567079/pexels-photo-6567079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
}
function renderProducts(array) {
  for(product of array){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
      const img = document.createElement('img');
      img.src = product.image;
      img.addEventListener('click', openProductDetailAside)
  
      const productInfo = document.createElement('div');
      productInfo.classList.add('product-info');
  
      const productInfoDiv = document.createElement('div');
  
  
  
        const productInfoPrice = document.createElement('p');
        productInfoPrice.innerText = product.price;
        const productInfoName = document.createElement('p');
        productInfoName.innerText = product.name;
  
        productInfoDiv.appendChild(productInfoPrice);
        productInfoDiv.appendChild(productInfoName);
  
      const figure = document.createElement('figure');
        const figureImg = document.createElement('img');
        figureImg.src = '../images/icons/bt_add_to_cart.svg';
  
        figure.appendChild(figureImg);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(figure);
  
    productCard.appendChild(img);
    productCard.appendChild(productInfo);
  
  cardsContainer.appendChild(productCard);
  }

}
renderProducts(productList);