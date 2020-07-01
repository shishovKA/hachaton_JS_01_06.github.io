"use strict";


(function () {
//РАЗДЕЛ: Константы

const pageContainer = document.querySelector('.page-container'); //контайнер страницы, куда кладуться элементы
const storage = new Storage(localStorage, startData);

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

console.log(localStorage);
console.log(storage.data);

})();
