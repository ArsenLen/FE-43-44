// 1. При отправке пользователем формы, в консоли отобразить "отправлено"
let form = document.querySelector(".product-form")
let productName = document.querySelector("input[name='product-name']") // находим input с имемен product-name
let productPrice = document.querySelector("input[name='product-price']") // находим input с имемем product-price
let productsWrapper = document.querySelector(".products-wrapper") // находим контейнер с продуктами

let products = [ // коллекция данных - products. продукты
    { // документ - одна единица коллекции. один продукт. 
        name: "Велосипед",
        price: 40000
    }, // el - один объект, один элемент массива. el.name - Велосипед. el.price - 40000
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
// слушаем сабмит(отправку) формы. CREATE - СОЗДАНИЕ НОВОГО ПРОДУКТА
form.addEventListener("submit", function(event) {
    event.preventDefault() // отмена действия по умолчанию
    // console.log(productName.value) // название элемента, которое хочет добавить пользователь
    // console.log(productPrice.value) // цена элемента, которую хочет добавить пользователь

    // Создаем объект с продуктом, который хочет добавить пользователь, на основе введенных данне    
    let newProduct = {
        name: productName.value, // "Test"
        price: Number(productPrice.value) // "25500" - string/строка -> 25000 - число
    } 
    // Добавляем объект newProduct в массив products
    products.push(newProduct)
    // Вызываем отрисовку продуктов с обновленным массивом
    renderProducts(products)
    onHover()
    deleteProduct()
    clearInputs()
})

// Функция очистки значения полей ввода 
// let clearInputs = () => {}
function clearInputs() {
    productName.value = ''
    productPrice.value = ''
}
// переменная видна только внутри блока кода, в котором она создана

// Создать функцию renderProducts(), которая принимает массив arr в аргументы
// Функция должна для каждого элемента массива arr отобразить разметку
// В получаемом массиве лежат объекты со свойтсвами name, price
// forEach(), innerHTML. Вызвать функцию с массивом products. renderProducts(products)
// `${name}${price}`

// READ - СЧИТЫВАНИЕ/ОТОБРАЖЕНИЕ ПРОДУКТОВ
function renderProducts(arr) {
    productsWrapper.innerHTML = ""
    arr.forEach(function(el) {
        productsWrapper.innerHTML += `
            <div class="product">
                <p class="product-name">${el.name}</p>
                <p class="product-price">${el.price}</p>
                <button class="delete-btn" >X</button>
            </div>
        `
    })
}
renderProducts(products) // immediately invoke. 


// Функция, которая позволяет, при наведении на элемент, отображать кнопку удаления
// mouseover - когда курсор наводится на элемент
// mouseout - когда курсор уходит из элемента
function onHover() {
    let product = document.querySelectorAll(".product") // получаем все карточки
    product.forEach(function(el) { // el - каждый div с классом продукт
        el.addEventListener("mouseover", function() {
            el.querySelector(".delete-btn").style.display = "block"
        })
        el.addEventListener("mouseout", function() {
            el.querySelector(".delete-btn").style.display = "none"
        })
    })
}
onHover()

// удаление элемента при нажатии на него
function deleteProduct() {
    let deleteBtns = document.querySelectorAll(".delete-btn") // [1крестик, 2крестик...]
    deleteBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            btn.parentElement.remove() // удаляем родителя кнопки удаления
            // удаляем элемент из массива
        })
    })
}
deleteProduct()

// Переменная i видна только в этом for
// for(let i = 0; i < products.length; i++) {

// }

// Мы можем еще раз создать for loop, используя переменную i. И сделать это столько раз, сколько нужно
// for(let i = 0; i < 10; i++) {

// }

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