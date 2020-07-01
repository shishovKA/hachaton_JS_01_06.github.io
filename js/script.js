"use strict";


(function () {
//РАЗДЕЛ: Константы

const pageContainer = document.querySelector('.page-container'); //контайнер страницы, куда кладуться элементы


//попапы
//const popupNewPlace = new PopupNewPlace(document.querySelector('.root'));



//РАЗДЕЛ: Функции


//функция загрузки начальных данных
function loadStartPage() {
    const title =  new Title("Правки", pageContainer);
    title.renderElement();
}


//РАЗДЕЛ: Слушатели событий

/*
document.body.addEventListener('keydown', keyHandler);
newPlaceBtn.addEventListener('click', loadNewPlacePopup); //кнопка - открыть форму "Новое место"
editBtn.addEventListener('click', loadEditPopup); //кнопка - открыть форму "Редактировать профиль"
avatarBtn.addEventListener('click', loadAvatarPopup);
*/

//РАЗДЕЛ: Вызов функций и методов

loadStartPage();

console.log(localStorage)

})();
