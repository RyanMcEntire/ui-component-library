import selectors from "../model/selectors";

function dropdown(e, submenus) {
  submenus.forEach((sub) => {
    if (!sub.classList.contains('show')) {
      sub.classList.add('show');
      selectors().dropButton.textContent = 'hide';
    } else {
      sub.classList.remove('show');

      selectors().dropButton.textContent = 'more';
    }
  });
}

function handleClick(e) {
  if (e.target.id === 'dropdown') {
    dropdown(e, selectors().submenu);
  }
}

export default function downClick() {
  return selectors().dropButton.addEventListener('click', (e) =>
    handleClick(e)
  );
}

