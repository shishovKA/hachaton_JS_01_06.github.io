class Icon {

    constructor (link, container, id, storage, popup) {
        this.link = link;
        this.container = container;
        this.id = id;
        this.storage = storage;
        this.element = this._create();
        this.renderElement = this.renderElement.bind(this);
        this.loadIconPopup = this.loadIconPopup.bind(this);
        this.submitFormIcon = this.submitFormIcon.bind(this);

        this.popup = popup;
        this._setEventListeners();

    }

    renderElement() {
        this.container.append(this.element);
    }

    _create () {
        const img = document.createElement('img');
        img.classList.add('icon');
        img.setAttribute("src", this.link);
        return img;
    }


    loadIconPopup() {
        this.popup.open();
        this.popup.popupForm.addEventListener('submit', this.submitFormIcon);
    }
    
    submitFormIcon(event) {
        event.preventDefault();
        this.popup.popupForm.removeEventListener('submit', this.submitFormIcon);
        this.link = event.target.elements.link.value;
        this.element.setAttribute("src", this.link);
        console.log(event.target);
        this.popup.close();
        this.changeIcon();
    }
    
    changeIcon() {
        this.storage.updateElmentById(this.id,this.link);
    }


    _setEventListeners() {
      this.element.addEventListener('click', this.loadIconPopup);
      }

    _delEventListeners() {
//        this.btnLike.removeEventListener('click', this._like);
//        this.btnDelete.removeEventListener('click', this._remove);
//        this.image.removeEventListener('click', this._openImage);
    }

}