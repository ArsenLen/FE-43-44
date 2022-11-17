/* 
    setAttribute('attrName', 'attrValue') - добавляет аттрибут тегу
    getAttribute('attrName') - получает значение атрибута у тега 

    <img src="" alt="">, img- тег, src-атрибут, "" - значение атрибута
    <div class="item" id="hello"></div>  class-это атрибут, id - атрибут
*/

// ПОЛУЧЕНИЕ АТРИБУТА___________________________

// Получить аттрибут класс тега div

// let item = document.querySelector("div")

// let itemClass = item.getAttribute("class")
// let itemId = item.getAttribute("id") // null
// // находим div и не кладем его в переменную
// let itemClass1 = document.querySelector("div").getAttribute("class")
// console.log(itemClass1)

// Задача. Получить значение атрибута href у тега a.
// let link = document.querySelector("a") // если переменная будет еще использоваться! чаще этот вариант
// let googleLink = link.getAttribute("href")
// console.log(googleLink)

// У тега p получить атрибут id. 
// let text = document.querySelector("p")
// let textId = text.getAttribute("id")
// console.log(textId)

// let googleLink1 = document.querySelector("a").getAttribute("href") - если переменная с тегом нигде больше не нужна
// document.querySelector("a").innerText("Ссылка на гугл") 
// 
// let text = document.querySelector("p")
// let text1 = document.querySelector(".text")
// let text2 = document.querySelector("#text-1")

// text.getAttribute("id")

// Добавление атрибута и значения

// Тегу div добавить атрибут id 

// let item = document.querySelector("div")

// item.setAttribute("id", "item-1") // добавить для тега div атрибут id со значением item-1
// console.log(item.getAttribute("id")) // после добавления id, сразу получаем его


// Для тега img добавить в атрибут src добавить значение "img-1.jpg"

// По нажатию на кнопку button добавлять атрибут src для картинки  "img-1.jpg"

// let image = document.querySelector("img")
// let button = document.querySelector("button")

// function addAttr() {
//     image.setAttribute("src", "./images/img-1.jpg")
// }

// // addAttr() // мы ее запускаем

// button.addEventListener("click", addAttr)  

// button.addEventListener("click", function() {
//     image.setAttribute("src", "./images/img-1.jpg")
// })

/*
    addAttr() // immediately invoke - немедленный вызов функции. принудительный вызов. мы иницируем вызов функции

    addEventListener("eventType", callback)

    addAttr - callback функция обратного вызова - вызов передаем в другую функцию/метод, круглые скобки не ставим
    инициатором вызова cb функции является другая функция
    коллбеки при вызове не нуждаются в добавлении () 
*/

// getAttribute("src") == ""

// removeAttribute("attrName") Сделать доп. кнопку для удаления атрибута src/
// Показать картинку/Скрыть картинку.
// hasAttribute("attrName") - возвращает true, если атрибут есть и false, если не существует.

// повесить слушатель - addEventListener на кнопку button. и в функции сделать действие
// setAttribute("src", "/images/img-1.jpg")

/*
1. находим кнопку
2. находим картинку
3. вешаем слушатель addEventListener
4. пишем функцию - обработчик события, внутри которой делаем действие tagName.setAttribute("src", "./img1.")
*/

// Задача. Есть 3 тега img, для каждого из них добавить атрибут src с соотв-й картинкой:

// для 1й - <img src="/images/img-1.jpg"> 
// для 2й - <img src="/images/img-2.jpg"> 
// для 3й - <img src="/images/img-3.jpg">
// let sources = ["img-1.jpg", "img-2.jpg", "img-2.jpg"]


let images = document.querySelectorAll("img")
console.log(images) // images объединяет несколько тегов

for(let i = 0; i < images.length; i++) {
    images[i].setAttribute("src", `./images/img-${i+1}.jpg`)
}

// 0 - 1
// 1 - 2
// 2 - 3


// setAttribute("src", "/images/img-1.jpg")
// // setAttribute("src", "/images/img-2.jpg")
// setAttribute("src", "/images/img-3.jpg")

// `/images/img-${dynamic}.jpg`
// В консоли вывести значение атрибута src каждой картинки внутри nodeList images.
// С помощью цикла. 


/* 
1. Project10. Buttons. При нажатии на кнопку менять цвет body.
    У вас должен быть слушатель для всех кнопок. По нажатию на каждую кнопку отображаете в консоли "клик"
    По нажатию на каждую кнопку, считывать атрибут id нажатой кнопки
    Менять фона body на считанный атрибут id.
    Добавить кнопку blue и orange. 

2. Создать 5 тегов <p> в html. Из массива let texts = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"]
    для каждого тега p добавить соотв-ю текст. innerText

3. Есть массив arr = [
    {
        link : "https://google.com",
        title : "Ссылка на гугл"
    },
    {
        link : "https://instagram.com",
        title : "Ссылка на инстаграм"
    },
    {
        link : "https://facebook.com",
        title : "Ссылка на фейсбук"
    }
]
    В html создаем 3 тега a - <a href=""></a> x3. Для каждого из трех, 
        добавить link в href и title внутрь тега из массива arr

4. Создать две кнопки - <button>PLUS</button>, <button>MINUS</button>
    Создать тег p с начальным значением - 0. 
    При клике на buttonPlus увеличивать значение в теге p на 1
    При клике на buttonMinus уменьшать значение в теге p на 1
    addEventListener. innerText. 
*/