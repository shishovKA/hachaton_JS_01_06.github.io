class Title {

    constructor (textValue, container) {
        this.textValue = textValue;
        this.container = container;

        this.element = this._create();

        this.renderElement = this.renderElement.bind(this);
        this.removeElement = this.removeElement.bind(this);
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

    _setEventListeners() {
//        this.btnLike.addEventListener('click', this._like);
//        this.btnDelete.addEventListener('click', this._remove);
//        this.image.addEventListener('click', this._openImage);
      }

    _delEventListeners() {
//        this.btnLike.removeEventListener('click', this._like);
//        this.btnDelete.removeEventListener('click', this._remove);
//        this.image.removeEventListener('click', this._openImage);
    }

}
