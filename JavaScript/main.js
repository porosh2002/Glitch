const BTN = document.getElementById('SearchBTN');
const searchMobile = document.getElementById('searchMobile');
const ShortSearch = document.getElementById('Search');
const ShortSearchBTN = document.getElementById('SearchBTN_');
BTN.addEventListener('click', () => {
    ShortSearch.classList.toggle('None')
})
// searchMobile.addEventListener('click', () => {
//     // console.log('clicked');
//     ShortSearch.classList.toggle('None')
// })
ShortSearchBTN.addEventListener('click', () => {
    ShortSearch.classList.toggle('None')
})
$('.owl-carousel').owlCarousel({
    loop: true,
    center:true,
    responsive:{
        300:{
            items:1
        },
        900:{
            items:3
        }
    }
})