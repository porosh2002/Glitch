const BTN = document.getElementById("SearchBTN");
const ShortSearch = document.getElementById("Search");
const ShortSearch_Mobile = document.getElementById("mobileSEarchIcon");
const Menu_sub = document.getElementById("menu_sub")
const Menu_sub_content = document.getElementById("menu_sub_content")
const ShortSearchBTN = document.getElementById("SearchBTN_");
const MobileMenu = document.getElementById("mobileMenu");
const BarMobile = document.getElementById("BarMobile");
const TimesMenu = document.getElementById("TimesMenu");
BarMobile.addEventListener("click", () => {
  MobileMenu.classList.toggle("None");
});
TimesMenu.addEventListener('click', () => {
  MobileMenu.classList.toggle("None");
})
// 
Menu_sub.addEventListener("click", () => {
  Menu_sub_content.classList.toggle("None");
});
// 
BTN.addEventListener("click", () => {
  ShortSearch.classList.toggle("None");
});
ShortSearchBTN.addEventListener("click", () => {
  ShortSearch.classList.toggle("None");
});
ShortSearch_Mobile.addEventListener("click", () => {
  ShortSearch.classList.toggle("None");
});
$(".owl-carousel").owlCarousel({
  loop: true,
  center: true,
  responsive: {
    300: {
      items: 1,
    },
    900: {
      items: 3,
    },
  },
});
