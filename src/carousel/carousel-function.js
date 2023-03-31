import selectors from '../model/selectors';

function advanceForward() {
  const sel = selectors();

  const {left} = sel.imgContainer.style;
  console.log('left value ', sel.imgContainer.style.left);
  const percentage = parseFloat(left);
  if (percentage > -710) {
    const newPercentage = `${percentage - 80}%`;
    sel.imgContainer.style.left = newPercentage;
  }
}

function advanceBack() {
  const sel = selectors();
  const { left } = sel.imgContainer.style;
  console.log('left value ', sel.imgContainer.style.left);
  const percentage = parseFloat(left);
  if (percentage < 10) {
    const newPercentage = `${percentage + 80}%`;
    sel.imgContainer.style.left = newPercentage;
  }
}

function manageClicks(e) {
  const eventID = e.target.id;
  const actions = {
    forward: () => advanceForward(),
    back: () => advanceBack(),
  };
  if (actions[eventID]) {
    actions[eventID]();
  }
}

function carouselEvent() {
  const sel = selectors();
  console.log('frame ', sel.frame);
  sel.frame.addEventListener('click', (e) => manageClicks(e));
}

export default carouselEvent;
