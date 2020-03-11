'use strict';
let age = document.getElementById('age');
function showUser(surname, name) {
  console.log("Пользователь " + surname + " " + name + ", его возраст " + age.value);
}
showUser('Lushkin', 'Aleksandr');