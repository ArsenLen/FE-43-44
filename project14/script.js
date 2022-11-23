/*
    .getAttribute() - получение атрибута
    .setAttribute() - добавление атрибута

    .className - свойство, которое позволяет получить и заменить класс элемента
    .classList - это объект, внутри которого есть удобные методы для добавления и удаления класса
    .classList.value - свойство, которое позволяет получить все классы элемента
    .classList.add(className) - метод, который позволяет добавить любой класс к имеющимся классам элемента
    .classList.remove(className) - метод, который позволяет удалить определенный класс элемента
    .classList.toggle(className) - переключает классы. Если есть удаляет, если нет - добавляет. 

    addEventListener() - метод, который позволяет повесить слушатель события на элемент.
    В ответ на события, мы должны делать действия
*/
// document.querySelector(".className")
let main = document.querySelector("main")
// main.className += "block"
// main.classList.add("active")

// При нажатии на button, добавить класс "active" к main
// let addBtn = document.querySelector(".add")
// addBtn.addEventListener("click", function() {
//     main.classList.add("active")
// })

// // При нажатии на button "удалить", удалять класс active у main
// let removeBtn = document.querySelector(".remove")
// removeBtn.addEventListener("click", function() {
//     main.classList.remove("active")
// })

// setTimeout(function(){}, 3000)

// При нажатии на кнопку, добавлять или удалять класс active. Если класс active есть, то удаляем и наоборот
// let button = document.querySelector(".btn")
// button.addEventListener("click", function() {
//     main.classList.toggle("active")
// })

// Создать 10 тегов p с числами от 1 до 10 с помощью forEach(). При нажатии на любой из тегов p, 
// менять цвет текста на красный.
// При еще одном нажатии, возвращать обратно на черный.

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// numbers.forEach(function(num) {
//     main.innerHTML += `<p>${num}</p>`
// })

// let texts = document.querySelectorAll("p") // [<p>1</p>, <p>2</p>, ... <p>10</p>]

// texts.forEach(function(text) {
//     text.addEventListener("click", function() {
//         text.classList.toggle("red")
//     })
// })

// Есть массив объектов. Нужно отобразить разметку в html. Внутрь div, 
// положить тег p c текстом из этого массива объектов
/*
    <div class="todo">
        <p>{Вынести мусор}</p>
    </div>
    <div class="todo">
        <p>{Проверить ДЗ}</p>
    </div>
*/

// let todos = [
//     {
//         name : "Вынести мусор"
//     },
//     {
//         name : "Проверить ДЗ"
//     },
//     {
//         name : "Создать веб-приложение"
//     },
//     {
//         name : "Помыть посуду"
//     }
// ]

// todos.forEach(function(todo) {
//     // console.log(todo.name) // каждый элемент массива
//     main.innerHTML += `
//         <div class="todo">
//             <p>${todo.name}</p>
//         </div>
//     `
// })

// при нажатии на тег div, добавлять класс line для тега p этого div
// children
// div.querySelector("p")

// element.children - список дочерних элементов(тегов) тега 
// let items = document.querySelectorAll(".todo")
// // console.log(items)
// items.forEach(function(item) {
//     item.addEventListener("click", function() {
//         // console.log(item.children[0].classList.toggle("line"))
//         console.log(item) // children - [p, button]

//         // let text = item.querySelector("p")
//         // text.classList.toggle("line")

//         item.querySelector("p").classList.toggle("line")
//     })
// })

let todo = document.querySelector(".todo")
let text = document.querySelector("p")

text.addEventListener("click", function() {
    console.log("клик по тегу p")
})

todo.addEventListener("click", function() {
    console.log("клик по тегу div")
})
// children - позволяет получить дочерние теги элемента
todo.children[1].innerText = "hello"

// todo.children.forEach(function(child) {
//     child.innerText ="hello"
// })  
// поменять текст на Hello у дочернего элемента todo, у которого индекс 1
// innerText

// С помощью forEach() создать карточки товаров из массива arr. 
// При нажатии на карточку делать ее фон красным. При втором нажатии возвращать на прежний цвет. 
let arr = [
    {
        name : "Acer",
        price : 50000,
        img : "./images/img1.jpg"
    },
    {
        name : "Asus",
        price: 45000
    },
    {
        name : "HP",
        price: 60000
    }
]