import getData from './modules/getData';
import renderCards from './modules/renderCards';
import renderCatalog from './modules/renderCatalog';
import toggleCheckbox from './modules/toggleCheckbox';
import toggleCard from './modules/toggleCard';
import addToCard from './modules/addToCard';
import actionPage from './modules/actionPage';


getData().then((data) => {
    renderCards(data);
    renderCatalog();
    toggleCheckbox();
    toggleCard();
    addToCard();
    actionPage();
});