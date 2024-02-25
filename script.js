let buttonPopupProfile = document.querySelector(".profile__edit-button")
let popupProfile = document.querySelector(".popup-profile")
let popupForm = document.querySelector(".popup-profile__form")
let popupInputName = document.querySelector(".popup__input-name")
let popupInputJob = document.querySelector(".popup__input-job")
let popupSaveButton = document.querySelector(".popup__save-button")
let profileAddButton = document.querySelector(".profile__add-button")
let popupCard = document.querySelector(".popup-card")
let likeButton = document.querySelectorAll(".element__like-button")
let cardsContent = document.querySelector(".elements")
let popupInputTitle = document.querySelector(".popup__input-title")
let popupInputUrl = document.querySelector(".popup__input-url")
let popupCardForm = document.querySelector(".popup-card__form")
let popupImage = document.querySelector(".popup-image")
let popupImageImg = popupImage.querySelector(".popup-image__img")
let popupImageName = popupImage.querySelector(".popup-image__name")
let buttonClosePopup = document.querySelectorAll(".popup__close-button")


// buttonClosePopup = [".popup__close-button", ".popup__close-button", ".popup__close-button"]

let initialCards = [
    {
        name: "Архыз",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
        name: "Челябинская область",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
        name: "Иваново",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
        name: "Камчатка",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
        name: "Холмогорский район",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
        name: "Байкал",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    },


]







function formSubmitHandler(event) {
    event.preventDefault()
    let profileTitle = document.querySelector(".profile__title")
    let profileSubtitle = document.querySelector(".profile__subtitle")
    profileTitle.textContent = popupInputName.value
    profileSubtitle.textContent = popupInputJob.value
    closePopup();
}

function closePopup(a) {
    a.classList.remove("popup-opened");
}

function openPopup(popup) {
    popup.classList.add("popup-opened")
}

function createCard(card) {
    // Находим шаблон для создания карточки в контейнере карточек.
    // content - это свойство элемента, содержащее его содержимое.
    let contentItemTEmplate = cardsContent.querySelector("#place-template").content

    // Клонируем содержимое шаблона карточки.
    // метод cloneNode используется для создания копии выбранного элемента.
    // Здесь true указывает, что копируется весь элемент со всем его содержимым.
    let newCards = contentItemTEmplate.querySelector(".element").cloneNode(true)
    let image = newCards.querySelector(".element__img")
    let title = newCards.querySelector(".element__subtitle")
    let likeButton = newCards.querySelector(".element__like-button")
    let deleteButton = newCards.querySelector(".element__delete-button")

    // Задаем значения атрибутов "alt" и "src" изображения карточки.
    image.alt = card.name
    image.src = card.link
    title.textContent = card.name
    likeButton.addEventListener("click", function (event) {
        event.target.classList.toggle("element__like_active")
    })

    deleteButton.addEventListener("click", function (event) {
        event.target.closest(".element").remove()
    })

    image.addEventListener("click", function (event) {
        popupImageImg.src = event.target.src
        popupImageName.textContent = event.target.alt
        openPopup(popupImage)
    })



    return newCards
}


function createCardPopup(event) {
    event.preventDefault()


    if (popupInputTitle.value !== "" &&
        popupInputUrl.value !== ""
    ) {
        let card = {
            name: popupInputTitle.value,
            link: popupInputUrl.value,
        }


        cardsContent.prepend(createCard(card))
        popupInputTitle.value = ""
        popupInputUrl.value = ""
        closePopup(popupCard)
    }
}

initialCards.forEach((card) => {
    cardsContent.prepend(createCard(card))
})


buttonClosePopup.forEach((item) => {
    let popup = item.closest(".popup")
    item.addEventListener("click", () => closePopup(popup))

})

profileAddButton.addEventListener("click", function () {
    openPopup(popupCard)
})

buttonPopupProfile.addEventListener("click", function () {
    openPopup(popupProfile)
})



document.addEventListener("keydown", function (event) {
    if (event.key === 'Escape') {
        let openedPopup = document.querySelector(".popup-opened")
        if (openedPopup) {
            closePopup(openedPopup)
        }
    }
})

popupCardForm.addEventListener("submit", createCardPopup)

popupForm.addEventListener("submit", formSubmitHandler)


// document.addEventListener("click", function (event) {
//     console.log(event.target)
// })




// function sayHi() {
//     console.log('Привет');
// }

// function sayHello(name) {фывфыввфывфывфывфыв
//     console.log("Привет" + name)
// }

// sayHello('Дмитрий')

// function summ(a, b) {
//     console.log(a + b)
// }

// summ(10, 30)


