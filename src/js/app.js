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

// /* Tabs    */

//   let tabsButtons = document.querySelector(".tabs__buttons");
//   let tabs = document.querySelectorAll(".tabs-buttons__menu");
//   let tabsContent = document.querySelectorAll(".tabs-content__show");

//   function hideTabContent() {
//     tabsContent.forEach(items => {
//       items.style.display = "none";
//    });

//    tabs.forEach(item => {
//      item.classList.remove("_active");
//    })
//   }

//   function showContentTab (i = 0) {
//     tabsContent[i].style.display = "block";
//     tabs[i].classList.add("_active");
//   }

//   hideTabContent();
//   showContentTab();

//   tabsButtons.addEventListener('click', (event) => {
//      const target = event.target;

//      if ( target && target.classList.contains("tabs-buttons__menu")) {
//       tabs.forEach((item, i) => {
//          if ( target == item )
//          hideTabContent();
//          showContentTab(i);
//       })
//      }
//   })

// /* slider-swiper */

// var swiper = new Swiper(".mySwiper", {
//   spaceBetween: 30,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });
