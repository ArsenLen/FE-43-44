/* 
    addEventListener() - метод, позволяющий повесить(добавить) слушатель события.
    addEventListener() - функция, но т.к она находится внутри объекта, то называется методом.
    Он принимает два аргумента. 
    1й - тип события - "click", "submit", "focus"
    2й - функция(коллбэк функция - функция обратного вызова) 
        - действие, которое должно произойти в ответ на событие
    анонимная функция - функция без названия
*/

/*
    Методы:
    querySelector() - выборка элемента
    querySelectorAll() - выборка нескольких элементов
    addEventListener() - вешаем слушатель события

    Свойства:
    firstChild - выбор первого дочернего элемента
    lastChild - выбор последнего дочернего элемента
    childNodes[] - выбор всех дочерних элементов
    innerText - текстовое содержимое элемента

    let user = {
        name : "Arsen",
        fn : function() {
            console.log("hello")
        }
    }
    user.name - свойство
    user.fn() - метод
 */

// let main = document.querySelector("main")
// main.innerText - возвращает все текстовое содержимое внутри тега и его дочерних элементов
// innerText так же позволяет изменить текстовое содержимое элемента
// console.log(main.innerText) 

// Задача. в консоли поочередно вернуть текстовый контент каждого из трех элементов
/*
    let laptop = {
        marka : "Asus"
    }

  <div class="item">
        <p class="text">Hello World</p>
        <h4 class="title">Hello, Arsen</h4>
        <a href="">Hello Hello</a>
    </div>
*/
// let text1 = document.querySelector(".text")
// console.log(document.querySelector("p"))

// let text = document.querySelector(".item-1 p")
// console.log(text.innerText)

// let title = document.querySelector(".item-1 .title")
// console.log(title.innerText)

// let link = document.querySelector(".item-1 a")
// console.log(link.innerText)


// находим div, а потом внутри него другие элементы
// let item = document.querySelector(".item-1") // item = <div class="item-1"></div>
// let text1 = item.querySelector(".title")
// console.log(text1)

// let titles = document.querySelectorAll(".title")
// console.log(titles)

/* 
    Если хотим выбрать один элемент, то используем метод querySelector()
    Мы можем использовать такие же селекторы, как и в css


    1. Селектор по тегу - document.querySelector("tagName") - без точки, решетки и тд
    2. Селектор по классу - document.querySelector(".className") - с точкой
    3. Селектор по идентификатору(id) - document.querySelector("#id") - с решеткой

*/

// Задача. В теге p, с классом текст(1й), в котором написано "Hello Wolrd 2" 
// заменить строку на "Привет Мир 2"

// let text = document.querySelector(".text") // Здесь находим тег p с классом text
// text.innerText = "Привет мир 2"

// Задача. Внутри тега div есть тег h4. Заменить его содержимое на "Привет, {вашеимя}"
// let title = document.querySelector(".item-1 .title")
// title.innerText = "Привет, Арсен"

// Задача. Поменять содержимое всех тегов h4 с классом title на "Привет, {вашеимя}".

let titles = document.querySelectorAll(".title")
console.log(titles)
// titles[0].innerText = "Привет Арсен"
// titles[1].innerText = "Привет Арсен"
// titles[2].innerText = "Привет Арсен"
// titles[3].innerText = "Привет Арсен"
// titles[4].innerText = "Привет Арсен"

for(let i = 0; i < titles.length; i++) {
    titles[i].innerText = "Привет Арсен"
}

// В каждом теге p внутри div.item-1 изменить значение текста на "HELLO MY FRIEND"
let texts = document.querySelectorAll(".item-1 p")

for(let i = 0; i < texts.length; i++) {
    texts[i].innerText = "Hello My Friend"
}


// При нажатии на теги p внутри item-2 меняем их содержимое на "Hello MY friend"
let newTexts = document.querySelectorAll(".item-2 p")
for(let i = 0; i < newTexts.length; i++) {
    newTexts[i].addEventListener("click", function() {
        console.log("click")
        //ДЗ. в этом месте вам нужно заменить содержимое на "Hello MY FRIEND"
    })
}

/*
    В project10. При нажатии на любую кнопку в консоли отображать "на меня кликнули"
*/


/*  titles.length - длина списка - 5 - это количество элементов внутри
    1. i = 0, 0 < 5 - true, titles[0].innerText = "Привет Арсен", i++
    2. i = 1, 1 < 5 - true, titles[1].innerText = "Привет Арсен", i++
    3. i = 2, 2 < 5 - true, titles[2].innerText = "Привет Арсен", i++
    4. i = 3, 3 < 5 - true, titles[3].innerText = "Привет, Арсен", i++
    5. i = 4, 4 < 5 - true, titles[4].innerText = "Привет, Арсен", i++
    6. i = 5, 5 < 5 - false, ------------------------------------
*/

/* 
    let title = {
        innerText : "Hello World"
    }
    title.innerText = "Привет мир"

    let titles = [
        {
            innerText : "Hello World"
        },
        {
            innerText : "Hello World"
        },
        {
            innerText : "Hello World"
        }
    ]
    titles.innerText
*/