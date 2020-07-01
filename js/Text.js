class Text extends Title {
  constructor (textValue, container, id, storage) {
    super(textValue, container, id, storage);
  }

  _create () {
    const container = document.createElement('div');
    const paragraph = document.createElement('p');
    paragraph.textContent = this.textValue;
    paragraph.classList.add('text');
    //paragraph.setAttribute('data-id', this.id);
    paragraph.setAttribute("contenteditable", "true");
    container.append(paragraph);
    return container;
  }
}