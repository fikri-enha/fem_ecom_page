document.addEventListener("DOMContentLoaded", function () {
  const reduceBtn = document.getElementById("reduceCount");
  const addBtn = document.getElementById("addCount");
  const inputOrderCount = document.getElementById("itemOrderCount");

  const cartCount = document.getElementById("cartCount");
  const addCartBtn = document.getElementById("addToCart");

  addBtn.addEventListener("click", () => {
    inputOrderCount.valueAsNumber += 1;
  });

  reduceBtn.addEventListener("click", () => {
    if (inputOrderCount.valueAsNumber !== 0) {
      inputOrderCount.valueAsNumber -= 1;
    }
  });

  addCartBtn.addEventListener("click", () => {
    const isBagdeHidden = cartCount.style;
    let count = Number(cartCount.innerHTML);
    if (isBagdeHidden) {
      cartCount.style.display = "block";
    }
    count += 1;
    cartCount.innerHTML = count;
  });

  // ====================
  let carouselIndex = 1;
  showCarouselItem(carouselIndex);

  function carousel(n) {
    showCarouselItem((carouselIndex += n));
  }

  function currentItemCarousel(n) {
    showCarouselItem((carouselIndex = n));
  }

  function showCarouselItem(n) {
    let i;
    let carousel = document.getElementsByClassName("carousel-item");
    if (n > carousel.length) {
      carouselIndex = 1;
    }
    if (n < 1) {
      carouselIndex = carousel.length;
    }
    for (i = 0; i < carousel.length; i++) {
      carousel[i].style.display = "none";
    }
    carousel[carouselIndex - 1].style.display = "block";
  }

  document.getElementById("prev").addEventListener("click", () => {
    carousel(-1);
  });
  document.getElementById("next").addEventListener("click", () => {
    carousel(1);
  });

  // -============
  function closeNav() {
    document.getElementById("mobileSideNav").style.width = "0";
  }

  function openNav() {
    document.getElementById("mobileSideNav").style.width = "250px";
  }

  document.getElementById("menuBtn").addEventListener("click", () => {
    openNav();
  });

  document.getElementById("closeBtn").addEventListener("click", () => {
    closeNav();
  });
});
