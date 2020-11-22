const fetchPrice =  () => {
    let input = $("#furniture-input").val()
      $.get(`priceCheck/${input}`, function (product) {
        $("body").append(`<div>${product.price}</div>`)
    })
    $.get(`buy/${input}`, function (product) {
        $("body").append(`<div>${product.newInventory}</div>`)
    })
    }

   const fetchBuy = ()=>{
    let input = $("#furniture-buy").val()
    $.get(`buy/${input}`, function (product) {
        $("body").append(`<div>
        Congratulations, You've just bought ${product.productName} 
        for ${product.price} New Shekels.<br> There are ${product.newInventory} left now in the store
        </div>`)
    
    })
}

