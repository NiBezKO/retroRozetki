/* add header class */

// const header = document.querySelector(".header");

// window.addEventListener("scroll", () => {
//   let scrollPos = window.scrollY;

//   if (scrollPos >= 250) {
//     header.classList.add ("_black");
//   } else {
//     header.classList.remove ("_black");
//   }
// })

// /* Burger menu */

// const burger = document.querySelector(".burger");
// const burgerContent = document.querySelector(".burger__content");
// const nav = document.querySelector(".nav");

// burger.addEventListener("click", () => {
//   burger.classList.toggle("_active");
//   nav.classList.toggle("_active");
//   burgerContent.classList.toggle("_active");

//   if (burger.classList.contains("_active")) {
//     header.classList.add("_black")
//   } else {
//     header.classList.remove("_black");
//   }
// });

// /* navigations scroll to */

// const menuLinks = document.querySelectorAll('.nav__item[data-goto]');
// if (menuLinks.length > 0) {
//     menuLinks.forEach(menuLink => {
//         menuLink.addEventListener("click", onMenuLinkClick);
//     });

//     function  onMenuLinkClick(e) {
//         const menuLink = e.target;
//         if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
//             const gotoBlock = document.querySelector(menuLink.dataset.goto);
//             const gotoBlockvalue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector(".header").offsetHeight;

//             window.scrollTo({
//                 top: gotoBlockvalue,
//                 behavior: "smooth"
//             });
//             e.preventDefault();
//         }
//     }

// }

const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    // удалим у кнопки класс btn-up_hide
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    // добавим к кнопке класс btn-up_hide
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
    // при прокрутке содержимого страницы
    window.addEventListener('scroll', () => {
      // определяем величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
      scrollY > 400 ? this.show() : this.hide();
    });
    // при нажатии на кнопку .btn-up
    document.querySelector('.btn-up').onclick = () => {
      // переместим в начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    };
  },
};
btnUp.addEventListener();
// /* slider-swiper */

// var swiper = new Swiper(".mySwiper", {
//   spaceBetween: 30,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });
