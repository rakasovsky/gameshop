// Filter 
export default function filter() {
    const cards = document.querySelectorAll('.goods .card'),
        discountCheckbox = document.getElementById('discount-checkbox'),
        min = document.getElementById('min'),
        max = document.getElementById('max'),
        activeLi = document.querySelector('.catalog-list li.active');

    cards.forEach((card) => {
        const cardPrice = card.querySelector('.card-price');
        const price = parseFloat(cardPrice.textContent);
        const discount = card.querySelector('.card-sale');

        card.parentElement.style.display = '';

        if((min.value && price < min.value) || (max.value && price > max.value)){
            card.parentElement.style.display = 'none';
        } else if (discountCheckbox.checkbox && !discount) {
            card.parentElement.style.display = 'none';
        } else if(activeLi) {
         if(card.dataset.category !== activeLi.textContent) {
            card.parentElement.style.display = 'none';
        }} 
    }); 
}
