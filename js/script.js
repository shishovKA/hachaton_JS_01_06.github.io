"use strict";


(function () {
//РАЗДЕЛ: Константы

const pageContainer = document.querySelector('.page-container'); //контайнер страницы, куда кладуться элементы
const storage = new Storage(localStorage, startData);
const popup = new PopupIcon(document.body);


//попапы
//const popupNewPlace = new PopupNewPlace(document.querySelector('.root'));


//РАЗДЕЛ: Функции


//функция загрузки начальных данных
function loadStartPage() {
  
    const startElements = storage.data.map(item => {
        switch(item.type) {
            case 'title':
                return  new Title(item.textValue, pageContainer, item.id, storage);
            break;

            case 'article':
                return  new Article(item.textValue, pageContainer, item.id, storage);
            break;

            case 'text':
                return  new Text(item.textValue, pageContainer, item.id, storage);
            break;

            case 'icon':
                return  new Icon(item.link, pageContainer, item.id, storage, popup);
            break;
        } 
    });

    startElements.forEach(element => {
        if (element !== undefined) {
        element.renderElement();}
    });
     
}





//РАЗДЕЛ: Слушатели событий



//РАЗДЕЛ: Вызов функций и методов

loadStartPage();

localStorage.clear();


})();
