export default function selectors() {
  return {
    dropButton: document.getElementById('dropdown'),
    submenu: document.querySelectorAll('.submenu'),
    forward: document.getElementById('forward'),
    back: document.getElementById('back'),
    frame: document.getElementById('frame'),
    imgContainer: document.getElementById('img-container')
  };
}
