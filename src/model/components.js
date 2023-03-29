import Element from './element-maker';

export default function components() {
  //
  // append event listener with
  // .addEventListener('Click', (e) => function())
  //
  // .addChild(new Element goes here)
  //
  // .addText() to place text
  //
  // .build() after last child of most parent div to recursively build
  //
  //
  // Div with class & id
  function divCI(className, id) {
    return new Element('div').addAttributes({
      class: className,
      id,
    });
  }

  // button with class, id, text
  function butCIT(className, id, text) {
    return new Element('button')
      .addAttributes({
        class: className,
        id,
      })
      .addText(text);
  }

  // radio button with class, id, name, & checked
  function radCINCh(className, id, name, isChecked) {
    return new Element('input').addAttributes({
      class: className,
      type: 'radio',
      id,
      name,
      value: id,
      checked: isChecked,
    });
  }

  return { divCI, butCIT, radCINCh, };
}
