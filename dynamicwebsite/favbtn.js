function favBtnClick() {
    const products = document.querySelector("#products");
    const favBtn = products.querySelectorAll(".bi-heart");
    favBtn.forEach(function (btn){
        btn.addEventListener("click", function(event){
            const target = event.target
            const favoriteBtn = target.closest(".bi-heart")
        const selecterId = favoriteBtn.getAttribute("data-id");
        console.log(selecterId);
        const selectedProductIndex = selectedProductIds.indexOf(selecterId)
        // const icon = btn.querySelector(".bi-heart");
        if( selectedProductIndex != -1){
            selectedProductIds.splice(selectedProductIndex,1);  
        }
        else{
            selectedProductIds.push(selecterId);
        }
        const counter = document.querySelector("#counter")
        counter.innerHTML = selectedProductIds.length;
        })
    })

}