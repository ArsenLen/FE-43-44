/*
    innerText - с помощью этого свойства получаем текстовый контент
    innerHTML - получаем html контент. меняем html контент
*/

// let item = document.querySelector("main")

// console.log(item.innerText)
// console.log(item.innerHTML) /* <h1>Hello World</h1> */

// как добавить тег h2, при этом не теряя тег h1. к существующему тегу h1 добавить тег h2 
// item.innerHTML = item.innerHTML + "<h2>Hello</h2>"
// item.innerHTML += "<h2>Hello</h2>"

let main = document.querySelector("main")
// let name = "Arsen"
// Внутрь main добавить тег <p> со значением из переменной name, не удаляя содержимое main. <p>name</p>
// main.innerHTML += `<p>${name}</p>`

// Задача. Добавить 5 тегов p со значением Hello

// for(let i = 0; i < 5; i++) {
//     main.innerHTML += "<p>Hello</p>"
// }

// Задача. Добавить внутрь 5 тегов p со значениями Hello от 1 до 5, не удаляя содержимое main.
// <p>Hello 1</p>, <p>Hello 2</p>
// for(let i = 0; i < 5; i++) {
//     main.innerHTML += `<p>Hello ${i + 1}</p>`
// }


// Добавить внутрь main тег а, у которого ссылкой будет link, а названием link_name
// let link = "https://google.com"
// let link_name = "Google"
// <a href="https://google.com">Google</a>
// main.innerHTML += `<a href="${link}">${link_name}</a>`

// let laptop = {
//     mark : "Acer",
//     model : "G444M",
//     price : 15000
// }

// // В main добавить разметку. 
// /*
//     .innerHTML += `
//     <div>
//         <h1>laptop.mark</h1>
//         <p></p>
//         ...
//     </div>`
//     <div>
//         <h1>mark</h1>
//         <p>model</p>
//         <p>price</p>
//     </div>
// */
// main.innerHTML += `
//     <div>
//         <h1>${laptop.mark}</h1>
//         <p>${laptop.model}</p>
//         <p>${laptop.price}</p>
//     </div>
// `

// Есть объект. Нужно отобразить разметку
// let book = {
//     name : "Капитанская дочка",
//     author : "Пушкин А.С",
//     count : 700
// }
/*
       <div>
         <h1>name</h1>
         <p>author</p>
         <p>count</p>
      </div>
*/

// Есть массив объектов. Отобразить одинаковую разметку для каждого из элементов в цикле.
let laptops = [
    {
        mark : "Acer",
        model : "G444M",
        price : 18000
    },
    {
        mark : "Asus",
        model : "705K",
        price : 25000
    },
    {
        mark : "HP",
        model : "P500",
        price : 50000
    }
]

// for(let i = 0; i < laptops.length; i++) {
//     main.innerHTML += `
//         <div class="laptop">
//             <h1>${laptops[i].mark}</h1>
//             <p>${laptops[i].model}</p>
//             <p>${laptops[i].price}</p>
//         </div>
//     `
// }

// Если хотим выполнить одно и то же действие для каждого элемента массива, то используем .forEach()
// laptops.forEach(function(laptop) {
//     main.innerHTML += `
//         <div class="laptop">
//             <h1>${laptop.mark}</h1>
//             <p>${laptop.model}</p>
//             <p>${laptop.price}</p>
//         </div>
//     `
// })
/*
    laptop - элемент массива при текущей итерация
    Так как у нас 3 элемента в массиве, то при 
        1 итерации - laptop =  {
            mark : "Acer",
            model : "G444M",
            price : 18000
        }
        2 итерации - laptop = {
        mark : "Asus",
        model : "705K",
        price : 25000
        }
        3 итерации - laptop = {
            mark : "HP",
            model : "P500",
            price : 50000
        }
*/

/*
    forEach() - выполняет коллбэк функцию для каждого из элементов массива
    Внутрь коллбэка получаем текущий элемент
*/
// Добавить классы для тегов p и добавить им разные стили
// для model сделать шрифт 18px
// для price сделать шрифт 20px

// laptops[i].mark
// laptops[i].mark
// laptops[i].mark
// main.innerHTML += `
//     <div>
//         <h1>${laptop.mark}</h1>
//         <p>${laptop.model}</p>
//         <p>${laptop.price}</p>
//     </div>
// `

/*

    `` - ШАБЛОННЫЕ ЛИТЕРАЛЫ. ШАБЛОННАЯ СТРОКА
    Внутри можем записывать и строку и js переменную или выражение
    let num = 100
    `Число равно ${num + 10}` - Число равно num
*/

// addClass() - jQuery. JS - .classList.add("className")

// let num = 10
// // num = 15.
// // num = 10 + 5 // num = 15.
// num = num + 5 // num = 15
// num += 5 // num = 20

// let greeting = "Hello" // Добавить к Hello еще ваше имя. в переменной greeting "Hello Arsen"
// greeting += " Arsen" 

// // greeting = greeting + "Arsen"

// let num = 10
// num += 1
// num++
// i = i + 1.  


/*

 item.innerHTML = "<h1>Hello World</h1> <h2>Hello<h2>"

 */


// Есть массив let arr = [2, 4, 6, 8, 10]. Каждому элемнту массива добавить 2

let arr = [2, 4, 6, 8, 10]

arr.forEach(function(num) {
    // num = 2 + 1 // 3
    // num = 4 + 1 // 5
    console.log(num + 2)
})

// Есть массив let names = ["Arsen", "Paul", "Lyudmila", "Grisha"]
// В консоли вывести "Hello +имя" для каждого элемента массива
// Hello Arsen, Hello Paul, Hello Lyudmila, Hello Grisha. forEach

/*
 Есть массив объектов
 let cars = [
    {
        mark : "Mercedes-Benz",
        model : "S600",
        year : "2005",
        price : 50000
    }, 
    {
        mark : "BMW",
        model : "M5",
        year : "2010",
        price : 30000
    },
    {
        mark : "VW",
        model : "Golf5",
        year : "2015",
        price : 25000
    },
    {
        mark : "Toyota",
        model : "Camry",
        year : "2015",
        price : 25000
    }
 ] 

 Для каждого из элементов массива отобразить разметку и стилизовать ее
 <div class="car">  
    <h1>Mark Model</h1>
    <p>Год выпуска: year</p>
    <p>Цена: price</p>
 </div>
 <div class="car">  
    <h1>Mercedes-Benz S600</h1>
    <p>Год выпуска: 2005</p>
    <p>Цена: 50000</p>
 </div>
 */

// console.log(arr)

// function sum() {
//     return a + b
// }
// sum()
// arr.forEach(sum)

/*
    коллбэк функция - это функция, которую вызываем не мы, а другая функция
    коллбэк функция - это функция, которую мы передаем в аргумент другой функции
*/