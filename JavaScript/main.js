const BTN = document.getElementById('SearchBTN');
const ShortSearch = document.getElementById('Search');
const ShortSearchBTN = document.getElementById('SearchBTN_');
BTN.addEventListener('click', () => {
    ShortSearch.classList.toggle('None')
})
ShortSearchBTN.addEventListener('click', () => {
    ShortSearch.classList.toggle('None')
})
$('.owl-carousel').owlCarousel({
    loop: true,
    center:true,
    responsive:{
        900:{
            items:1
        },
        1000:{
            items:3
        }
    }
})