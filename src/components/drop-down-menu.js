import components from '../model/components';

const ele = components();

function menu() {
  return ele
    .divCI('menu-container', 'menu-container')
    .addChild(
      ele
        .divCI('rectangle main', 'menu-main')
        .addChild(ele.divCI('menu-header menu-text', '').addText('Test Menu'))
        .addChild(ele.butCIT('dropdown', 'dropdown', 'more'))
    )
    .addChild(ele.divCI('submenu', 'sub1').addText('item 1'))
    .addChild(ele.divCI('submenu', 'sub2').addText('item 2'))
    .addChild(ele.divCI('submenu', 'sub3').addText('item 3'))
    .addChild(ele.divCI('submenu', 'sub4').addText('item 4'))
    .addChild(ele.divCI('submenu', 'sub5').addText('item 5'))
    .build();
}

export default menu;
