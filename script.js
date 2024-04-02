"use strict";
// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
const elem = document.getElementById("super_link");
console.log(elem);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
const linkNodeList = document.querySelectorAll(".card-link");
linkNodeList.forEach((element) => {
  element.textContent = "ссылка";
});

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
const cardBody = document.querySelector(".card-body");
console.log(cardBody.querySelectorAll(".card-link"));

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
const atr = document.querySelector('[data-number ="50"]');
console.log(atr);
// 5. Выведите содержимое тега title в консоль.
const titlee = document.title;
console.log(titlee);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
const father = document.querySelector(".card-title");
console.log(father.parentNode);

// 7. Создайте тегp`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
const newTeg = document.createElement("h2");
newTeg.textContent = "Привет";
document.querySelector(".card").prepend(newTeg);

// 8. Удалите тег h6 на странице.
document.querySelector("h6").remove();
