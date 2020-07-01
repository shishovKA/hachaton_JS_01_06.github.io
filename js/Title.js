class Title {

    constructor (textValue, container, id, storage) {
        this.textValue = textValue;
        this.container = container;
        this.id = id;
        this.storage = storage;

        this.element = this._create();

        this.renderElement = this.renderElement.bind(this);
        this.removeElement = this.removeElement.bind(this);
        this.inputText = this.inputText.bind(this);
        this._setEventListeners();
    }

    renderElement() {
        this.container.append(this.element);
    }

    _create () {
        const title = document.createElement('h1');
        title.textContent = this.textValue;
        title.classList.add('title');
        title.setAttribute("contenteditable", "true");
        return title;
    }

    removeElement () {
        this._delEventListeners();
        this.element.remove();       
    }

    inputText(event) {
        this.textValue = event.target.textContent;
        this.storage.updateElmentById(this.id,this.textValue);
    }

    _setEventListeners() {
        this.element.addEventListener("input", this.inputText);
      }

    _delEventListeners() {
//        this.btnLike.removeEventListener('click', this._like);
//        this.btnDelete.removeEventListener('click', this._remove);
//        this.image.removeEventListener('click', this._openImage);
    }

}
