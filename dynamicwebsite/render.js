const selectedProductIds = [];
const productsElement = document.getElementById("products");

function renderProductCards(products){
    let productCards = "";
    for(let i = 0; i < products.length; i++) {
    productCards = productCards + renderProductCard(products[i])
    }
    productsElement.innerHTML = productCards;
    favBtnClick();
} // ** ** ** ** product cards ** ** ** ** ** 
function  renderProductCard(product){
   return `<div class="col-12 col-md-4 col-lg-3">
    <div class="card  p-3" >
   <img src=${product.image} class="card-img-top" alt="...">
   <div class="card-body">
     <a href="#" class="text-decoration-none " ><p class="card-title fw-bold  h2">${product.title}<p></a>
     <p class="card-text">${product.description}.</p>
     <span class="fw-bold text-success me-3 h4">&#x20B9; ${product.priceModified}</span>
     <span class="mx-1 text-danger">&#x20B9; <strike>${product.prePriceModified}</strike></span>
     <div class="text-secondary m-1">${product.discount}</div>
     <div class="btn-group w-100" role="group" aria-label="Basic example">
       <button type="button"  class="btn "><i class="bi bi-cart"></i></button>
       <button type="button"  class="btn  heartBtn"><i class="bi bi-heart"  data-id="${product._id}"></i></button>
       <button type="button"  class="btn "><i class="bi bi-arrow-left-right"></i></button>
     </div>
   </div>
   </div>
   </div>`
}
