document.addEventListener("DOMContentLoaded", function() {
    const reduceBtn = document.getElementById("reduceCount")
    const addBtn = document.getElementById("addCount")
    const inputOrderCount = document.getElementById("itemOrderCount")
    
    const cartCount = document.getElementById("cartCount")
    const addCartBtn = document.getElementById("addToCart")

    addBtn.addEventListener("click",() => {
        inputOrderCount.valueAsNumber += 1
    })
    
    reduceBtn.addEventListener("click",() => {
        if (inputOrderCount.valueAsNumber !== 0) {
            inputOrderCount.valueAsNumber -= 1
        }
    })

    addCartBtn.addEventListener("click",() => {
        const isBagdeHidden = cartCount.style
        let count = Number(cartCount.innerHTML)
        if (isBagdeHidden) {    
            cartCount.style.display = 'block'
        }
        count += 1
        cartCount.innerHTML = count
    })

})