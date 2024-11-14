//Ícone de menu

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.querySelector('ul');
    
    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active'); // Alterna a exibição do menu
        
        // Verifica a classe ativa do menu para ajustar a posição da imagem
        if (menu.classList.contains('active')) {
            image.style.top = '266px'; 
        } else {
            image.style.top = '0'; 
        }
    });
});
//Fim ícone de menu


new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 20,  // Ajuste o espaçamento entre os cards conforme necessário
  slidesPerView: 3,  // Exibe 3 cards por vez
  centeredSlides: true,  // Garante que o carrossel seja centralizado

  // Pagination bullets
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Breakpoints para responsividade
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});
