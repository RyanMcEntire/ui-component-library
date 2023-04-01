import './dropdown.css';
import './style.css';
import downClick from './components/drop-down-function';
import displayCarousel from './carousel/carousel';
import {carouselEvent, autoAdvance} from './carousel/carousel-function';
import displayMenu from './components/drop-down-menu';

displayCarousel();
autoAdvance();
carouselEvent();
displayMenu();
downClick();
