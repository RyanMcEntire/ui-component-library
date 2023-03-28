/* eslint-disable no-restricted-syntax */

export default class Element {
  constructor(elementType) {
    this.elementType = elementType;
    this.attributes = {};
    this.children = [];
    this.eventListeners = {};
  }

  addAttributes(attributes) {
    for (const [key, value] of Object.entries(attributes)) {
      this.attributes[key] = value;
    }
    return this;
  }

  addChild(childElement) {
    this.text = undefined;
    this.children.push(childElement);
    return this;
  }

  addText(text) {
    this.children = [];
    this.text = text;
    return this;
  }

  addEventListener(eventType, listener) {
    if (!this.eventListeners[eventType]) {
      this.eventListeners[eventType] = [];
    }
    this.eventListeners[eventType].push(listener);
    return this;
  }

  build() {
    const newElement = document.createElement(this.elementType);

    for (const [attribute, value] of Object.entries(this.attributes)) {
      if (typeof value === 'boolean') {
        newElement.toggleAttribute(attribute, value);
      } else {
        newElement.setAttribute(attribute, value);
      }
    }

    for (const [eventType, listeners] of Object.entries(this.eventListeners)) {
      listeners.forEach((listener) => {
        newElement.addEventListener(eventType, listener);
      });
    }

    if (this.text === undefined) {
      for (const child of this.children) {
        newElement.appendChild(child.build());
      }
    } else {
      const DOMtext = document.createTextNode(this.text);
      newElement.appendChild(DOMtext);
    }

    return newElement;
  }
}
