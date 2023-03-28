import Element from './element-maker';

export default function components() {
  //
  // append event listener with
  // .addEventListener('Click', (e) => function())
  //
  // .addChild(new Element goes here)
  //
  //  .build() at the end of parent div to recursively build
  //
  //
  // Div with class & id
  function divCI(className, id) {
    new Element('div').addAttributes({
      class: className,
      id,
    });
  }

  // div with class, id, & text
  function divCIT(className, id, text) {
    new Element('div')
      .addAttributes({
        class: className,
        id,
      })
      .addText(text);
  }

  // button with class, id, text
  function butCIT(className, id, text) {
    new Element('button')
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

  return { divCI, divCIT, butCIT, radCINCh, };
}
