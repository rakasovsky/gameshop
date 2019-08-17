// Корзина
export default function toggleCard() {
    const btnCart = document.getElementById('cart');
    const modalCart = document.querySelector('.cart');
    const closeBtn = document.querySelector('.cart-close');

    btnCart.addEventListener('click',() => {
        modalCart.style.display = 'flex';
    } );

    closeBtn.addEventListener('click',() => {
        modalCart.style.display = 'none';
    } );
}