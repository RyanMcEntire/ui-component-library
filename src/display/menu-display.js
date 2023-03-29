import menu from '../components/drop-down-menu';

function displayMenu() {
  console.log('display menu ');
  document.body.appendChild(menu());
}

export default displayMenu;

