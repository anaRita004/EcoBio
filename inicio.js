// inicializa o swiper
new Swiper('.card-wrapper', {
  loop: true, 
  spaceBetween: 55, 
  slidesPerView: 3, 
  centeredSlides: true, 

  // paginacao
  pagination: {
    el: '.swiper-pagination', 
    clickable: true, 
  },

  // navegacao
  navigation: {
    nextEl: '.swiper-button-next', 
    prevEl: '.swiper-button-prev', 
  },

  // responsividade
  breakpoints: {
    0: { // telas pequenas
      slidesPerView: 1, 
      centeredSlides: false, // desativa centralizacao
    },
    768: { // tablets
      slidesPerView: 2, 
    },
    1024: { // telas grandes
      slidesPerView: 3, 
    }
  }
});