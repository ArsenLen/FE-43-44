// 1. При отправке пользователем формы, в консоли отобразить "отправлено"
let form = document.querySelector(".product-form")
let productName = document.querySelector("input[name='product-name']") // находим input с имемен product-name
let productPrice = document.querySelector("input[name='product-price']") // находим input с имемем product-price
let productsWrapper = document.querySelector(".products-wrapper") // находим контейнер с продуктами

let products = [ // коллекция данных - products. продукты
    { // документ - одна единица коллекции. один продукт
        name: "Велосипед",
        price: 40000
    },
    {
        name: "Самокат",
        price: 15000
    },
    {
        name: "Лыжи",
        price: 20000
    },
    {
        name: "Сноуборд",
        price: 25000
    },
]

form.addEventListener("submit", function(event) {
    event.preventDefault() // отмена действия по умолчанию
    console.log(productName.value)
    console.log(productPrice.value)
})

// Создать функцию renderProducts(), которая принимает массив arr в аргументы
// Функция должна для каждого элемента массива arr отобразить разметку
// В получаемом массиве лежат объекты со свойтсвами name, price
// forEach(), innerHTML. Вызвать функцию с массивом products. renderProducts(products)
// `${name}${price}`
function renderProducts(arr) {
    arr.forEach(function(el) {
        productsWrapper.innerHTML += `
            <div class="product">
                <p class="product-name">${el.name}</p>
                <p class="product-price">${el.price}</p>
            </div>
        `
    })
}
renderProducts(products)
/*
<div class="product">
    <p class="product-name">Велосипед</p>
    <p class="product-price">40000</p>
</div>
*/
/* 
    1. Находим форму и вешаем на нее слушатель события
    При любом событии создается объект события - event, внутри которого лежит информация об этом событии
    -кто вызвал событие, -какие компоненты участвуют, элементы формы со значениями и т.д
    Иногда нужно отменять действия по умолчанию при создании события с помощью event.preventDefault()

    У input есть атрибут value, в котором хранится введеное значение.
    
    Валидация формы - проверка на правильность введеных данных
    Шаблон для inputa.
    SetValidation() 
*/