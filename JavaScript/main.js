const BTN = document.getElementById("SearchBTN");
const ShortSearch = document.getElementById("Search");
const ShortSearch_Mobile = document.getElementById("mobileSEarchIcon");
const ShortSearchBTN = document.getElementById("SearchBTN_");
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
