/* 
    DOM-дерево. При загрузке index.html браузере, все теги превращаются в JS объекты 
    и образуют структуру.
*/

// однострочный комментарий
/*
    многострочный
    коммента-
    рий
*/

// console.log(document.body) // body 
// console.log(document.body.firstChild.childNodes) // дочерний элемент body - main
// console.log(document.body.lastChild) // последний элемент


// querySelector - метод выборки любого элемента из DOM-дерева. getElementById, getElementByClassName.
// document.getElementsByClassName(".item")
// console.log(document.querySelector("button")) // по тегу
// console.log(document.querySelector(".item")) // по классу
// console.log(document.querySelector("#green")) // по id. 
// console.log(document.querySelector("#red")) // id - red


/* 
    querySelector - если существует несколько элемнтов с заданным селектором - возвращается только 1й.
   В таких случаях, когда хотим выбрать несколько элементов, используем querySelectorAll() 
*/
// console.log(document.querySelectorAll("button")) // выбор всех тегов button
// console.log(document.querySelectorAll(".item")) // выбор всех элементов по классу .item

// let buttonRed = document.querySelector("#red")

// buttonRed.style.backgroundColor = "red"
 
// Задача. В js поменять цвет фона BODY на черный
// document.body.style.backgroundColor = "black" // рабочий

/*
    Все теги превращаются в объекты, у которых, есть свойство style(стили)
    С помощью обращения к свойству style мы можем поменять любое css свойство у элемента.
    Н-р для изменения цвета фона, нужно использовать свойство backgroundColor и задавть любое значение.
*/

/*
    background-color => backgroundColor
    kebab-case => camelCase

    buttonRed = {
        ...,
        style : {
            width: "",
            height: "",
            backgroundColor : ""
        }
    }
*/

// Задача. При нажатии на кнопку red, менять цвет фона body на красный

let buttonRed = document.querySelector("#red")

buttonRed.addEventListener("click", function() {
    document.body.style.backgroundColor = "red"
})

let buttonGreen = document.querySelector("#green")

buttonGreen.addEventListener("click", function() {
    document.body.style.backgroundColor = "green"
})

let buttonImg = document.querySelector("#img")

buttonImg.addEventListener("click", function() {
    document.body.style.backgroundImage = "url(./image.jpg)"
})

// Задача1. При нажатии на картинку, цвета фона не отрабатывают. Починить!
// Задача2. Создать кнопку <button class="item" id="random">Random</button> и
// при нажатии на кнопку Random нужно менять цвет фона body на какой-то из цветов массива
// let colors = ["OrangeRed", "SteelBlue", "MistyRose", "Brown", "SeaGreen"]
 
// Задача. При нажатии на кнопку button#img менять фон body на картинку

// Задача. При нажатии на кнопку green менять цвет фона body на зеленый

/* 
    addEventListener() - метод, позволяющий повесить(добавить) слушатель события.
    addEventListener() - функция, но т.к она находится внутри объекта, то называется методом.
    Он принимает два аргумента. 
    1й - тип события - "click", "submit", "focus"
    2й - функция(коллбэк функция - функция обратного вызова) 
        - действие, которое должно произойти в ответ на событие
    анонимная функция - функция без названия
*/