import selectors from '../model/selectors';

function advanceForward() {
  const sel = selectors();

  const { left } = sel.imgContainer.style;
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

function highlightDot(num) {
  const sel = selectors()
  const dotID = `dot${num}`
  const dot = document.getElementById(dotID)
  const className = 'current-dot'
  const parent = sel.dotContainer
  // eslint-disable-next-line no-restricted-syntax
  for (const child of parent.children) {
    if (child.classList.contains(className)) {
      child.classList.remove(className)
    }
  }
  dot.classList.add(className)
}

// function autoPlay() {

// }

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

function dotClicks(e) {
  const { id } = e.target;
  const dotNum = id.replace(/[^0-9]/g, '');
  console.log('dotnum', dotNum);
  const leftNumber = 10 - 80 * dotNum;
  console.log('leftNumber', leftNumber);
  const leftPercentage = `${leftNumber}%`;
  selectors().imgContainer.style.left = leftPercentage;
  highlightDot(dotNum)
}

function carouselEvent() {
  const sel = selectors();
  sel.frame.addEventListener('click', (e) => manageClicks(e));
  sel.dotContainer.addEventListener('click', (e) => dotClicks(e));
}

export default carouselEvent;
