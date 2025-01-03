(function () {
  new Swiper($(".home-slider"), {
    autoplay: true,
    effect: "fade",
    // header img 1 và header img 2
  });

  new Swiper($(".policy-slider"), {
    loop: false,
    slidesPerView: 3,
    grabCursor: true,
    spaceBetween: 30,
    roundLengths: true,
    slideToClickedSlide: false,
    breakpoints: {
      300: {
        slidesPerView: 1.3,
        spaceBetween: 10,
      },
      500: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
      991: {
        slidesPerView: 3.5,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  new Swiper($(".category-slider"), {
    loop: false,
    slidesPerView: 3,
    grabCursor: true,
    spaceBetween: 20,
    roundLengths: true,
    slideToClickedSlide: false,
    breakpoints: {
      300: {
        slidesPerView: 2,
      },
      500: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });

  new Swiper($(".sale__list"), {
    loop: false,
    slidesPerView: 5,
    grabCursor: true,
    spaceBetween: 20,
    roundLengths: true,
    slideToClickedSlide: false,
    breakpoints: {
      300: {
        slidesPerView: 1.6,
        spaceBetween: 6,
      },
      450: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      991: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
    navigation: {
      //nút bấm ">" "<" ở phần đáng giảm giá, thư viện tự cho event cho mình dùng
      nextEl: $(".sale__list-btn--next"),
      prevEl: $(".sale__list-btn--prev"),
      disabledClass: "d-none",
      //khi mà kéo đến hết thì mất cái nút display none đi
    },
  });

  new Swiper($(".blog-slider"), {
    loop: false,
    grabCursor: true,
    slidesPerView: 3,
    spaceBetween: 20,
    roundLengths: true,
    slideToClickedSlide: false,
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      500: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  new Swiper($(".review-slider"), {
    loop: false,
    grabCursor: true,
    slidesPerView: 2,
    spaceBetween: 30,
    roundLengths: true,
    slideToClickedSlide: false,
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      500: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  });

  new Swiper($(".gallery-slider"), {
    loop: false,
    grabCursor: true,
    slidesPerView: 5,
    spaceBetween: 30,
    roundLengths: true,
    slideToClickedSlide: false,
    breakpoints: {
      300: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      991: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });
})();
