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
    .addChild(ele.divCI('shadow', ''));
}

function navBar() {
  return ele.divCI('carousel-nav-bar', '').addChild(
    ele
      .divCI('nav-dot-container', '')
      .addChild(ele.divCI('nav-dot', 'dot1'))
      .addChild(ele.divCI('nav-dot', 'dot2'))
      .addChild(ele.divCI('nav-dot', 'dot3'))
      .addChild(ele.divCI('nav-dot', 'dot4'))
      .addChild(ele.divCI('nav-dot', 'dot5'))
      .addChild(ele.divCI('nav-dot', 'dot6'))
      .addChild(ele.divCI('nav-dot', 'dot7'))
      .addChild(ele.divCI('nav-dot', 'dot8'))
      .addChild(ele.divCI('nav-dot', 'dot9'))
      .addChild(ele.divCI('nav-dot', 'dot10'))
  );
}

export default function carousel() {
  return ele.divCI('carousel', 'carousel').addChild(imageSliderFrame())
  .addChild(navBar())
  .build()
}
