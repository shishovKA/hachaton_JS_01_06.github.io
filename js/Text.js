class Text extends Title {
  constructor (textValue, container, id, storage) {
    super(textValue, container, id, storage);
  }

  _create () {
    const container = document.createElement('div');
    container.classList.add("post-container");
    
    const paragraph = document.createElement('p');

    const buttons = document.createElement('div');
    const addArticle = document.createElement('img');
    addArticle.classList.add('buttons__add-article');
    addArticle.classList.add('button');

    addArticle.setAttribute("src", "icons/addArticle.svg");
    const addText = document.createElement('img');
    addText.classList.add('buttons__add-text');
    addText.classList.add('button');

    addText.setAttribute("src", "icons/addText.svg");
    const deleteBlock = document.createElement('img');
    deleteBlock.classList.add('buttons__delete-block');
    deleteBlock.classList.add('button');

    deleteBlock.setAttribute("src", "icons/deleteBlock.svg");
    const changeOrder = document.createElement('img');
    changeOrder.classList.add('buttons__change-order');
    changeOrder.classList.add('button');

    changeOrder.setAttribute("src", "icons/changeOrder.svg");
    buttons.classList.add('buttons');
    paragraph.textContent = this.textValue;
    paragraph.classList.add('text');
    paragraph.setAttribute("contenteditable", "true");
    buttons.append(addArticle);
    buttons.append(addText);
    buttons.append(deleteBlock);
    buttons.append(changeOrder);

    container.append(paragraph);
    container.append(buttons);
    return container;
  }
}