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

    this.articleBtn = addArticle;
    this.textBtn = addText;
    this.delBtn = deleteBlock;

    return container;
  }


  addArticle() {
    let i = 0;
    let node = this.element;
    while( (node = node.previousSibling) != null ) { 
      i++;
    }

    const post = {
      type: "article",
      textValue: "(Новый заголовок)",
      id: this.storage.getId()
    }

    this.storage.insertNewPost(i,post);
    const article = new Article(post.textValue, this.container, post.id, this.storage);
    this.container.insertBefore(article.element, this.element.nextSibling);

  }

  addText() {
    let i = 0;
    let node = this.element;
    while( (node = node.previousSibling) != null ) { 
      i++;
    }

    const post = {
      type: "text",
      textValue: "(Новый текст)",
      id: this.storage.getId()
    }

    this.storage.insertNewPost(i,post);
    const text = new Text(post.textValue, this.container, post.id, this.storage);
    this.container.insertBefore(text.element, this.element.nextSibling);

  }

  delPost() {
    let i = 0;
    let node = this.element;
    while( (node = node.previousSibling) != null ) { 
      i++;
    }

    this.storage.removePost(i);
    this.removeElement();

    if (this.storage.data.length <= 2) {
      this.addLast();
    }
  }


  addLast() {

    const post = {
      type: "text",
      textValue: "",
      id: 0
    }

    this.storage.insertNewPost(0,post);
    const text = new Text(post.textValue, this.container, post.id, this.storage);
    text.renderElement();

  }

  _setEventListeners() {
    super._setEventListeners();
    this.addLast = this.addLast.bind(this);

    this.addArticle = this.addArticle.bind(this);
    this.articleBtn.addEventListener("click", this.addArticle)

    this.addText = this.addText.bind(this);
    this.textBtn.addEventListener("click", this.addText);

    this.delPost = this.delPost.bind(this);
    this.delBtn.addEventListener("click", this.delPost);
  }



}