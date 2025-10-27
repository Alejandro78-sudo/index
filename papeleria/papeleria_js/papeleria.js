const btnnCart = document.querySelector(".container-products")
const containerCartProducts = document.querySelector(".container--cart-products")
btnnCart.addEventListener("click",() =>{
    containerCartProducts.classList.toggle("hidden-cart")
})

  $(document).ready(function () {
    $('.zoom-img').elevateZoom({
      zoomType: "lens",
      lensShape: "round",
      lensSize: 150
    });

    // Reset al salir del hover
    $('.zoom-img').on('mouseleave', function () {
      var ez = $(this).data('elevateZoom');
      ez.closeAll(); // cierra el zoom
    });
  });

//
