const btn = [...document.querySelectorAll('.product__add')];
const cartProducts = document.querySelector('.cart__products');
const products = document.querySelectorAll('.product');
const productQuantityDec = document.getElementsByClassName('product__quantity-control product__quantity-control_dec');
const productQuantityInc = document.getElementsByClassName('product__quantity-control product__quantity-control_inc');
const productQuantityValue = [...document.querySelectorAll('.product__quantity-value')];
const images = document.getElementsByClassName('product__image');
const prodArr = [];

for (let i = 0; i < productQuantityInc.length; i++) {
    productQuantityInc[i].addEventListener('click', () => {
        productQuantityValue[i].textContent = Number(productQuantityValue[i].textContent) +  1;
    })
    productQuantityDec[i].addEventListener('click', () => {
        if (productQuantityValue[i].textContent > 1) {
            productQuantityValue[i].textContent = Number(productQuantityValue[i].textContent)-1;
        }
    })
    btn[i].addEventListener('click', () => {
        const cartCount = document.querySelectorAll('.cart__product-count');
        if (prodArr.includes(products[i].getAttribute('data-id') ) ) {
            prodArr.forEach(elem => {
                if (elem === products[i].getAttribute('data-id')) {
                    const index = prodArr.indexOf(elem);
                    cartCount[index].textContent = Number(cartCount[index].textContent) + Number(productQuantityValue[i].textContent);
                }
            })
        } else {
            cartProducts.innerHTML +=  
                `<div class="cart__product" data-id="${products[i].getAttribute('data-id')}">
                    <img class="cart__product-image" src="${images[i].getAttribute('src')}">
                    <div class="cart__product-count">${productQuantityValue[i].textContent}</div>
                </div>`
            prodArr.push(products[i].getAttribute('data-id'));
        }
        
    })
}
