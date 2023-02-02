const forSearch = document.querySelector("#search")
forSearch.addEventListener("keyup", function () {
  const term = forSearch.value;
  const termLowercase = term.toLowerCase();
  const productFiltered = productsModified.filter(function(product){
    const titleLower = product.title.toLowerCase();
    return titleLower.indexOf(termLowercase)!= -1;
  });
  renderProductCards(productFiltered);
})