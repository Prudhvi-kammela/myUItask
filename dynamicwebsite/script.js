fetch("http://localhost:3000/products")
.then(function(res){
    return res.json()
})
.then(function(res){
    console.log("i am data stored in database",res)
    const productsModified = res.filter(function(product){
        product.priceModified = product.price.toFixed(2);
        product.prePriceModified = product.prePrice.toFixed(2);

        const forSearch = document.querySelector("#search")
         forSearch.addEventListener("keyup", function() {
         const term = forSearch.value;
         const termLowercase = term.toLowerCase();
        const productFiltered = productsModified.filter(function(product){
    const titleLower = product.title.toLowerCase();
    return titleLower.indexOf(termLowercase)!= -1;
  });
  renderProductCards(productFiltered);
})
        return product
        
    })
    renderProductCards(productsModified);
})
.catch(function(err){
    console.log("i am excuted because there is a error while making a run")
})
.finally(function(){
    console.log("ia am excuted error if request is  suceess or not")
})

// const products = [
//     {
//         id:1,
//         title:"MacBook",
//         image:"https://demo.opencart.com/image/cache/catalog/demo/macbook_1-500x500.jpg",
//         description:"Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.1..",
//         price:95999,
//         prePrice:110099,
//        discount:"INR 5300 OFF on All bank cards",
//     },
//     {
//         id:2,
//        title:"i Phone",
//        image:"https://demo.opencart.com/image/cache/catalog/demo/iphone_1-200x200.jpg",
//        description:"iPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping a nam..",
//        price:70000,
//        prePrice:80000,
//        discount:"INR 500 OFF on All bank cards",
//     },
//     {
//         id:3,
//         title:"Apple TV",
//         image:"https://demo.opencart.com/image/cache/catalog/demo/apple_cinema_30-200x200.jpg",
//         description:"The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..",
//         price:45999,
//         prePrice:60700,
//         discount:"INR 999 OFF on All bank cards",
//     },
//     {
//         id:4,
//         title:"Canon Cam 5D",
//         image:"https://demo.opencart.com/image/cache/catalog/demo/canon_eos_5d_1-200x200.jpg",
//         description:"Canon's press material for the EOS 5D states that it 'defines (a) new D-SLR category', while we'r..",
//         price:20999,
//         prePrice:24999,
//         discount:"INR 1000 OFF on All bank cards",
    
//     },
// ]




