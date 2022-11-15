/* 
    функция - это участок кода, который заготовлен заранее, чтобы
    не повторять одни и те же действия.
*/

/*
    Есть несколько возможностей создать функцию
    1. function declaration - проходим ее
    2. function expression
    3. arrow function
*/
// суммирующая функция
function sum(a, b) {
    return a + b
}
// функция произведения
function mult(a, b) { 
    return a * b
}

// console.log(sum(20, 25)) // Вызов функции sum с аргументами 20 и 25
// console.log(sum(100, 200)) // Вызов функции sum с аргументами 20 и 20

// function calc() {
//     let num = +prompt("Введите число") // prompt() - возвращает строку. "100" + 100 = 100100
//     return mult(num, num) 
// }


// console.log(calc())

// function log(a) {
//     // действие которое позволяет распечатать что-то в консоли
// }

// Написать функцию, которая принимает аргументами два числа. Функция должна
// возвращать результат возведения в степень числа1, степенью является число 2.

// pow(5, 2) // 5^2 = 25
// pow(10, 3) // 10^3 = 1000

function power(a, b) { // 
    return Math.pow(a, b) + a
}

// 1. Возведите число а в степень b. Math.pow(a, b)

// 2. Возведите число а в степень b, к полученному рез-ту прибавьте число а.  power(5, 2)

// console.log(power(5, 2)) // 25 // 25 + 5 = 30. 

// функция greeting принимает аргументом имя и возращает "Hello + {имя}"
// function greeting() {
//     let name = prompt("Введите имя")
//     return "Hello " + name
//     return `Hello ${name}`
// }
// console.log(greeting())

// console.log(greeting("Arsen")) // "Hello Arsen"
// console.log(greeting("Eduard")) // "Hello Eduard"

/*
    функция power принимает два числа и возвращает сумму первого числа и результат возведения
    числа 1 в степень числа 2
    power(5, 2)

    5 + 25 = 30

    Math.pow() - функция, которая принимает два числа и возвращает результат возведения 
    числа 1 в степень числа 2. 
*/

/*
    1. При вызове функции calc() произойдет запрос числа и сохранение его в переменную num
    2. После произойдет вызов функции mult с аргументами num
    3. Внутри функции mult выполнится произведение чисел num и вернется их произведение
    4. Результат выполнения mult вернется из функции calc()
*/

/* В функции sum: a,b - это аргументы(параметры) функции,
    return a + b - это тело функции - то, что между {}.
    Для того, чтобы функция заработала, нужно ее вызвать.


    prompt() - 100, "Arsen". "100" - строка, с которой невозможно будет сделать мат. операции
    +prompt() - 100. 100 - число, над которым можно проводить мат. операции
*/

/*
    1: январь февраль март// 1, 2, 3,
    2: апрель май июнь // 4, 5,6
    3: июль август сентябрь // 7, 8, 9
    4: октябрь ноябрь декарбь // 10, 11 ,12
*/
/*
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; 
month 6 (June), is part of the second quarter; 
and month 11 (November), is part of the fourth quarter.

Функция получает параметром число от 1 до 12.
Вернуть квартал, к которому принадлежит месяц.

*/
const quarterOf = (month) => {
    if(month <= 3) {
      return 1 // после ретурна ничего дальше не выполняет
    } 
    if(month <= 6) {
      return 2
    }
    if(month <= 9) {
      return 3
    }
    return 4
}
// // let month =prompt("Введите число")
// quarterOf(3) // 1. console.log()

// console.log(quarterOf(8)) // 

/* из html приходит число */
// quarterOf(name)

// && - булевое или логическое И
// || - булевое или логическое ИЛИ <= >=

// Написать функцию, которая работает след образом:
// Если прокидываем число больше 50, то выводим в консоли "больше и 50", 
// иначе просто выводим число

// function num(number) {
//     if(number > 50) {
//         console.log("Больше", number)
//     } else {
//         console.log(number)
//     }
// }

function num(number) {
    if(number > 50) {
        return `Больше, ${number}`
    }
    return number
}

let prompt("")
/*
1. Вводные данные- prompt 
2. Функция - алгоритм действий 
3. Вывод данных
*/

// let myNum = +prompt("Введите число")
// num(myNum)

// console.log("Больше", 70)
// console.log(35)

// Если(один больше двух)

// Если(температура больше 15)
// Иначе

/*
    function num(number) {
        return num
        this()
    }

    let num = (number) => {
        return num
    }

    let num = (number) => return num

    let num = number => num
    apply, bind
*/


// function sale(number) {
//     if(number > 50) {
//         return number-10%
//     }
//     if(number > 100) {
//         return number-10%
//     }
// }

// let sum = document.querySelector(".item")

// let outputSum = sale(sum)

// let title = document.querySelector("h1")
// h1.innerHTML(outputSum)



/*
    ДЗ.
    Задача1. Написать функцию, которая аргументами получается два числа и возвращает большее из них.
    Задача2. Написать функцию, которая принимает аргументом число(больше 0)
    и возвращает массив чисел от 0 до этого числа
*/

// 5 ---> [0, 1, 2, 3, 4, 5]