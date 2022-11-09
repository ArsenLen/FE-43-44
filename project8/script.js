// однострочный комментарий
/* 
    многострочный. 
    JAVA != JS 
    JS - язык программирования.
    JS - язык для написания фронтенда(клиентская часть) сайтов.
    JS в браузере исполняется движком V8.

    NodeJS - платформа, которая позволяет запускать JS не только в бразуере
    JS используется и на сервере, и для моб.приложение и для игр.
    Серверные языки - PHP, Python, Ruby, Java.

    Для чего нужен JS?
    Для создания динамичных веб-сайтов и веб-приложений. 
*/

// _________________________________________

// Взаимодействие с бразуером
// alert("Hello World") // уведмоление для пользователя
// console.log("Hello Arsen") // вывод в консоли
// prompt - ввод

// _________________________________________

// 1. помимо alert, вывести имя, введеное пользователем в консоли
// let username = prompt("Введите свое имя") // name хранит имя пользователя
// username = "Ruslan" // 
// alert(username) // уведомление 
// console.log(username) // отобразить имя, которое вводит пользователь >> name >> 

// _________________________________________
// Конкатенация (склеивание строк)
// let hello = "Hello"
// console.log(hello + " World") // конкатенация строк

// _________________________________________

// 2. Мы можем склеивать строки. Пользователь с prompta вводит имя. 
// В консоли нужно вывести "Hello, {введенное имя}" 
// let username = prompt("Введите ваше имя") // username = "Arsen"
// console.log("Hello " + username) // "Hello " + "Arsen"

// _________________________________________
// Условный оператор. 
//  Если идет дождь, нужно взять зонт, иначе "Погода сегодня солнечная" 
// let isRaining = false // ДОЖДЬ ИДЕТ-true, ДОЖДЯ НЕТ - false// идетЛиДождь - правда. true - дождь идет. false - дождя нет
// if(isRaining == true) {
//     alert("Возьми зонт") // он выполняется, только если условие правдиво.
// } else {
//     alert("Погода сегодня солнечная, зонт не нужен")
// }

// Есть переменная degree, которая хранит значение 15. Если количество градусов больше 15,
// то говорим пользователю "выходи в футболке", иначе "надень кофту",
// а если количество градусов меньше 3, то говорим "надень куртку"
// let degree = 8

// if(degree > 15) {
//     alert("выходи в футболке")
// } else if(degree < 3) {
//     alert("надень куртку")
// } else {
//     alert("надень кофту") // 3 < degree < 15
// }

// 3. Если пользователь набрал в корзину товаров больше, чем на 500$, то его скидка 15%
// если набрал на больше, чем 700$, то скидка 20%, иначе "у вас нет скидки".
// Создать переменную let sale = NUMBER. Сравнивать данную переменную с пороговыми значениям
// действие - alert("Ваша скидка N"). alert("скидки нет")
// let price = 700
// if(price >= 700) {
//     alert("Ваша скидка 20%")
// } else if(price > 500) {
//     alert("Ваша скидка 15%")
// } else {
//     alert("Скидки нет")
// }




/*
    if(выражение||условие - true/false) {
        тело - действие
    } else if(выражение||условие, которое не совпадает с первым условием) {
        тело - действие
    } else {
        тело - действие
    }
*/


/*
    =  оператор присваивания. в переменную временно что-то присваиваем
    ==  оператор сравнения. Сравниваем левую и правую части. Если они равны данное выражение выдаст true. 15 == 20 - false
    === оператор сравнения с учетом типов.
    != не равно 
    !== не равно с учетом типов
    > больше
    < меньше
    <= меньше или равно
    >= больше или равно
    || ИЛИ
    && И
*/


/*
    1. положили в переменную результата prompt. username = "Arsen"
    2. username = "Ruslan"
    3. Ruslan
    4. Ruslan
*/




// let userName = "Arsen" let uSername = "Arsen"
// let filteredUserProduct = "Product"

/*
    = - оператор присваивания.
*/

/* Переменные - это способ хранения информации,данных
    Правила названия переменных
    1. исплользование латиницы. let имя = "Arsen"
    2. вначале не цифра/первый символ - не цифра. let 3name = "Arsen", let name3 = "Arsen"
    3. без пробелов и дефисов
    4. осмысленность переменной
    
    camelCase - первое слово с манленькой буквы, первая буква следующих слов с большое 
*/

/* Типы данных. 8 типов данных

1. String - строка - "Hello World", "100565" + 10 = 10056510
2. Number - число - 100565, 2.134453
3. Boolean - Булевые - true/false
4. Object - объект 
5. null - ничего, ноль
6. undefined - не задан в момент выполнения
7. Symbol - *%
8. BigInt - Большое число - >2^32
*/


//ДЗ.1. даны 3 переменные - r, g, b с определенными значениями 0-255. В консоль вывести строку rgb(r, g, b)
// let r = 40... Если r = 20, g = 50, b = 200 ---> rgb(20, 50, 200)

//ДЗ.2.  Просить у пользователя ввести число в prompt'e. Сравнивать это число со 100
// Если введеное число больше 100, то в alert отобразить "Больше", если равно "равны", иначе "Меньше"
// prompt() - это всегда строка, STRING.. let num = +prompt("Введите число") - тип данных NUMBER

//ДЗ.3. Просить пользователя ввести число дважды. Два prompta. В консоли поочередно вывести их:
// а) сумму + б)разность - в)произведение *  г)деление /
/*
    1. первый +prompt()
    2. второй +prompt()
    3. console складываем, отнимаем, умножаем и делим
*/
//  rgb(40, 50, 200)
// let r = 40
// let g = 50
// let b = 200

// let common = "rgb(" + r + ", " + g + ", " + b + ")" 
// console.log(common);

// let str = `rgb(${r}, ${g}, ${b})` // шаблонный литерал, шаблонная строка "", '', ``. ё
// console.log(str) 

// Пользователь вводит два числа, нужно узнать и отобразить в консоли большее из них.
// Если два числа равны между собой, то выводить "числа равны"
// +prompt()

// Задача. prompt("Введите число") === "100" 
// prompt("Введите число") === "100"  "100" + "100" = "100100"
// let num1 = +prompt("введите 1-е число");
// let num2 = +prompt("введите 2-e число");

// if (num1 > num2) {
//   console.log(num1);
// } else if (num1 == num2) {
//   console.log("равны");
// } else {
//   console.log(num2);
// }


// _________________________________________

// Объекты && массивы

// Объект
// let user = {
    // name : "Arsen",
    // login : "ArsenLen",
    // age : 24,
    // img : "https://img.jpg",
    // hobbies : ["Football", "Design", "Tennis"]
// }
// console.log(user)
// Массив. Использовать, когда важен порядок

// let books = ["HarryPotter1", "HarryPotter2", "HarryPotter3"]
// console.log(books)

// let user = ["Arsen", "ArsenLen", 24, "https://img.jpg", ["football", "design", "tennis"]]

// let users = [{
//     name : "Arsen",
//     login : "ArsenLen",
//     age : 24,
//     img : "https://img.jpg",
//     hobbies : ["Football", "Design", "Tennis"]
// }, {
//     name : "Arsen",
//     login : "ArsenLen",
//     age : 24,
//     img : "https://img.jpg",
//     hobbies : ["Football", "Design", "Tennis"]
// }, {
//     name : "Arsen",
//     login : "ArsenLen",
//     age : 24,
//     img : "https://img.jpg",
//     hobbies : ["Football", "Design", "Tennis"]
// }]

// let arr = { 0 : "HarryPotter1", 1 : "HarryPotter2", 2 : "HarryPotter3" }


/*
    let obj = {
        key : value
    }
    key - ключ,
    value - значение

    let arr = [
        0 : "Мастер и Маргарита",
        1 : "Социальная драма"
    ]
*/

// Попробовать создать объект book и перечислить 5 свойств книги.

// let book = ["Мастер и Маргарита", "Социальная драма", 1937]

// console.log(book[0]) // "Мастер и Маргарита"
// console.log(book[1]) //  "Социальная драма"
// console.log(book[2]) // 1937

// posts - посты в инстаграме
// post - объект {title : "My new image", src : "https://img.jpg"}, {title : "My new image 1", src : "https://img.jpg"}
// [{title : "My new image", src : "https://img.jpg"} , {title : "My new image 1", src : "https://img.jpg"}]

// Методы массива. Базовые

// let posts =  [{}, {}, {}, {}]
// {newPost} posts.push(newPost)

// let numbers = [0, 1, 2, 3, 4]
// console.log(numbers)

// ________________________ Метод push 
// numbers.push(5) // позволяет добавить элемент в конец массива
// console.log(numbers)

// __________________________________________

// let num1 = prompt("Введите число")
// Запросить у пользователя 3 числа и добавить их в массив и вывести результат в консоли
// [100, 500, <???>, <400>, <700>]
// let nums = [100, 500]
// Запросить 10 чисел. 
// let num1 = +prompt("enter num 1")
// let num2 = +prompt("enter num 2")
// let num3 = +prompt("enter num 3")

// let nums = [100, 500] // 700, 1000, 500 --> [100, 500, 700, 1000, 500]
// nums.push(num1, num2, num3)
// console.log(nums);

// _________________ Цикл for - 
// зима -> весна -> лето -> осень ----> зима -->

// console.log(nums[0]) // 10
// console.log(nums[1]) // 20
// console.log(nums[2]) // 30
// console.log(nums[3]) // 40
// console.log(nums[4]) // 50
// ____________________________
// Задача. вывести каждое число в консоли
let nums = [10, 20, 30, 40, 50] 
// nums = [0 : 10, 1 : 20, 2 : 30, 3 : 40, 4 : 50]
// Пока i меньше чем количество элемнтов в массив, в консоли отображать каждый элемент
// arr- любой массив arr.length - свойство, которое отображает количество элементов в массиве
for(let i = 0; i < nums.length; i++) {
    console.log(nums[i]) 
}
// nums.length = 5
// 1. i = 0, 0 < 5 ? - true(меньше), console.log(nums[0]) - console.log(10), i++
// 2. i = 1, 1 < 5 ? - true(меньше), console.log(nums[1]) - console.log(20), i++
// 3. i = 2, 2 < 5 ? - true(меньше), console.log(nums[2]) - console.log(30), i++
// 4. i = 3, 3 < 5 ? - true(меньше), console.log(nums[3]) - console.log(40), i++
// 5. i = 4, 4 < 5 ? - true(меньше), console.log(nums[4]) - console.log(50), i++

// 6. i = 5, 5 < 5 ? - false(не меньше - равно), console.log(nums[6])

// __________________________

// Задача. Есть массив arr. В консоль вывести числа из массива, которые больше 50
// 1. сравнивать в условии нужно arr[i] > 50
let arr = [32, 51, 60, 78, 105, 14, 10]  

for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 50) {
        console.log(arr[i]);
    }
}


// ДЗ.1. Есть массив [-10, 50, 60, 0, -100, 125]. Вывести в консоль только положительные+ числа.
// ДЗ.2. Есть массив [11, 12, 15, 17, 18, 25, 26]. Вывести в консоль только четные числа. % - вычислить остаток от деления. 10 % 2 = 0. 11 % 2 = 1
// ДЗ.3  Есть массив [10, 20, 30 ,40 , 50, 60]. Найти сумму чисел в массиве и вывести их в консоль.let sum =  sum + arr[i]
// ДЗ.4. Есть массив [-10, 50, 60, 0, -100, 125]. Найти произведение отрицательных чисел  
/* ДЗ.5
    Запросить 10 чисел. 
    let num1 = +prompt("enter num 1")
    let num2 = +prompt("enter num 2")
    let num3 = +prompt("enter num 3")

    let nums = [100, 500] // 700, 1000, 500 --> [100, 500, 700, 1000, 500]
    nums.push(num1, num2, num3)
    console.log(nums);
*/

// Задача. Вывести 5 раз число 100 в консоли

// for(let i = 0; i <= 100; i++) {
//     if(i > 30) {
//         console.log("Больше", i)
//     } else {
//         console.log(i)
//     }
// }

// 1. i = 0, i > 30 - false - - console.log(0)
// 2. i = 1, i > 30 - console.log(1)
// ...
// 32. i = 31, 31 > 30 - true, console.log("Больше",)


// 0
// 1
// 2
// ...
// 30
// Больше 31
// Больше 32
// ...
// Больше 100


// Вывести числа от 0 до 100. Если число больше 30, то в консоли нужно вывести "Больше и ${5}"
// 0-30, а числа 31-100 ---- console.log("Больше", i)

// console.log(10)
// console.log("Больше", 50)

// Нам нужно в консоли вывести ваше имя 50раз

// инкремент - увеличение на 1. i = i + 1, i += 1, i++, i = i + 1,5
// 

// 1. i = 1, 1 < 6 ? - true(меньше), console.log(100) - 1-я итерация. i++ - увеличение на 1
// 2. i = 2, 2 < 6 ? - true(меньше), console.log(100) - 2-я итерация. i++ - увел на 1
// 3. i = 3, 3 < 6 ? - true(меньше), console.log(100) - 3-я итерация. i++ - увел на 1
// 4. i = 4, 4 < 6 ? - true(меньше), console.log(100) - 4-я итерация. i++ - увел на 1
// 5. i = 5, 5 < 6 ? - true(меньше) - выходим из цилка --> окончание цикла 

// 1. i = 0, 0 < 1000 - true, console.log(100)
// 2. i = 5, 5 < 1000 - true, consoe.log(100)
// 3. i = 5, 5 < 1000 - true
// 200. i 1000 

/*
    for(начало, условие, шаг) {
        действие
    }

    начало - выражение, которое позволяет создать начало цикла

    условие - действие должно выполняться ограниченное кол-во раз. Условие позволяет остановить цикл,
    когда нужн

    шаг - обновление, увеличение. наше действие должно выполняться с определенным промежутком
*/

