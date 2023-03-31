import components from '../model/components';
import adventure from './img/adventure.jpg';
import anri from './img/anri.jpg';
import breakin2 from './img/breakin2.jpg';
import cameo from './img/cameo.jpg';
import change from './img/change.jpg';
import forgetmenots from './img/forgetmenots.jpg';
import headlines from './img/headlines.jpg';
import kashif from './img/kashif.jpg';
import kleeer from './img/kleeer.jpg';
import shakatak from './img/shakatak.jpg';
import selectors from '../model/selectors';

const ele = components();

function imageContainer() {
  return ele
    .divCI('img-container', 'img-container')
    .addChild(
      ele.imgSACI(
        adventure,
        'Kikuchi Momoko – Adventure = アドベンチャー',
        'albumArt',
        'adventure'
      )
    )
    .addChild(
      ele.imgSACI(anri, 'Anri – Timely!! = タイムリー', 'albumArt', 'anri')
    )
    .addChild(
      ele.imgSACI(
        breakin2,
        "Various – Breakin' 2 - Electric Boogaloo - Original Soundtrack Recording",
        'albumArt',
        'breakin2'
      )
    )
    .addChild(ele.imgSACI(cameo, 'Cameo – Single Life', 'albumArt', 'cameo'))
    .addChild(
      ele.imgSACI(change, 'Change – The Glow Of Love', 'albumArt', 'change')
    )
    .addChild(
      ele.imgSACI(
        forgetmenots,
        'Patrice Rushen – Forget Me Nots',
        'albumArt',
        'forgetmenots'
      )
    )
    .addChild(
      ele.imgSACI(
        headlines,
        'Midnight Star – Headlines',
        'albumArt',
        'headlines'
      )
    )
    .addChild(ele.imgSACI(kashif, 'Kashif – Kashif', 'albumArt', 'kashif'))
    .addChild(
      ele.imgSACI(kleeer, 'Kleeer – Intimate Connection', 'albumArt', 'kleeer')
    )
    .addChild(
      ele.imgSACI(
        shakatak,
        'Shakatak – Down On The Street',
        'albumArt',
        'shakatak'
      )
    );
}

function imageSliderFrame() {
  return ele
    .divCI('frame', 'frame')
    .addChild(imageContainer())
    .addChild(ele.divCI('shadow', ''))
    .addChild(ele.divCI('advance-button forward', 'forward').addText('>'))
    .addChild(ele.divCI('advance-button back', 'back').addText('<'));
}

function navBar() {
  return ele.divCI('carousel-nav-bar', '').addChild(
    ele
      .divCI('nav-dot-container', 'nav-dot-container')
      .addChild(
        ele.divCI('nav-dot', 'dot0').addAttributes({
          value: 0,
        })
      )
      .addChild(
        ele.divCI('nav-dot', 'dot1').addAttributes({
          value: 1,
        })
      )
      .addChild(
        ele.divCI('nav-dot', 'dot2').addAttributes({
          value: 2,
        })
      )
      .addChild(
        ele.divCI('nav-dot', 'dot3').addAttributes({
          value: 3,
        })
      )
      .addChild(
        ele.divCI('nav-dot', 'dot4').addAttributes({
          value: 4,
        })
      )
      .addChild(
        ele.divCI('nav-dot', 'dot5').addAttributes({
          value: 5,
        })
      )
      .addChild(
        ele.divCI('nav-dot', 'dot6').addAttributes({
          value: 6,
        })
      )
      .addChild(
        ele.divCI('nav-dot', 'dot7').addAttributes({
          value: 7,
        })
      )
      .addChild(
        ele.divCI('nav-dot', 'dot8').addAttributes({
          value: 8,
        })
      )
      .addChild(
        ele.divCI('nav-dot', 'dot9').addAttributes({
          value: 9,
        })
      )
  );
}

function carousel() {
  return ele
    .divCI('carousel', 'carousel')
    .addChild(imageSliderFrame())
    .addChild(navBar())
    .build();
}

export default function displayCarousel() {
  document.body.appendChild(carousel());
  selectors().imgContainer.style.left = '10%';
  const defaultDot = document.getElementById('dot0')
  defaultDot.classList.add('current-dot');
}
